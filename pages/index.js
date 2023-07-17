import MyNavbar from "../components/NAVBAR"
import MyMain from "../components/MAIN"
import MyPlaces from "../components/PLACES"
import MyPoster from "../components/POSTER"
import MyFooter from "../components/FOOTER"


export default function Home() {

  return (
    <main className="justify-center justify-items-center">
    
      <MyNavbar />
      <MyMain />
      <MyPlaces/>
      <MyPoster />
      <MyFooter />
    </main>
  )
}
