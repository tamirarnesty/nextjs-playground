import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="items-center justify-center font-mono text-sm flex">
        <Link
          href="/browse"
          className="flex items-center bg-blue-500 px-6 py-3 rounded-lg text-white transition-colors hover:bg-blue-400 gap-2 font-medium text-sm"
        >
          {/* gap-2 is the gap between elements within */}
          <span>Head to Browse</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div>
    </main>
  );
}
