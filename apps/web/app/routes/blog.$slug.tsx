import type { LoaderArgs, MetaFunction } from '@remix-run/cloudflare';
import { Link, useLoaderData } from '@remix-run/react';
import { jsonHash } from 'remix-utils';

import type { SEOHandle } from '@balavishnuvj/remix-seo';
import { client } from '~/lib/sanity';
import { getBlogsQuery } from '~/lib/queries.server';
import { BlogSchema } from '~/lib/schemas';
import BlogContent from '~/components/BlogContent';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export const loader = async ({ params, context }: LoaderArgs) => {
  const headers = new Headers({
    'Cache-control': 'max-age=10, s-maxage=10, stale-while-revalidate'
  });

  return jsonHash(
    {
      blog: context.services.api.getBlogBySlug(params.slug!)
    },
    { headers }
  );
};

export const handle: SEOHandle = {
  async getSitemapEntries() {
    const blogs = await BlogSchema.pick({ slug: true })
      .array()
      .promise()
      .parse(client.fetch(getBlogsQuery));

    return blogs.map(blog => ({
      route: `/blog/${blog.slug}`,
      priority: 0.7
    }));
  }
};

export const shouldRevalidate = () => false;

export const meta: MetaFunction<typeof loader> = ({ data }) => ({
  title: `${data.blog.title} - Federico Minaya`,
  'og:title': `${data.blog.title} - Federico Minaya`
});

export default function BlogPage() {
  const { blog } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-3xl font-semibold">{blog.title}</h1>

      <div className="mt-4">
        <BlogContent content={blog.content} />
      </div>

      <div className="flex items-center mt-12 pb-8 gap-3">
        <img
          width="140px"
          height="140px"
          className="object-contain"
          src="/images/me.png"
          alt="Federico Minaya"
        />
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-lg">
              Written by
              <span className="font-medium"> Federico Minaya</span>
            </p>

            <p className="font-medium">Web Developer</p>
          </div>

          <div className="text-xl flex-wrap flex gap-4">
            <a
              aria-label="Linkedin"
              href="https://linkedin.com/in/federico-minaya"
              target="_blank"
              className="underline"
              rel="noopener noreferrer"
            >
              <span className="text-base font-medium">Linkedin</span>
            </a>

            <a
              aria-label="Twitter"
              href="https://twitter.com/fedeminaya"
              target="_blank"
              className="underline"
              rel="noopener noreferrer"
            >
              <span className="text-base font-medium">Twitter</span>
            </a>

            <a
              aria-label="Github"
              href="https://github.com/fedeya"
              target="_blank"
              className="underline"
              rel="noopener noreferrer"
            >
              <span className="text-base font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
