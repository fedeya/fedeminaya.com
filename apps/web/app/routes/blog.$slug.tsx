import type { LoaderArgs, MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { jsonHash } from 'remix-utils';

import type { SEOHandle } from '@balavishnuvj/remix-seo';
import { client } from '~/lib/sanity';
import { getBlogsQuery } from '~/lib/queries.server';
import { BlogSchema } from '~/lib/schemas';
import BlogContent from '~/components/BlogContent';

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
    </div>
  );
}
