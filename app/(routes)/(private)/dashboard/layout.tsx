import Header from "@/components/dashboard/Header";
import { NavDock } from "@/components/dashboard/NavDock";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      <Header />
      {children}
      <NavDock />
    </main>
  );
}
