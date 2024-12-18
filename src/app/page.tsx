import Image from "next/image";
import Hero from "@/components/Hero"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const array = [
  {
    img: '',
    text: '',
    slug: '',
  },
  {
    img: '',
    text: '',
    slug: '',
  },
  {
    img: '',
    text: '',
    slug: '',
  },
  {
    img: '',
    text: '',
    slug: '',
  },

]
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full  items-center h-full">
        <div className="">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full p-[10px]"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/2 lg:basis-1/4 md:max-w-[297px] ">
                  <div className="">
                    <Card className="min-h-[70px] ">
                      <CardContent className="h-full w-full flex p-0 ">

                        <div className="w-full  min-h-[70px]">
                          <img
                            src="/salmon-judias.avif"
                            alt=""
                            className="w-full h-full rounded-l-xl" />
                        </div>

                        <div className="flex flex-col justify-center w-full text-black text-center px-2 py-1">
                          <span className="text-sm"><b>Salmon con Judias</b></span>
                          <div className="flex w-full justify-center">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button className="hover:bg-eat-400 hover:border-none  rounded-full border mx-[3px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="p-[5px] hover:stroke-white w-full h-full  icon icon-tabler icons-tabler-outline icon-tabler-caret-down"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 10l6 6l6 -6h-12" /></svg>
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent className="fixed top-10 min-w-[100px]">
                                  <div>
                                    <span>hola como va mi nombre es</span>
                                    <Separator />
                                    <span>hola como va mi nombre es</span>
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <button className="hover:bg-eat-400 hover:border-none  rounded-full border mx-[3px]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="p-[5px] hover:stroke-white w-full h-full icon icon-tabler icons-tabler-outline icon-tabler-zoom-in"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M7 10l6 0" /><path d="M10 7l0 6" /><path d="M21 21l-6 -6" /></svg>
                            </button>

                          </div>
                        </div>

                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[750px] lg:min-w-[750px] py-4 flex flex-col justify-center sm:justify-center items-center">
          <Hero />
        </div>
        <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[750px] lg:min-w-[750px]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Qué tipo de cocina ofrecen?</AccordionTrigger>
              <AccordionContent>
                Ofrecemos una cocina contemporánea de alta gama, con platos inspirados en la gastronomía internacional. Cada menú está diseñado para sorprender, utilizando ingredientes frescos y de la más alta calidad.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div >
    </>
  );
}
