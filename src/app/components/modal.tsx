export default function Modal({ isOpen, onClose } : { isOpen : any, onClose : any }) {

  if (!isOpen) return null;

  return(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-900 opacity-75"></div>
      <div className="sm:w-full md:w-1/2 bg-customVerdeDos p-6 rounded-sm shadow-lg z-50">
        <h2 className="text-xl font-bold mb-4">Documentación</h2>
        <hr/>
        <p className="pt-5 text-sm">Para poder generar su análisis certificado por el Instituto Mexicano del Cemento y del Concreto, es necesario presentar la siguiente documentación:</p>
        <button className="bg-green-900 text-white px-4 py-2 rounded-sm mt-4 float-right" onClick={onClose}>CERRAR</button>
      </div>
    </div>
  )
}