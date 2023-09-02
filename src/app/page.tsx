import Menu from './components/menu';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-sm-24" style={{
      'backgroundImage': 'linear-gradient(to bottom, rgba(95, 133, 22, 0.80), rgba(29, 40, 6, 0.90)), url("/bkg1.jpg")',
      'backgroundSize': 'cover', /* makes the bg image responsive */
      'backgroundRepeat': 'no-repeat',
      'backgroundPosition': 'center',
      'backgroundColor': '#222222',
    }}>
      <div className="grid grid-cols-1">
        <div>
          <Menu/>
        </div>
      </div>
    </main>
  )
}
