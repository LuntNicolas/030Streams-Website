import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="flex items-center justify-center section-padding md:h-screen h-[80vh]">
            <div className=" max-w-6xl w-full grid md:grid-cols-2 grid-cols-1 gap-12 px-6">
                {/* LEFT */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-6xl mb-4">
                        Say Hello
                    </h2>
                    <p className="uppercase tracking-widest text-sm text-white-50">
                        We look forward to hearing from you.
                    </p>
                </div>
                {/* RIGHT */}
                <div className="flex flex-col justify-center">
                    <a href="mailto:lunt.lennart@gmail.com"
                       className="group inline-flex items-center text-2xl font-semibold text-white-50 hover:text-white
                  transition-all duration-300 transform hover:translate-x-10 -ml-16">
                        <img
                            src="/images/MailArrow.svg"
                            alt="arrow"
                            className="xl:size-10 md:size-8 size-7 mx-3 invert
                       opacity-0 transition-all duration-300
                       group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-white"
                        />
                        <span className="transition-colors duration-300">
                            lunt.lennart@gmail.com
                        </span>

                    </a>

                    <div className="mt-4 text-sm leading-relaxed text-white-50">
                        <p className="uppercase font-thin text-xs mb-1">Berlin</p>
                        <p>SAE Institute</p>
                        <p>Cuvrystraße 4</p>
                        <p>10997 Berlin</p>
                        <p>Germany</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
