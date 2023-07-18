import Image from "next/image"
import SearchBar from "./SEARCHBAR"


export default function MyNavbar(){
    
    return(  
        <div className="h-16 sticky top-0 z-20 min-w-[750px] max-w-full
        items-center align-top grid grid-cols-3
        bg-white drop-shadow-lg">
            <div className="flex-grow-0 justify-stretch mx-1 h-8 bg-contain bg-no-repeat"
            style={{ backgroundImage: `url('/images/logo.png')`}}
            >
        </div>

        <SearchBar/>

        <div className="flex justify-end items-center mx-1 p-1">
            <div className="h-8 flex items-center rounded-full hover:bg-gray-200 hover:cursor-pointer py-3 px-1 mx-2 text-xs">
                Become a Host
            </div>

            <div className="flex justify-center h-8 w-8 mr-2 rounded-full hover:bg-gray-200 hover:cursor-pointer border-gray-200">
                <div className=" rounded-full bg-contain bg-no-repeat h-5 w-5 my-[6px]"
                style={{ backgroundImage: `url('/images/globe.png')`}}>
                </div>
            </div>
        
            <div className="h-8 w-16 flex justify-evenly items-center rounded-full bg-white hover:drop-shadow-lg hover:cursor-pointer border-2 border-gray-200">
                <div className="flex align-middle rounded-full p-1 bg-contain bg-no-repeat h-4 w-4"
                style={{ backgroundImage: `url('/images/lines.png')`}}>
                </div>
                <div className="flex align-middle rounded-full p-1 bg-contain bg-no-repeat h-4 w-4"
                style={{ backgroundImage: `url('/images/person.png')`}}>
                </div>
            </div>
        </div>
    </div>  

)
}