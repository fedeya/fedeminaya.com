import { Studio } from 'sanity';
import { ClientOnly } from 'remix-utils';
import config from '~/config/sanity.config';

export default function StudioPage() {
  return (
    <div className="h-screen">
      <ClientOnly>
        {() => <Studio config={config} unstable_globalStyles />}
      </ClientOnly>
    </div>
  );
}
