export default function Footer() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
            />
            <link
                rel="stylesheet"
                href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
            />
            <footer class="w-full text-serif flex flex-col justify-between h-[300px] md:h-[250px] bg-white text-black dark:text-black  dark:bg-white border-t-2 border-kai-900" id="redes">
                <div className="min-h-[150px] flex justify-center">
                    <div className="text-start lg:text-left max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[750px] lg:min-w-[750px]">
                        <div className="w-full py-6">
                            <h4 className="text-3xl font-sans">
                                <b>Sigamos en Contacto!!!</b>
                            </h4>
                            <h5 className="text-lg mt-0 mb-2 ">
                                Para mas informacion podes encontrarnos en nuestras redes sociales sociales!!!
                            </h5>
                            <div className="my-4 lg:mb-0 ">
                                <button
                                    className="hover:scale-110 transition-all duration-200 ease-in-out scale-90 hover:bg-kai-hover dark:bg-gray-300 bg-kai-200 text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <a href="https://github.com/degszz" target="_blank">
                                        <i class="fab fa-github"></i>
                                    </a>
                                </button>
                                <button
                                    className="hover:scale-110 transition-all duration-200 ease-in-out scale-90 hover:bg-kai-hover dark:bg-gray-300 bg-kai-200 text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <a
                                        href="https://www.linkedin.com/in/maximo-figuera-531231323/" target="_blank"
                                    >
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </button>
                                <button
                                    className="hover:scale-110 transition-all duration-200 ease-in-out scale-90 hover:bg-kai-hover dark:bg-gray-300 bg-kai-200 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <a href="https://www.instagram.com/z3maxi/" target="_blank">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[50px] w-full border-t-2 border-kai-950 flex justify-center items-center">
                    <p>Copyright Carter Company©™</p>
                </div>
            </footer>
        </>
    )
}