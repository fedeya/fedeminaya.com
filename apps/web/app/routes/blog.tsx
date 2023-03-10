import type { LoaderArgs } from '@remix-run/cloudflare';
import { jsonHash } from 'remix-utils';
import { Link, useLoaderData } from '@remix-run/react';

export const loader = ({ context }: LoaderArgs) => {
  const headers = new Headers({
    'Cache-control': 'max-age=10, s-maxage=10, stale-while-revalidate'
  });

  return jsonHash(
    {
      blogs: context.services.api.getBlogs()
    },
    { headers }
  );
};

export const shouldRevalidate = () => false;

export default function BlogsPage() {
  const { blogs } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-3xl font-semibold">Blogs</h1>

      <p>Find the latest of my writing here.</p>

      <div className="mt-6 flex-col gap-4 flex">
        {blogs.map(blog => (
          <div key={blog._id}>
            <Link to={`/blog/${blog.slug}`} key={blog._id} prefetch="intent">
              <h2 className="font-medium underline">{blog.title}</h2>

              <p className="text-xs">{blog.createdAt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
