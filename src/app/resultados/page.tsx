import Menu from "../components/menu"

export default function Resultados() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-10">
        <div className="flex flex-row w-full justify-space-evenly">
          <div className="basis-1/4">
            <Menu />
          </div>
          <div className="basis-1/2 pl-10 pr-10">
            <h1 className="font-orbitron text-4xl">Resultados</h1>
          </div>
        </div>
      </main>
    )
  }