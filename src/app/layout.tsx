import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/SideBar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Caarousel from "@/components/Carousel"


export const metadata: Metadata = {
  title: "Restaurant",
  description: "Web para ver el Menu de un Restaurante con Recetas de Comida Gourmet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="">
        <div className="mt-[50px] lg:mt-[60px] ">

          <div className="fixed -z-50 bottom-0 left-0 right-0 top-[90px] m-0 lg:top-[100px] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <SidebarProvider >
            <Header />
            <AppSidebar />
            <main className="w-full h-full ">
              <Caarousel />
              <div className="mt-[40px]">
                {children}

              </div>
              <Footer />
            </main>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}
