import Hero from "@/components/Hero"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
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
    img: '/foie-cock.webp',
    text: 'Foie Gras',
    slug: '',
    description: '2 piezas de foie gras (50 g cada una), 2 peras, 200 ml de vino tinto, 50 g de azúcar, 20 g de mantequilla , Sal y pimienta al gusto.'
  },
  {
    img: '/langosta-cock.jpg',
    text: 'Langosta Termidor',
    slug: '',
    description: '2 colas de langosta, 50 ml de crema espesa, 50 g de queso Gruyère rallado, 1 cucharada de mostaza de Dijon, 1 chalota finamente picada, 20 ml de coñac, Sal y pimienta.'
  },
  {
    img: '/risotto-cock.webp',
    text: 'Risotto de Trufa Negra',
    slug: '',
    description: '250 g de arroz Arborio, 1 litro de caldo de pollo, 1 trufa negra rallada, 50 g de mantequilla, 50 g de queso parmesano rallado, 100 ml de nata líquida y 1 chalota picada.'
  },
  {
    img: '/pato-cock.jpg',
    text: 'Pato a la Naranja',
    slug: '',
    description: '2 pechugas de pato, 200 ml de jugo de naranja, 2 zanahorias, 1 trozo pequeño de jengibre fresco y 20 g de mantequilla.'
  },
  {
    img: '/tartar-cock.webp',
    text: 'Tartar de Atún Rojo',
    slug: '',
    description: '200 g de atún rojo fresco, 1 aguacate maduro, 1 cucharada de salsa de soya, 1 cucharadita de jugo de yuzu (o limón) y Aceite de sésamo al gusto.'
  },
  {
    img: '/carrillera-cock.jpg',
    text: 'Carrillera de Ternera',
    slug: '',
    description: ''
  },
  {
    img: '/huevo-cock.png',
    text: 'Huevo a Baja Temperatura',
    slug: '',
    description: ''
  },
  {
    img: '/ravioli-cock.png',
    text: 'Ravioli de Langostinos',
    slug: '',
    description: ''
  },
  {
    img: '/filete-cock.jpg',
    text: 'Filete de Res Wellington',
    slug: '',
    description: ''
  },
]

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full items-center h-full">

        <div className="max-w-[280px] sm:max-w-[350px] md:max-w-[430px] lg:max-w-[670px] lg:min-w-[670px] xl:max-w-[750px] xl:min-w-[750px] ">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >

            <div>
              <CarouselPrevious />

              <CarouselContent>
                {data.map((item, index) => (
                  <CarouselItem key={index} className="basis-full md:basis-auto xl:basis-1/3 py-4">
                    {/* <a href={item.slug} className=""> */}
                    <Card className="bg-eat-100 min-h-[70px]  md:max-w-[300px] shadow-lg ">
                      <CardContent className="h-full w-full flex p-0 ">

                        <div className="w-full min-h-[80px]">
                          <Image
                            src={item.img}
                            alt="Platillo"
                            width={100}
                            height={100}
                            className="w-full h-full max-h-[80px] rounded-l-xl"
                          />
                        </div>

                        <div className="flex flex-col justify-center items-center w-full text-black text-center px-2 ">
                          <span className="text-sm"><b>{item.text}</b></span>
                          <div className="flex w-full justify-center">

                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button className="hover:bg-eat-800 bg-eat-100 hover:border-none border-eat-800  rounded-full border-2 mx-[3px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="p-[5px] hover:stroke-white w-full h-full  icon icon-tabler icons-tabler-outline icon-tabler-caret-down"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                                  </button>
                                </TooltipTrigger>

                                <TooltipContent className="bg-eat-800 mt-[10px]">
                                  <div className="flex flex-col justify-center max-w-[150px] bg-">
                                    <span className="text-sm underline"><b>{item.title}</b></span>
                                    <span className="text-sm">
                                      <b>Ingredientes:</b><br />
                                      {item.description}
                                    </span>
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>

                            <a href={item.slug} className="hover:bg-eat-800 bg-eat-100 hover:border-none border-eat-800 rounded-full border-2 mx-[3px]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="p-[5px] hover:stroke-white w-full h-full icon icon-tabler icons-tabler-outline icon-tabler-zoom-in"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M7 10l6 0" /><path d="M10 7l0 6" /><path d="M21 21l-6 -6" /></svg>
                            </a>
                          </div>
                        </div>

                      </CardContent>
                    </Card>
                    {/* </a> */}
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselNext />
            </div>

          </Carousel>
        </div>

        <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[750px] lg:min-w-[750px] flex flex-col justify-center sm:justify-center items-center">
          <Hero />
        </div>

        <div className="w-full pb-[60px] z-50 max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[750px] lg:min-w-[750px]">
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
