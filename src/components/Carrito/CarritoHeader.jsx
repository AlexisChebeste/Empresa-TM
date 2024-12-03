import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useCarrito } from './useCarrito';
import {X,CirclePlus, CircleMinus  } from 'lucide-react';

function CarritoHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    carrito,
    removerDelCarrito,
    actualizarCantidad,
    obtenerTotalProductos,
    obtenerTotalPrecio
  } = useCarrito();

  const toggleCarrito = () => setIsOpen(!isOpen);
  

  return (
    <div className="relative">
      <button
        onClick={toggleCarrito}
        className="flex items-center text-gray-700 hover:text-gray-900"
        aria-label="Ver carrito"
      >
        <img src="/images/carrito.jpg" alt="Carrito de compras" />
        {obtenerTotalProductos() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {obtenerTotalProductos()}
        </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-30">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Carrito</h2>
              <button onClick={toggleCarrito} className="text-gray-500 hover:text-gray-700">
                <X className='w-5 h-5'/>
              </button>
            </div>
            {carrito.length === 0 ? (
              <p>Tu carrito está vacío</p>
            ) : (
              <>
                <ul className="max-h-60 overflow-auto">
                  {carrito.map((item) => (
                    <li key={item.id} className="flex justify-between items-center py-2">
                      <div className="flex items-center">
                        <img src={item.pathImg} alt={item.nombre} className="w-10 h-10 object-contain rounded mr-2" />
                        <div>
                          <p className="text-sm font-medium">{item.nombre}</p>
                          <p className="text-xs text-gray-500">${item.precio.toFixed(2)} x {item.cantidad}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                          className="text-gray-500 hover:text-orange-500 px-1"
                        >
                          <CircleMinus className='size-4'/>
                        </button>
                        <span className="mx-1 text-sm">{item.cantidad}</span>
                        <button
                          onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                          className="text-gray-500 hover:text-orange-500 px-1"
                        >
                          <CirclePlus className='size-4'/>
                        </button>
                        <button
                          onClick={() => removerDelCarrito(item.id)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          <X className='w-4 h-4'/>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t pt-4">
                  <p className="font-semibold">Total: ${obtenerTotalPrecio().toFixed(2)}</p>
                </div>
                <Link
                  to="/carrito"
                  className="mt-4 block w-full bg-orange-500 text-white text-center py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
                  onClick={toggleCarrito}
                >
                  Ver carrito completo
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CarritoHeader;