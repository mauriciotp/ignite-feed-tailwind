import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div>
      <Header />

      <div className="mx-auto my-8 grid max-w-[1120px] grid-cols-[256px_1fr] items-start gap-8 px-4">
        <Sidebar />
        <main>Posts</main>
      </div>
    </div>
  )
}

export default App
