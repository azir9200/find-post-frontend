import Footer from "@/components/share/Footer";
import { Navbar } from "@/components/share/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />

        <main className="min-h-[100vh] w-full">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
