import NavLinks from "@/app/components/browse/nav-links";

// NOTE: In order for justify-center to work, the container must be flex
// items-center is the vertical centering of the items
// justify-center is the horizontal centering of the items
export default function NavBar() {
  return (
    <nav className="grid w-full min-h-[60px] items-center border-gray-100/50 border-gray-100 dark:border-gray-850 border-b-2">
      <div className="container mx-auto flex justify-center items-center space-x-2"> 
        <NavLinks />
      </div>
    </nav>
  )
}