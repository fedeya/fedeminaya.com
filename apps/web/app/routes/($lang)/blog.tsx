import type { LoaderArgs, MetaFunction } from '@remix-run/cloudflare';
import type { ShouldRevalidateFunction } from '@remix-run/react';
import type { SitemapHandle } from 'remix-sitemap';
import { jsonHash } from 'remix-utils';
import { useLoaderData } from '@remix-run/react';
import { getLocale } from '~/lib/locale';
import LocaleLink from '~/components/LocaleLink';

export const loader = async ({ context, request, params }: LoaderArgs) => {
  const headers = new Headers({
    'Cache-control': 'max-age=10, s-maxage=10, stale-while-revalidate'
  });

  const locale = getLocale(request, params.lang);

  return jsonHash(
    {
      blogs: context.services.api.getBlogs(locale)
    },
    { headers }
  );
};

export const handle: SitemapHandle = {
  sitemap: {
    async generateEntries() {
      return [
        {
          loc: '/blog',
          alternateRefs: [
            {
              href: `https://fedeminaya.com/en`,
              hreflang: 'en'
            },
            {
              href: `https://fedeminaya.com/es`,
              hreflang: 'es'
            }
          ]
        }
      ];
    }
  }
};

export const meta: MetaFunction = () => ({
  title: 'Blogs - Federico Minaya',
  'og:title': 'Blogs - Federico Minaya'
});

export const shouldRevalidate: ShouldRevalidateFunction = data => {
  return data.nextParams?.lang !== data.currentParams?.lang;
};

export default function BlogsPage() {
  const { blogs } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-3xl font-semibold">Blogs</h1>

      <p>Find the latest of my writing here.</p>

      <div className="mt-6 flex-col gap-4 flex">
        {blogs.map(blog => (
          <div key={blog._id}>
            <LocaleLink
              to={`/blog/${blog.slug}`}
              key={blog._id}
              prefetch="intent"
            >
              <h2 className="font-medium underline">{blog.title}</h2>

              <p className="text-xs">
                {blog.createdAt} - {blog.readingTime}
              </p>
            </LocaleLink>
          </div>
        ))}
      </div>
    </div>
  );
}
