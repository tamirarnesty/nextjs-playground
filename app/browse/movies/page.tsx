import { lusitana } from '@/app/components/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Movies',
};

// NOTE: async is used so that fetching the data can be done in parallel
export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Movies
      </h1>
    </main>
  );
}
