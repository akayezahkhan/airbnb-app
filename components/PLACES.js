import Image from "next/image"
export default function MyPlaces(){
    return(
        <main>
            <div className="min-w-[750px] max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-grey-100 hover:scale-105 transition-transform duration-200 ease-out">
                            <div className="relative h-16 w-16 bg-cover bg-no-repeat rounded-xl"
                            style={{ backgroundImage: `url('/images/london.png')`}}>
                            </div>
                            <div><h2>London</h2><h3 className="text-grey-500">45-minute drive</h3>
                            </div>
                        </div>
                        <div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-grey-100 hover:scale-105 transition-transform duration-200 ease-out">
                        <div className="relative h-16 w-16 bg-cover bg-no-repeat rounded-xl"
                            style={{ backgroundImage: `url('/images/manchester.png')`}}>
                            </div>
                            <div><h2>Manchester</h2><h3 className="text-grey-500">4.5-hour drive</h3></div>
                        </div>
                        <div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-grey-100 hover:scale-105 transition-transform duration-200 ease-out">
                        <div className="relative h-16 w-16 bg-contain bg-no-repeat rounded-xl"
                            style={{ backgroundImage: `url('/images/liverpool.png')`}}>
                            </div>
                            <div><h2>Liverpool</h2><h3 className="text-grey-500">4.5-hour drive</h3></div>
                        </div>
                        <div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-grey-100 hover:scale-105 transition-transform duration-200 ease-out">
                        <div className="relative h-16 w-16 bg-contain bg-no-repeat rounded-xl"
                            style={{ backgroundImage: `url('/images/york.png')`}}>
                            </div>
                            <div><h2>York</h2><h3 className="text-grey-500">4-hour drive</h3></div>
                        </div>
                        <div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-grey-100 hover:scale-105 transition-transform duration-200 ease-out">
                        <div className="relative h-16 w-16 bg-contain bg-no-repeat rounded-xl "
                            style={{ backgroundImage: `url('/images/cardiff.png')`}}>
                            </div>
                            <div><h2>Cardiff</h2><h3 className="text-grey-500">45-minute drive</h3></div>
                        </div>
                        <div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-grey-100 hover:scale-105 transition-transform duration-200 ease-out">
                        <div className="relative h-16 w-16 bg-contain bg-no-repeat rounded-xl"
                            style={{ backgroundImage: `url('/images/birkenhead.png')`}}>
                            </div>
                            <div><h2>Birkenhead</h2><h3 className="text-grey-500">4.5-hour drive</h3></div>
                        </div>
                        <div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-grey-100 hover:scale-105 transition-transform duration-200 ease-out">
                        <div className="relative h-16 w-16 bg-contain bg-no-repeat rounded-xl"
                            style={{ backgroundImage: `url('/images/newquay.png')`}}>
                            </div>
                            <div><h2>Newquay</h2><h3 className="text-grey-500">6-hour drive</h3></div>
                        </div>
                        <div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-grey-100 hover:scale-105 transition-transform duration-200 ease-out">
                        <div className="relative h-16 w-16 bg-contain bg-no-repeat rounded-xl"
                            style={{ backgroundImage: `url('/images/hove.png')`}}>
                            </div>
                            <div><h2>Hove</h2><h3 className="text-grey-500">2-hour drive</h3></div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex items-center py-8">
                        <div className="flex flex-grow text-4xl font-semibold">
                            <h2>Live Anywhere</h2>
                        </div>
                    </div>
                    <div className="flex space-x-3 overflow-scroll p-3 -ml-3 scroll-smooth">
                        <div className="cursor-pointer hover:scale-105 transform transition duration-300">
                            <div className="relative h-80 w-80 bg-contain bg-no-repeat"
                                style={{ backgroundImage: `url('/images/pic1.png')`}}>
                            </div>
                            <h3 className="text-2xl mt-3">Outdoor Gateways</h3>
                        </div>
                        <div className="cursor-pointer hover:scale-105 transform transition duration-300">
                            <div className="relative h-80 w-80 bg-contain bg-no-repeat"
                                style={{ backgroundImage: `url('/images/pic2.png')`}}>
                            </div>
                            <h3 className="text-2xl mt-3">Unique stays</h3>
                        </div>
                        <div className="cursor-pointer hover:scale-105 transform transition duration-300">
                            <div className="relative h-80 w-80 bg-contain bg-no-repeat"
                                style={{ backgroundImage: `url('/images/pic3.png')`}}>
                            </div>
                            <h3 className="text-2xl mt-3">Entire homes</h3>
                        </div>
                        <div className="cursor-pointer hover:scale-105 transform transition duration-300">
                            <div className="relative h-80 w-80 bg-contain bg-no-repeat"
                                style={{ backgroundImage: `url('/images/pic4.png')`}}>
                            </div>
                            <h3 className="text-2xl mt-3">Pet allowed</h3>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}