import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from "next/link"



export function AppSidebar() {
    return (
        <Sidebar className="hidden md:block lg:block z-40 text-white border-r-eat-950">
            <SidebarHeader className="h-[50px] lg:h-[60px] " />

            <SidebarContent className="bg-eat-800 ">

                <SidebarGroup>
                    <SidebarGroupLabel className="text-white text-sm ">
                        <b>Dashboard</b>
                    </SidebarGroupLabel>

                    <SidebarMenuSub>
                        
                        <SidebarMenuSubItem >
                            <SidebarMenuSubButton className="text-white hover:bg-eat-400 hover:text-white hover:cursor-pointer flex items-center" href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="hover:stroke-black icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                                <span>
                                    Inicio
                                </span>

                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem >

                        <SidebarMenuSubItem >
                            <SidebarMenuSubButton className="text-white hover:bg-eat-400 hover:text-white hover:cursor-pointer flex items-center" href="/contacto">

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                                <span>
                                    Contacto
                                </span>

                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem >

                        <SidebarMenuSubItem >
                            <SidebarMenuSubButton className="text-white hover:bg-eat-400 hover:text-white hover:cursor-pointer flex items-center" href="/carta">

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-receipt"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" /></svg>
                                <span>
                                    Carta
                                </span>

                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem >

                    </SidebarMenuSub>

                    {/* <SidebarGroupLabel className="text-white text-sm">
                        <b>Menu</b>
                    </SidebarGroupLabel>
                    <SidebarMenuSub className="">

                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton />
                        </SidebarMenuSubItem>

                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton />
                        </SidebarMenuSubItem>

                    </SidebarMenuSub> */}
                </SidebarGroup >



            </SidebarContent>
        </Sidebar>
    )
}
