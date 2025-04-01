import { PiThumbsUp, PiTrash } from 'react-icons/pi'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string
  onDeleteComment: (commentToDelete: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className="mt-6 flex gap-4">
      <Avatar hasBorder={false} src="https://github.com/mauriciotp.png" />

      <div className="grow">
        <div className="rounded-lg bg-gray-700 p-4">
          <header className="flex items-start justify-between">
            <div className="flex flex-col">
              <strong className="text-sm leading-[1.6]">Maurício Pinto</strong>
              <time
                title="20 de Março às 19:56"
                dateTime="2025-03-20 19:56:20"
                className="text-xs leading-[1.6] text-gray-400"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button
              onClick={handleDeleteComment}
              title="Deletar comentário"
              className="cursor-pointer rounded-xs text-gray-400 hover:text-red-500"
            >
              <PiTrash size={24} />
            </button>
          </header>

          <p className="mt-4 text-gray-300">{content}</p>
        </div>

        <footer className="mt-4">
          <button
            onClick={handleLikeComment}
            className="flex cursor-pointer items-center rounded-xs text-gray-400 hover:text-green-300"
          >
            <PiThumbsUp className="mr-2" />
            Aplaudir{' '}
            <span className="before:px-1 before:content-['\2022']">
              {likeCount}
            </span>
          </button>
        </footer>
      </div>
    </div>
  )
}
