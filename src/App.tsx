import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div>
      <Header />

      <div className="mx-auto my-8 grid max-w-[1120px] grid-cols-[256px_1fr] items-start gap-8 px-4">
        <Sidebar />
        <div>
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default App
