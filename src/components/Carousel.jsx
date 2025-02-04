export default function Carousel() {

  return (
    <>
      <swiper-container className="mySwiper md:w-calka z-40 h-[40px] bg-white fixed "
        scrollbar-hide="true" space-between="0"
        centered-slides="true" autoplay-delay="2500"
        autoplay-disable-on-interaction="false">
        <swiper-slide><div className="text-center z-50  w-full text-black flex justify-center items-center h-full">
          <span>Envios a Todo Argentina Atravez de <a href="https://www.correoargentino.com.ar/" className="text-eat-700 underline hover:cursor-pointer"><b>Correo Argentino</b></a></span>
        </div>
        </swiper-slide>
        <swiper-slide><div className="text-center z-50  w-full text-black flex justify-center items-center h-full">
          <span>Para ver informacion de los <a href="/size" className="text-eat-700 underline hover:cursor-pointer"><b>Talles</b></a></span>
        </div>
        </swiper-slide>
        <swiper-slide><div className="text-center z-50  w-full text-black flex justify-center items-center h-full">
          <span>Podes Contactarnos/Buscarnos en nuestras <a href="#redes" className="text-eat-700 underline hover:cursor-pointer"><b>Redes Sociales</b></a></span>
        </div>
        </swiper-slide>
      </swiper-container>
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
    </>
  )
}
