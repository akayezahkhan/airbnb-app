import Image from "next/image"
export default function MyPoster(){
    return(  
<div className="min-w-[750px] relative justify-center items-center my-12 max-w-7xl mx-auto sm:px-16 2xl:px-0" >

    <div className="min-h-[280px] rounded-3xl bg-no-repeat bg-cover justify-stretch mx-[44px]
    2xl:mx-[60px] 2xl:h-[520px] 
    xl:h-[400px]
    lg:h-[360px] "
    style={{ backgroundImage: `url('/images/footer.png')` }}>

        <div className="relative align-middle items-center mx-12
        w-[240px] h-[150px]
        2xl:w-[250px] 2xl:h-[660px]
        xl:w-[250px] xl:h-[400px]
        lg:w-[300px] lg:h-[360px]
        md:w-56 md:h-[250px]">
            <div className="text-black font-normal
            text-[30px] h-[150px] leading-tight pt-16
            2xl:text-[40px] 2xl:h-[280px] 2xl:leading-none 2xl:pt-44
            xl:text-[36px] xl:h-[180px] xl:leading-none xl:pt-24
            lg:text-[36px] lg:h-[150px] lg:leading-tight lg:pt-20
            md:text-3xl  md:pt-16">
            The Greatest Outdoor
            </div>
            <div  className="text-black text-base
            2xl:text-xl 2xl:-mt-1
            xl:text-xl xl:-mt-1
            lg:text-lg lg:mt-6
            md:-mt-1 
            "
            >
            <p1>Wishlists created by Ayezah</p1>
            </div>
            <div className="mt-3">
                <button className="rounded-lg px-5 py-2 text-sm text-white font-normal bg-black">
                Get Inspiration
                </button>
            </div>


        </div>


    </div>

</div>

)
}
