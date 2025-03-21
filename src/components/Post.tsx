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
    </article>
  )
}
