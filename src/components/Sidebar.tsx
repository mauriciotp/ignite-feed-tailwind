import { PiPencilLine } from 'react-icons/pi'

export function Sidebar() {
  return (
    <aside className="overflow-hidden rounded-lg bg-gray-800">
      <img
        className="h-[72px] w-full object-cover"
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className="-mt-6 flex flex-col items-center">
        <img
          className="box-content h-12 w-12 rounded-lg border-4 border-gray-800 outline-2 outline-green-500"
          src="https://github.com/mauriciotp.png"
          alt=""
        />
        <strong className="mt-4 leading-[1.6] text-gray-100">
          Maurício Pinto
        </strong>
        <span className="text-sm leading-[1.6] text-gray-400">
          Blockchain Developer
        </span>
      </div>

      <footer className="mt-6 border-t border-t-gray-600 px-8 py-6">
        <a
          href="#"
          className="flex h-[50px] items-center justify-center gap-2 rounded-lg border border-green-500 px-6 font-bold text-green-500 transition hover:bg-green-500 hover:text-white"
        >
          <PiPencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
