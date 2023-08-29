import Menu from "../components/menu"

export default function Aguas() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-10" style={{
        'backgroundImage': 'linear-gradient(to bottom, rgba(95, 133, 22, 0.80), rgba(29, 40, 6, 0.90)), url("/bkg1.jpg")',
        'backgroundSize': 'cover', /* makes the bg image responsive */
        'backgroundRepeat': 'no-repeat',
        'backgroundPosition': 'center',
        'backgroundColor': '#222222',
      }}>
        <div className="flex flex-col sm:flex-row w-full justify-space-evenly">
          <div className="basis-1/4">
            <Menu />
          </div>
          <div className="basis-1/2 pl-10 pr-10">
            <h1 className="font-orbitron text-4xl">Consumo de Agua</h1>
          </div>
        </div>
      </main>
    )
  }