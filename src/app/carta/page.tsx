import Image from "next/image";
const data = [
    {
        img: '/foie-cock.webp',
        text: 'Foie Gras',
        slug: '',
        description: '2 piezas de foie gras (50 g cada una), 2 peras, 200 ml de vino tinto, 50 g de azúcar, 20 g de mantequilla , Sal y pimienta al gusto.',
        price: '10.000',
    },
    {
        img: '/langosta-cock.jpg',
        text: 'Langosta Termidor',
        slug: '',
        description: '2 colas de langosta, 50 ml de crema espesa, 50 g de queso Gruyère rallado, 1 cucharada de mostaza de Dijon, 1 chalota finamente picada, 20 ml de coñac, Sal y pimienta.',
        price: '10.000',
    },
    {
        img: '/risotto-cock.webp',
        text: 'Risotto de Trufa Negra',
        slug: '',
        description: '250 g de arroz Arborio, 1 litro de caldo de pollo, 1 trufa negra rallada, 50 g de mantequilla, 50 g de queso parmesano rallado, 100 ml de nata líquida y 1 chalota picada.',
        price: '10.000',
    },
    {
        img: '/pato-cock.jpg',
        text: 'Pato a la Naranja',
        slug: '',
        description: '2 pechugas de pato, 200 ml de jugo de naranja, 2 zanahorias, 1 trozo pequeño de jengibre fresco y 20 g de mantequilla.',
        price: '10.000',
    },
    {
        img: '/tartar-cock.webp',
        text: 'Tartar de Atún Rojo',
        slug: '',
        description: '200 g de atún rojo fresco, 1 aguacate maduro, 1 cucharada de salsa de soya, 1 cucharadita de jugo de yuzu (o limón) y Aceite de sésamo al gusto.',
        price: '10.000',
    },
    {
        img: '/carrillera-cock.jpg',
        text: 'Carrillera de Ternera',
        slug: '',
        description: '1 kg de carrilleras de ternera, 500 ml de vino tinto, 1 cebolla grande, 2 Zanahorias, 2 Dientes de Ajo, 1 Hoja de Laurel, 500ml de Caldo de Carne, 2 Cucharadas de Harina, 50g de Mantequilla, 100ml de nata liquida y Sal y Pimienta.',
        price: '10.000',
    },
    {
        img: '/huevo-cock.png',
        text: 'Huevo a Baja Temperatura',
        slug: '',
        description: '4 huevos Frescos, 1 Manojo de esparragos Verdes, 50g de Mantequilla, Aceite de Trufa y Sal y Pimienta al Gusto.',
        price: '10.000',
    },
    {
        img: '/ravioli-cock.png',
        text: 'Ravioli de Langostinos',
        slug: '',
        description: '200g de Masa Fresca para Pasta, 300g de Langostinos Pelados, 1 Chalota Picada, 1 Diente de Ajo Picado, 1 Pizca de Azafran, 100ml de Crema de Leche, 200ml de Leche de Coco, 50ml de Vino Blanco y Sal y Pimienta.',
        price: '10.000',
    },
    {
        img: '/filete-cock.jpg',
        text: 'Filete de Res Wellington',
        slug: '',
        description: '1 Solomillo de Res (500-600g), 300g de Champiñones, 100g de Jamon Serrano o Prosciutto, 1 Lamina de Hojaldre, 2 Yemas de Huevo, 1 Cucharada de Mostaza de Dijon y Sal y Pimienta.',
        price: '10.000',
    },
]

export default function Carta() {
    return (
        <>
            <div className="w-full text-eat-700 pt-4 text-center">
                <h1 className="text-2xl underline"><b>Platillos en Menu:</b></h1>
            </div>
            <ul className="bg-transparent w-full h-full grid grid-cols-1 md:grid-cols-2 place-items-center ">
                {data.map((item, index) => (
                    <div key={index}>
                        <div className="text-black w-full h-full my-6 border-2 border-eat-800 hover:cursor-pointer  shadow-xl bg-eat-100 ">

                            <div className="">

                                <Image width={400} height={200} src={item.img} className="max-h-[300px] min-h-[300px] border-b-2 border-eat-800" alt="Platillo" />

                            </div>

                            <div className="py-4 px-4 flex ">
                                <div className="h-full flex flex-col justify-around basis-1/2">
                                    <h3 className="text-md"><b>{item.text}:</b></h3>
                                    <p className="max-w-[200px] text-sm">{item.description}</p>
                                </div>

                                <div className="flex items-center basis-1/2">
                                    <div className="flex flex-col w-full ">
                                        {/* PRICE */}
                                        <div className="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7d7564" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-receipt-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" /><path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" /></svg>
                                            <span className="text-md text-eat-500"><b>${item.price}</b></span>
                                        </div>
                                        {/* TIME */}
                                        <div className="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7d7564" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clock"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 7v5l3 3" /></svg>
                                            <span className="text-md text-eat-500"><b></b></span>
                                        </div>
                                        {/* PEOPLE */}
                                        <div className="flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7d7564" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-users"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
                                            <span className="text-md text-eat-500"><b></b></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </ul>
        </>
    );
};
