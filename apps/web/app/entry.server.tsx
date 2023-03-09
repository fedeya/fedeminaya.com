import { renderToReadableStream } from 'react-dom/server';
import { RemixServer } from '@remix-run/react';
import type { EntryContext } from '@remix-run/cloudflare'; // or cloudflare/deno
import isbot from 'isbot';
import { otherRootRouteHandlers } from './utils/otherRootRoutes.server';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let didError = false;

  for (const handler of otherRootRouteHandlers) {
    const otherRouteResponse = await handler(request, remixContext);
    if (otherRouteResponse) return otherRouteResponse;
  }

  const stream = await renderToReadableStream(
    <RemixServer context={remixContext} url={request.url} />,
    {
      onError() {
        didError = true;
      }
    }
  );

  if (isbot(request.headers.get('user-agent') ?? '')) {
    await stream.allReady;
  }

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

  return new Response(stream, {
    headers: responseHeaders,
    status: didError ? 500 : responseStatusCode
  });
}
