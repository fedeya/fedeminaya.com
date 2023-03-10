import type { FC } from 'react';
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
      <span className="bg-gray-900 font-mono rounded-md inline-block text-gray-100 px-1 text-sm">
        {children}
      </span>
    )
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
            className={clsx(className, 'p-3 rounded-md overflow-auto')}
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
