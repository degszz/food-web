import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/SideBar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


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
        <Header />
        <div className="mt-[50px] lg:mt-[60px]">
          <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger className="hidden md:block lg:block fixed  lg:top-4 md:top-3 left-5 z-50 hover:bg-transparent text-eat-900 hover:text-white " />

            <main className="w-full h-full">
              {children}
              <Footer />
            </main>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}
