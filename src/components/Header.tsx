import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
const SHEET_SIDES = ["bottom"]
import Link from "next/link"
export default function Header() {
    return (
        <>
            <header
                className="bg-eat-300 z-50  fixed top-0 text-white border-b  h-[50px] lg:h-[60px] w-full"
            >
                <div className="w-full flex items-center justify-between h-full">

                    <div
                        className="flex items-center basis-1/3 justify-center  text-center h-full"
                    >
                        {SHEET_SIDES.map((side) => (
                            <Sheet key={side}>
                                <SheetTrigger asChild>
                                    <button className="flex md:hidden lg:hidden" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                                    </button>
                                </SheetTrigger>
                                <SheetContent className=" bg-black text-white  w-full h-[70vh]" side={side}>
                                    <SheetHeader >
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
                                    </SheetHeader>
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

                    <div className="w-full  basis-3/3 lg:w-full ">
                    </div>

                    <div
                        className="flex basis-1/3  items-center justify-around  text-center h-full"
                    >
                    </div>
                </div>
            </header>
        </>
    )
}