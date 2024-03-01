// Explicitly setting this to be a Client Component allows for the use of client-side libraries and APIs.
// This is rendered on the client side. More details here: https://nextjs.org/docs/app/building-your-application/rendering/client-components
"use client";

import { TvIcon, HomeIcon, TicketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/browse", icon: HomeIcon },
  {
    name: "Movies",
    href: "/browse/movies",
    icon: TicketIcon,
  },
  { name: "TV Shows", href: "/browse/shows", icon: TvIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-sm hover:bg-zinc-50 p-3 text-sm font-normal md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "font-semibold": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
