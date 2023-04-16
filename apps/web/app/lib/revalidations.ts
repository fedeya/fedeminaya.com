import type { ShouldRevalidateFunction } from '@remix-run/react';

export const revalidateOnLanguageChange: ShouldRevalidateFunction = data => {
  return data.nextParams?.lang !== data.currentParams?.lang;
};
