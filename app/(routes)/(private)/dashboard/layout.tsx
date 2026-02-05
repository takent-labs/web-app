import { NavDock } from "@/components/dashboard/NavDock";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <NavDock />
    </main>
  );
}
