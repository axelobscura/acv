export default function Modal({ isOpen, onClose } : { isOpen : any, onClose : any }) {

  if (!isOpen) return null;

  return(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-900 opacity-75"></div>
      <div className="sm:w-full md:w-1/2 bg-customVerdeDos p-6 rounded-sm shadow-lg z-50">
        <h2 className="text-xl font-bold mb-4">Documentación</h2>
        <hr/>
        <p className="pt-5 text-sm">Para poder generar su análisis certificado por el Instituto Mexicano del Cemento y del Concreto, es necesario presentar la siguiente documentación:</p>
        <form className="flex items-center space-x-6 mt-5">
          <div className="shrink-0">
            <img className="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
          </div>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input type="file" className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100
            "/>
          </label>
        </form>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-sm mt-4 float-right" onClick={onClose}>CERRAR</button>
      </div>
    </div>
  )
}