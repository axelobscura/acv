import Menu from './components/menu';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-sm-24">
      <div className="grid grid-cols-1">
        <div></div>
        <div>
          <Menu/>
        </div>
        <div></div>
      </div>
    </main>
  )
}
