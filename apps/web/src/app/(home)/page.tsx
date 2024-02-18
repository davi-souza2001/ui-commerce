import { SalesType } from './components/SalesType/SalesType'

const Home = () => {
  return (
    <main className="min-h-screen w-full p-5">
      <SalesType type="Flash Sales" />
      <SalesType type="Hard Sales" />
      <SalesType type="Easy Sales" />
    </main>
  )
}

export default Home
