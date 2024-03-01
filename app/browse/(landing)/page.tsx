import { lusitana } from '@/app/components/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Browse',
};

// NOTE: async is used so that fetching the data can be done in parallel
export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Browse
      </h1>
    </main>
  );
}
