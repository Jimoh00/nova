function Footer() {
    return (
        <section className="bg-black p-4 py-24 lg:px-[10%]">
            <div className="flex items-center gap-2 mb-12">
                <img src="/logo.svg" alt="" />
                <h1 className="text-5xl font-bold text-white">Nova</h1>
            </div>

            <div className="grid grid-cols-1 gap-16 border-b border-gray-400 pb-24 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <div>
                        <p className="text-sm uppercase text-gray-300 mb-6 font-semibold">menu</p>
                    </div>

                    <div className="flex flex-col gap-12">
                        <a href="/#home" className="text-5xl uppercase text-white pt-6 border-t border-gray-400 transition-colors duration-200 hover:text-[#3157ff] md:text-6xl">home</a>
                        <a href="/#services" className="text-5xl uppercase text-white transition-colors duration-200 hover:text-[#3157ff] md:text-6xl">services</a>
                        <a href="/#projects" className="text-5xl uppercase text-white transition-colors duration-200 hover:text-[#3157ff] md:text-6xl">projects</a>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col gap-12 mt-12">
                        <a href="#" className="text-5xl uppercase text-white pt-6 border-t border-gray-400 transition-colors duration-200 hover:text-[#3157ff] md:text-6xl">careers</a>
                        <a href="/#contact" className="text-5xl uppercase text-white transition-colors duration-200 hover:text-[#3157ff] md:text-6xl">contact</a>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col gap-8 mt-12">
                        <a href="mailto:nova@gmail.com" className="border-t border-gray-400 text-white/70 pt-6 transition-colors duration-200 hover:text-white">
                            nova@gmail.com
                        </a>

                        <a href="tel:09087645231" className="text-white/70 transition-colors duration-200 hover:text-white">09087645231</a>

                        <div className="flex items-center gap-4 uppercase text-white">
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-[#3157ff]">twitter</a>
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-[#3157ff]">github</a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-[#3157ff]">linked in</a>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-white mt-5">
                14 Crescent Avenue, Victoria Island, Lagos, Nigeria
            </p>
        </section>
    )
}

export default Footer;