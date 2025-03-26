import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Content {
  type: 'link' | 'paragraph'
  content: string
}

interface PostProps {
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  content: Content[]
  publishedAt: Date
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(['Muito bacana hein?!'])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(e.target.value)
  }

  function deleteComment(commentToDelete) {
    const newCommentList = comments.filter(
      (comment) => comment !== commentToDelete,
    )

    setComments(newCommentList)
  }

  return (
    <article className="rounded-lg bg-gray-800 p-10 not-last:mb-8">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className="flex flex-col">
            <strong className="leading-[1.6] text-gray-100">
              {author.name}
            </strong>
            <span className="text-sm leading-[1.6] text-gray-400">
              {author.role}
            </span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
          className="text-sm text-gray-400"
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="mt-6 leading-[1.6] text-gray-300 [&_a]:font-bold [&_a]:text-green-500 [&_a]:hover:text-green-300 [&_p]:mt-4">
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="">{line.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className="group mt-6 w-full border-t border-t-gray-600 pt-6"
      >
        <strong className="leading-[1.6] text-gray-100">
          Deixe seu feedback
        </strong>
        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário"
          className="mt-4 h-24 w-full resize-none rounded-lg bg-gray-900 p-4 leading-[1.4] text-gray-100"
        />
        <footer className="invisible max-h-0 group-focus-within:visible group-focus-within:max-h-none">
          <button
            type="submit"
            className="mt-4 cursor-pointer rounded-lg bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-300"
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className="mt-8">
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
