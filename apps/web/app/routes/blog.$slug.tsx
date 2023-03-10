import type { LoaderArgs } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { jsonHash } from 'remix-utils';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import clsx from 'clsx';

export const loader = async ({ params, context }: LoaderArgs) => {
  return jsonHash({
    blog: context.services.api.getBlogBySlug(params.slug!)
  });
};

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-semibold">{children}</h1>
  },
  types: {
    code: ({ value }) => (
      <Highlight
        {...defaultProps}
        theme={nightOwl}
        code={value.code}
        language={value.language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={clsx(className, 'p-3 rounded-md')} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={i} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
};

export default function BlogPage() {
  const { blog } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-3xl font-semibold">{blog.title}</h1>

      <div className="mt-4">
        <PortableText value={blog.content} components={components} />
      </div>
    </div>
  );
}
