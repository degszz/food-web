import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/SideBar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Caarousel from "@/components/Carousel"


export const metadata: Metadata = {
  title: "Web de Comida",
  description: "Para ver Los Platillos y Recetas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-eat-100">
        <div className="mt-[50px] lg:mt-[60px] ">
          <SidebarProvider >
            <Header />
            <AppSidebar />

            <main className="w-full h-full">
            <Caarousel />
              {children}
              <Footer />
            </main>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}
