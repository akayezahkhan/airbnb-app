export default function MyFooter(){

return(

  <div className=" min-w-[750px] drop-shadow-lg bg-slate-100">
        <div className="sticky 
        grid grid-cols-1 md:grid-cols-2 px-56 md:px-28 lg:px-3 lg:grid-cols-4 xl:px-32 2xl:px-60">
            <div className="flex flex-col leading-loose
            px-16 py-6 text-base">
                <h3 className ="font-semibold">Support</h3>
                <ul className = "flex-col font-light text-xs leading-loose">
                    <li>Help Center</li>
                    <li>Safety information</li>
                    <li>Cancellation options</li>
                    <li>Our COVID-19 Response</li>
                    <li>Supporting people with disabilities</li>
                </ul>
        
            </div>
            <div className="flex flex-col px-16 py-6 leading-loose text-base">
                <h3 className ="font-semibold">Hosting</h3>
                <ul className = "flex-col font-light text-xs leading-loose">
                    <li>Try hosting</li>
                    <li>AirCover: protection for Hosts</li>
                    <li>Explore hosting resources</li>
                    <li>Visit our community forum</li>
                    <li>How to host responsibly</li>
                </ul>
            </div>
            <div className="flex flex-col px-16 py-6 leading-loose text-base">
                <h3 className ="font-semibold">Community</h3>
                <ul className = "flex-col font-light text-xs leading-loose">
                    <li>Airbnb.org: disaster relief housing</li>
                    <li>Support Afghan refugees</li>
                    <li>Celebrating diversity & belonging</li>
                    <li>Combating discrimination</li>
                </ul>
            </div>
            <div className="flex flex-col px-16 py-6 leading-loose text-base">
                <h3 className ="font-semibold">ABOUT</h3>
                <ul className = "flex-col font-light text-xs leading-loose">
                    <li>How Airbnb works</li>
                    <li>Newsroom</li>
                    <li>Investors</li>
                    <li>Airbnb Plus</li>
                    <li>Airbnb Luxe</li>
                </ul>
            </div>
        </div>
        </div>

)

}