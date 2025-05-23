import style from '@/app/home.module.css'
import Image from 'next/image'
export default function Hero() {
    return (
        <>
            <div className="w-full h-fit flex flex-col items-center md:flex-row">

                {/* TEXTO */}
                <div className="h-fit w-full">
                    <div className="">
                        <h1 className="text-3xl underline">
                            <b>Food Web</b>
                        </h1>
                        <p
                            className="text-sm"
                        >
                            Seleccionamos solo los ingredientes más frescos y de la más alta calidad.
                        </p>
                    </div>

                    <div className="pt-[15px]">
                        <button
                            className="bg-transparent mr-2 mb-2 px-2.5 py-1.5 z-50 font-medium text-center justify-center inline-flex items-center flex-row rounded-lg border gap-x-2 opacity-90 cursor-pointer hover:bg-eat-hover hover:text-white border-eat-800 text-eat-800 hover:opacity-100 hover:bg-eat-800 hover:scale-110 hover:shadow-lg dark:focus:ring-black-300 focus:ring-2 focus:outline-none focus:ring-black-30 transition-all duration-200 ease-in-out scale-90"
                        >
                            <a href="/carta" className="flex text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-tools-kitchen-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" /></svg>
                                <div className="flex items-center"><span className="">Menu</span></div>
                            </a>
                        </button>
                        <button
                            className="bg-transparent mr-2 mb-2 px-2.5 py-1.5 z-50 font-medium text-center justify-center inline-flex items-center flex-row rounded-lg border gap-x-2 opacity-90 cursor-pointer hover:bg-eat-hover hover:text-white border-eat-800 text-eat-800 hover:opacity-100 hover:bg-eat-800 hover:scale-110 hover:shadow-lg dark:focus:ring-black-300 focus:ring-2 focus:outline-none focus:ring-black-30 transition-all duration-200 ease-in-out scale-90"
                        >
                            <a href="" className=" flex text-sm" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-garden-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" /><path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" /><path d="M6 8h15l-3.5 7l-7.1 -.747a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" /></svg>
                                <div className="flex items-center"><span className="">Mis Pedidos</span></div>
                            </a>
                        </button>

                    </div>
                </div>

                {/* IMAGEN */}
                <div className=' w-full h-full flex justify-center items-center'>
                    <div className='z-10 max-w-[200px]'>
                        <div className='w-full py-4 h-full flex justify-center items-center'>
                            <img
                                className={style.animacion}
                                src='/3d.avif'
                                alt='Platillo 3d'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
