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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const data = [
  {
    img: '/foie-cock.jfif',
    img2: '/',
    text: 'Foie Gras',
    title: '',
    slug: '',
    description: ''
  },
  {
    img: '/langosta-cock.jpg',
    img2: '/',
    text: 'Langosta Termidor',
    title: '',
    slug: '',
    description: ''
  },
  {
    img: '/risotto-cock.webp',
    img2: '/',
    text: 'Risotto de Trufa Negra',
    title: '',
    slug: '',
    description: ''
  },
  {
    img: '/pato-cock.jpg',
    img2: '/',
    text: 'Pato a la Naranja',
    title: '',
    slug: '',
    description: ''
  },
  {
    img: '/tartar-cock.jfif',
    img2: '/',
    text: 'Tartar de Atún Rojo',
    title: '',
    slug: '',
    description: ''
  },
  {
    img: '/carrillera-cock.jpg',
    img2: '/',
    text: 'Carrillera de Ternera',
    title: '',
    slug: '',
    description: ''
  },
  {
    img: '/huevo-cock.png',
    img2: '/',
    text: 'Huevo a Baja Temperatura',
    title: '',
    slug: '',
    description: ''
  },
  {
    img: '/ravioli-cock.png',
    img2: '/',
    text: 'Ravioli de Langostinos',
    title: '',
    slug: '',
    description: ''
  },
  {
    img: '/filete-cock.jpg',
    img2: '/',
    text: 'Filete de Res Wellington',
    title: '',
    slug: '',
    description: ''
  },
]

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full  items-center h-full">
        <div className="max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[750px] lg:min-w-[750px]">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full pt-[10px]"
          >
            <CarouselContent>
              {data.map((item, index) => (
                <CarouselItem key={index} className="basis-full md:basis-auto xl:basis-1/3">
                  <a href={item.slug} className="">
                    <Card className="bg-eat-50  shadow-none min-h-[70px] md:max-w-[300px] border-2 border-eat-900">
                      <CardContent className="h-full w-full flex p-0 ">

                        <div className="w-full min-h-[80px]">
                          <img
                            src={item.img}
                            alt=""
                            className="w-full h-full max-h-[80px] rounded-l-xl" />
                        </div>

                        <div className="flex flex-col justify-center items-between w-full text-black text-center px-2">
                          <span className="text-sm"><b>{item.text}</b></span>
                          <div className="flex w-full justify-center">

                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button className="hover:bg-eat-800 bg-eat-100 hover:border-none border-eat-800  rounded-full border-2 mx-[3px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="p-[5px] hover:stroke-white w-full h-full  icon icon-tabler icons-tabler-outline icon-tabler-caret-down"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 10l6 6l6 -6h-12" /></svg>
                                  </button>
                                </TooltipTrigger>

                                <TooltipContent className="mt-[15px]">
                                  <div className="flex flex-col justify-center max-w-[150px]">
                                    <span className="text-sm underline"><b>{item.title}</b></span>
                                    <span className="text-sm">
                                      {item.description}
                                    </span>
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>

                            <div className="hover:bg-eat-800 bg-eat-100 hover:border-none border-eat-800 rounded-full border-2 mx-[3px]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="p-[5px] hover:stroke-white w-full h-full icon icon-tabler icons-tabler-outline icon-tabler-zoom-in"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M7 10l6 0" /><path d="M10 7l0 6" /><path d="M21 21l-6 -6" /></svg>
                            </div>
                          </div>
                        </div>

                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[750px] lg:min-w-[750px] py-4 flex flex-col justify-center sm:justify-center items-center">
          <Hero />
        </div>
        <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[750px] lg:min-w-[750px]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Puedo obtener las recetas de los platillos que sirven en el restaurante?</AccordionTrigger>
              <AccordionContent>
                Sí, en nuestro sitio web encontrarás una selección de nuestras recetas más populares. Queremos compartir con nuestros clientes la experiencia culinaria que ofrecemos en el restaurante, por lo que podrás acceder a los detalles de cómo preparar algunos de nuestros platillos favoritos en casa. ¡No dudes en probarlos!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Las recetas están disponibles para todos los platillos del menú?</AccordionTrigger>
              <AccordionContent>
                No todas las recetas de nuestro menú están disponibles, pero actualizamos regularmente la selección que compartimos en línea. Seleccionamos algunas de nuestras recetas más pedidas y las que creemos que son fáciles de recrear en casa. Si tienes alguna receta en particular que te gustaría conocer, ¡contáctanos y te diremos si podemos compartirla!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿Las recetas incluyen información sobre opciones para personas con dietas especiales?</AccordionTrigger>
              <AccordionContent>
                Sí, en nuestras recetas procuramos incluir opciones para personas con diversas necesidades dietéticas. Puedes encontrar detalles sobre alternativas sin gluten, vegetarianas, veganas o bajas en calorías en la mayoría de nuestras recetas. Si tienes alguna restricción alimentaria específica, te recomendamos que revises los ingredientes o nos contactes para obtener más información sobre las opciones disponibles.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div >
    </>
  );
}
