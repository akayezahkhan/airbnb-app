import Image from "next/image"
export default function MyMain(){
    return(  
<main>
    <div className="relative min-w-[750px] min-h-[375px] max-h-screen bg-cover bg-no-repeat 2xl:h-screen xl:h-[720px] lg:h-[560px] md:h-[400px]" 
    style={{ backgroundImage: `url('/images/main.png')` }}>

        <div className="absolute inset-0 z-0">

            <div className="relative z-10 flex flex-col items-center justify-center h-full">
       
                <p className="m-4 font-bold
                2xl:text-xl
                xl:text-xl">
                    Not sure where to go? Perfect.
                </p>
                <button className="rounded-full hover:drop-shadow-xl text-purple-500 font-bold bg-white drop-shadow-md 
                px-3 md:px-8 md:py-3 py-2 
                text-xs md:text-base">
                    I'm flexible
                </button>
            </div>

        </div>

    </div>

</main>

)
}