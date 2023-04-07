import { renderToReadableStream } from 'react-dom/server';
import { RemixServer } from '@remix-run/react';
import type { EntryContext } from '@remix-run/cloudflare'; // or cloudflare/deno
import isbot from 'isbot';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const body = await renderToReadableStream(
    <RemixServer context={remixContext} url={request.url} />,
    {
      signal: request.signal,
      onError(error) {
        console.log(error);
        responseStatusCode = 500;
      }
    }
  );

  if (isbot(request.headers.get('user-agent'))) await body.allReady;

  const { staticHandlerContext } = remixContext;

  const { pathname } = staticHandlerContext.location;

  if (pathname) {
    responseHeaders.set(
      'Link',
      `https://fedeminaya.com${
        pathname.length > 1 ? pathname : ''
      }; rel="canonical"`
    );
  }

  responseHeaders.set('Content-Type', 'text/html');

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
