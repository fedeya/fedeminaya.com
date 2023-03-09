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
  let didError = false;

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

  responseHeaders.set('Content-Type', 'text/html');

  return new Response(stream, {
    headers: responseHeaders,
    status: didError ? 500 : responseStatusCode
  });
}
