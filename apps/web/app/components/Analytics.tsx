import { useEffect, useRef } from 'react';
import { useLocation } from '@remix-run/react';
import * as Fathom from 'fathom-client';

export default function Analytics() {
  const location = useLocation();
  const isLoaded = useRef(false);

  useEffect(() => {
    if (!isLoaded.current) {
      Fathom.load('GHYYUMRV', {
        url: 'https://one-day-life.fedeminaya.com/script.js',
        includedDomains: ['fedeminaya.com']
      });

      isLoaded.current = true;
    }

    Fathom.trackPageview();
  }, [location]);

  return null;
}
