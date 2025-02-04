import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
const SHEET_SIDES = ["bottom"] as const

import Link from "next/link"

const Dashboard = [
    {
        name: "Inicio",
        href: "/",
    },
    {
        name: "Contacto",
        href: "/about",
    },
    {
        name: "",
        href: "/contact",
    },
]

export default function Header() {
    return (
        <>
            <header
                className="bg-eat-800 z-50  fixed top-0 text-white border-none  h-[50px] lg:h-[60px] w-full"
            >
                <div className="w-full flex items-center justify-between h-full">
                    <div className="flex items-center pl-6 md:pl-4 justify-center  text-center h-full">
                        <span className="hidden md:block text-xl w-fit "><b>Restaurant</b></span>
                        {SHEET_SIDES.map((side) => (
                            <Sheet key={side} >
                                <SheetTrigger asChild>
                                    <button className="flex md:hidden lg:hidden" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                                    </button>
                                </SheetTrigger>
                                <SheetContent side={side} className="md:hidden bg-eat-800 text-white  w-full h-[70vh]">
                                    <SheetTitle className="text-white">MENU</SheetTitle>
                                    <SheetDescription className="text-white">
                                        <ul className="w-fit">
                                            <li>
                                                <Link
                                                    href="/"
                                                    className="hover:underline text-start btn block py-2 pl-3 text-white rounded md:bg-transparen md:py-1 hover:text-orange-500"
                                                    aria-current="page"
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                        </ul>
                                    </SheetDescription>
                                    <div className="grid gap-4 py-4">

                                    </div>
                                    <SheetFooter className="text-white">
                                        <SheetClose asChild>

                                        </SheetClose>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        ))}
                    </div>

                    <div className="w-full">
                        <div className="flex items-center justify-center h-full">
                        </div>
                    </div>

                    <div
                        className="flex basis-1/3  items-center justify-around  text-center h-full">

                    </div>
                </div>
            </header>
        </>
    )
}