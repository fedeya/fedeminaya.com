import type { FC } from 'react';
import { Link } from '@remix-run/react';
import { PortableText, type PortableTextComponents } from '@portabletext/react';

import Highlight, { Prism } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import clsx from 'clsx';

import type { Blog } from '~/lib/schemas';

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-semibold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>
    ),
    normal: ({ children, value }) => {
      if (value.children.every(c => c.text === '')) return null;

      return <p className="my-4">{children}</p>;
    }
  },
  marks: {
    code: ({ children }) => (
      <span className="bg-gray-900 dark:bg-gray-700 dark:text-gray-300 font-mono rounded-md inline-block text-gray-100 px-1 text-sm">
        {children}
      </span>
    ),
    em: ({ children }) => (
      <span className="border-l-4 block px-2 border-gray-700">
        <em>{children}</em>
      </span>
    ),
    link: ({ children, value }) => {
      const isExternal = !value.href.startsWith('/');

      const rel = isExternal ? 'noreferrer noopener' : undefined;

      return (
        <Link
          to={value.href}
          rel={rel}
          target={isExternal ? '_blank' : undefined}
          className="text-blue-600 hover:underline dark:text-blue-500"
        >
          {children}
        </Link>
      );
    }
  },
  types: {
    code: ({ value }) => (
      <Highlight
        Prism={Prism}
        theme={nightOwl}
        code={value.code}
        language={value.language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={clsx(
              className,
              'p-3 dark:border dark:border-gray-600 rounded-md overflow-auto'
            )}
            style={style}
          >
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

type BlogContentProps = {
  content: Blog['content'];
};

const BlogContent: FC<BlogContentProps> = ({ content }) => {
  return <PortableText value={content} components={components} />;
};

export default BlogContent;
