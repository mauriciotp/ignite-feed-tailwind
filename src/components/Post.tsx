export function Post() {
  return (
    <article className="rounded-lg bg-gray-800 p-10 not-last:mb-8">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://github.com/mauriciotp.png"
            className="box-content h-12 w-12 rounded-lg border-4 border-gray-800 outline-2 outline-green-500"
          />
          <div className="flex flex-col">
            <strong className="leading-[1.6] text-gray-100">
              Maurício Pinto
            </strong>
            <span className="text-sm leading-[1.6] text-gray-400">
              Blockchain Developer
            </span>
          </div>
        </div>

        <time
          title="20 de Março às 19:56"
          dateTime="2025-03-20 19:56:20"
          className="text-sm text-gray-400"
        >
          Publicado há 1h
        </time>
      </header>

      <div className="mt-6 leading-[1.6] text-gray-300 [&_a]:font-bold [&_a]:text-green-500 [&_a]:hover:text-green-300 [&_p]:mt-4">
        <p>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            👉 <a href="">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="">#novoprojeto</a> <a href="">#nlw</a>{' '}
            <a href="">#rocketseat</a>
          </p>
        </p>
      </div>

      <form className="group mt-6 w-full border-t border-t-gray-600 pt-6">
        <strong className="leading-[1.6] text-gray-100">
          Deixe seu feedback
        </strong>
        <textarea
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
    </article>
  )
}
