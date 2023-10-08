import Nav from "@/components/Nav"
import myAction from "@/components/myaction"

const Home = () => {
  return (<main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Nav />
    <form>
    <input type="search"/>
    </form>
    </main>)
}
export default Home
