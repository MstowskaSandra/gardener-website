const ServiceInfoSection = ({ title, text, subtitle, listElements, image, reverse = false }) => {
    console.log('reverse:', reverse);
    return (
        <section className={`
            ${reverse ? 'bg-[#EBE4D6]' : 'bg-[#FAFFF4]'} 
            flex flex-col
            ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} 
            
            items-center 
            justify-center 
            gap-16
            lg:gap-10 
            px-12
            md:px-20
            lg:px-28 
            py-24 
          
        `}>
            <div className="flex-1">
                <img src={image} alt={title} loading="lazy" className="justify-self-center w-80 md:w-96 lg:w-120 h-80 md:h-96 lg:h-120 object-cover rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"/>
            </div>

            <div className={`
                flex-1 
                ${reverse ? 'lg:pr-2' : 'lg:pl-2'} 
                pl-6
                lg:text-left
            `}>
                <h1 className="font-mont text-3xl lg:text-4xl font-extrabold text-green-900 uppercase tracking-wider">{title}</h1>
                <p className="mt-4 font-semibold text-xl text-gray-700 pb-12 max-w-xl">{text}</p>
                <div className="flex flex-col items-start gap-3 pb-6">
                    <h4 className="font-mont text-lg font-bold tracking-wider">{subtitle}</h4>
                    <ul>
                        {listElements.map((e, index) =>  
                            <li key={index} className="text-md font-mont py-1"><span className="mx-2 font-bold text-green-900">✓</span>  {e}</li>
                        )}
                    </ul>
                </div>
                <div className={`flex pt-6 ${reverse ? 'justify-start' : 'justify-end'}`}>
                    <button className="bg-orange-500 text-white px-3 py-2 sm:px-5 sm:py-3 rounded-full font-semibold hover:bg-orange-600 transition cursor-pointer">
                        Zadzwoń teraz
                    </button>
                </div>
            </div>
        </section>
    )
};

export default ServiceInfoSection;