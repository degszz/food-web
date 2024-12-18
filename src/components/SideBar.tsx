import { ChevronDown } from "lucide-react"
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
    SidebarMenuSubItem
} from "@/components/ui/sidebar"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from "next/link"

export function AppSidebar() {
    return (
        <Sidebar className="mt-[50px] lg:mt-[60px] border-eat-300 ">
            <SidebarContent className="bg-eat-800 text-eat-200 ">
                <SidebarGroup >
                    <SidebarGroupLabel className="text-eat-200 text-md "><b>Web de Comida:</b></SidebarGroupLabel>
                    <SidebarGroupContent >
                        <SidebarMenu>
                            <Collapsible defaultOpen className="group/collapsible ">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton >
                                            Menu
                                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                        </SidebarMenuButton >
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <Link href="/">Inicio</Link>
                                            </SidebarMenuSubItem>

                                            <SidebarMenuSubItem>
                                                <Link href="/info">Informacion</Link>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>

                        <SidebarMenu>
                            <Collapsible className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton >
                                            Productos
                                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                        </SidebarMenuButton >
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <Link href="/">Alta Cocina</Link>
                                            </SidebarMenuSubItem>

                                            <SidebarMenuSubItem>
                                                <Link href="/">Cocina Tradicional</Link>
                                            </SidebarMenuSubItem>

                                            <SidebarMenuSubItem>
                                                <Link href="/">Pasteleria</Link>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>

                        <SidebarMenu>
                            <Collapsible className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton >
                                            Ayuda
                                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                        </SidebarMenuButton >
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <Link href="/">Preguntas</Link>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <Link href="/contact">Contacto</Link>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup >

            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
