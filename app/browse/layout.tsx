import NavBar from '@/app/components/browse/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:overflow-hidden">
      <div className="w-full">
        <NavBar />
      </div>
      <div className="flex-grow p-2 md:overflow-y-auto md:p-4">
        {children}
      </div>
    </div>
  );
}
