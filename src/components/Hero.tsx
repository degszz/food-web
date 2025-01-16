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
                            <b>Tienda de Comida:</b>
                        </h1>
                        <p
                            className="text-sm"
                        >
                            Seleccionamos solo los ingredientes más frescos y de la más alta calidad. Nuestro menú está inspirado en lo mejor de la cocina internacional, con un toque distintivo que transforma cada comida en un momento memorable.
                        </p>
                    </div>

                    <div className="mt-[5px]">
                        <button
                            className="bg-transparent mr-2 mb-2 px-2.5 py-1.5 z-50 font-medium text-center justify-center inline-flex items-center flex-row rounded-lg border gap-x-2 opacity-90 cursor-pointer hover:bg-eat-hover hover:text-white border-eat-800 text-eat-800 hover:opacity-100 hover:bg-eat-800 hover:scale-110 hover:shadow-lg dark:focus:ring-black-300 focus:ring-2 focus:outline-none focus:ring-black-30 transition-all duration-200 ease-in-out scale-90"
                        >
                            <a href="https://www.linkedin.com/in/maximo-figuera-531231323/" target="_blank" className=" flex text-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                                ><path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"></path><path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                                    ></path><path d="M8 11l0 5"></path><path
                                        d="M8 8l0 .01"></path><path d="M12 16l0 -5"
                                        ></path><path d="M16 16v-3a2 2 0 0 0 -4 0"
                                        ></path></svg>
                                <div className="flex items-center"><span className="">Linkedin</span></div>
                            </a>
                        </button>
                        <button
                            className="bg-transparent mr-2 mb-2 px-2.5 py-1.5 z-50 font-medium text-center justify-center inline-flex items-center flex-row rounded-lg border gap-x-2 opacity-90 cursor-pointer hover:bg-eat-hover hover:text-white border-eat-800 text-eat-800 hover:opacity-100 hover:bg-eat-800 hover:scale-110 hover:shadow-lg dark:focus:ring-black-300 focus:ring-2 focus:outline-none focus:ring-black-30 transition-all duration-200 ease-in-out scale-90"
                        >
                            <a href="https://github.com/degszz" className=" flex text-sm" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                                <div className="flex items-center"><span className="">Github</span></div>
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
                                src='/3d.webp'
                                alt='Platillo 3d'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
