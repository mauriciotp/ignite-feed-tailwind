import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/mauriciotp.png',
      name: 'Maurício Pinto',
      role: 'Blockchain Developer',
    },
    content: [
      {
        type: 'paragraph' as const,
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph' as const,
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link' as const,
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2025-03-25 11:12:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/carnotbraun.png',
      name: 'Carnot Braun',
      role: 'Data Scientist',
    },
    content: [
      {
        type: 'paragraph' as const,
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph' as const,
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link' as const,
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2025-03-20 11:12:00'),
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className="mx-auto my-8 grid max-w-[1120px] grid-cols-[256px_1fr] items-start gap-8 px-4 max-md:grid-cols-1">
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
