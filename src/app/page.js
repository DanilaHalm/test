import Nav from "@/components/Nav"

const Home = () => {
  return (<main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Nav />
    <form action="http://google.com/search" method="get" target="_blank">
    <input name="q" type="search"/>
    </form>
    </main>)
}
export default Home
