import SectionContainer from '../components/SectionContainer';
import { useCarrito } from '../components/Carrito/useCarrito';
import { CircleMinus, CirclePlus } from 'lucide-react';

export default function Carrito() {
    const { carrito, removerDelCarrito, actualizarCantidad, limpiarCarrito, obtenerTotalPrecio } = useCarrito();
    return (
        <SectionContainer>
            <h1 className="text-3xl font-bold mb-6">Carrito de Compras</h1>
            {carrito.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <>
                <ul className="divide-y divide-gray-200">
                    {carrito.map((item) => (
                    <li key={item.id} className="py-4 flex">
                        <img src={item.pathImg} alt={item.nombre} className="h-36 w-40 flex-none rounded-md object-contain object-center p-2" />
                        <div className="ml-4 flex flex-1 flex-col p-4">
                            <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>{item.nombre}</h3>
                                <p className="ml-4">${(item.precio * item.cantidad).toFixed(2)}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{item.descripcion}</p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                                <div className="flex items-center">
                                <button onClick={() => actualizarCantidad(item.id, item.cantidad - 1)} className="text-gray-500 hover:text-gray-700"><CircleMinus /></button>
                                <span className="mx-2">{item.cantidad}</span>
                                <button onClick={() => actualizarCantidad(item.id, item.cantidad + 1)} className="text-gray-500 hover:text-gray-700"><CirclePlus /></button>
                                </div>
                                <button
                                type="button"
                                onClick={() => removerDelCarrito(item.id)}
                                className="font-medium text-orange-600 hover:text-orange-500"
                                >
                                Eliminar
                                </button>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${obtenerTotalPrecio().toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Envío e impuestos calculados al finalizar la compra.</p>
                    <div className="mt-6">
                    <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700"
                    >
                        Finalizar Compra
                    </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <button
                        type="button"
                        className="font-medium text-orange-600 hover:text-orange-500"
                        onClick={limpiarCarrito}
                    >
                        Vaciar Carrito
                    </button>
                    </div>
                </div>
                </>
            )}
        </SectionContainer>
    )
}
