import { useFetcher } from '@remix-run/react';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import type { action } from '~/routes/contact';

type Status = 'idle' | 'success' | 'error';

export default function ContactSection() {
  const fetcher = useFetcher<typeof action>();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    if (fetcher.state === 'submitting') {
      setStatus('idle');
    }
  }, [fetcher.state]);

  useEffect(() => {
    if (typeof fetcher.data?.ok !== 'undefined') {
      setStatus(fetcher.data.ok ? 'success' : 'error');

      if (fetcher.data.ok) formRef.current?.reset();
    }
  }, [fetcher.data]);

  return (
    <div className="pt-8 mt-6 pb-10" id="contact">
      <div className="flex gap-1 items-center">
        <span className="text-2xl">~</span>
        <h2 className="text-3xl font-semibold">Get in touch!</h2>
      </div>

      <p className="my-4 text-lg">
        If you have any questions or want to work with me, feel free to contact
      </p>

      <fetcher.Form ref={formRef} action="/contact" method="post">
        <div className="mt-4 flex gap-2 flex-col">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">Name</span>
            <input
              className="p-3 rounded-md border dark:bg-transparent dark:outline-gray-600 dark:border-gray-600 outline-stone-500 border-stone-500"
              type="text"
              name="name"
              placeholder="John Doe"
              required
            />
          </label>
        </div>

        <div className="mt-4 flex gap-2 flex-col">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">Email</span>
            <input
              className="p-3 rounded-md border dark:bg-transparent dark:outline-gray-600 dark:border-gray-600 outline-stone-500 border-stone-500"
              type="email"
              name="email"
              placeholder="johndoe@mail.com"
              required
            />
          </label>
        </div>

        <div className="mt-4 flex gap-2 flex-col">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">Your message</span>
            <textarea
              className="p-3 rounded-md dark:bg-transparent dark:outline-gray-600 dark:border-gray-600 outline-stone-500 border border-stone-500"
              name="message"
              rows={4}
              placeholder="Hi, I'm John Doe and I'm interested in your work.."
              required
            />
          </label>
        </div>

        {status === 'success' && (
          <div className="mt-4 flex gap-2 flex-col">
            <span className="text-sm font-medium dark:text-green-400 text-green-600">
              Message sent successfully!
            </span>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-4 flex gap-2 flex-col">
            <span className="text-sm font-medium dark:text-red-400 text-red-500">
              An error occurred while sending the message, please try again
            </span>
          </div>
        )}

        <button
          name="action"
          value="contact"
          className={clsx(
            'py-3 px-4 hover:opacity-80 dark:bg-slate-700 dark:outline-gray-600 border-none outline-stone-500 font-medium border text-sm bg-stone-800 text-white mt-3 shadow-md rounded-md',
            {
              'animate-pulse':
                fetcher.state === 'loading' || fetcher.state === 'submitting'
            }
          )}
        >
          Send message
        </button>
      </fetcher.Form>
    </div>
  );
}
