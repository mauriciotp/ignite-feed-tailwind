import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className="flex justify-center bg-gray-800 py-5">
      <img src={igniteLogo} alt="Logotipo do ignite" className="h-8" />
    </header>
  )
}
