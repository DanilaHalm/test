import Nav from "@/components/Nav"
import Weather from "@/components/Weather"

const Home = () => {
  return (<main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Nav />
    <form action="https://google.com/search" method="get" target="_blank">
    <input name="q" type="search"/>
    </form>
    <Weather />
    </main>)
}
export default Home
