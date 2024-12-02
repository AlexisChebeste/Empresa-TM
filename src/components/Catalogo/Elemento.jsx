import { Link } from "react-router-dom";
import { useOptimizedImage } from '../../hooks/useOptimizacionDeImagenes';


function Elemento({ elemento, tipo}) {
  const imageProps = useOptimizedImage(elemento.pathImg, '(max-width: 768px) 100vw, 50vw');


  return (
    <Link 
      to={`/${tipo}/${elemento.id}`} 
      className="bg-white rounded-md border-orange-300 border
      hover:shadow-lg hover:scale-105  transition-all duration-300 
      flex flex-col items-stretch h-full
      p-4 text-gray-700 "
    >
      <div className="flex-grow flex flex-col items-center justify-between">
        <div className="w-full aspect-square overflow-hidden rounded-md mb-4">
            <img 
            {...imageProps}
            alt={elemento.nombre}
            className=" w-full h-full object-contain p-2"
            />
        </div>
        <div className="flex flex-col items-center justify-between flex-grow w-full ">
          <h3 className="text-lg font-bold mb-2 text-center line-clamp-2">
            {elemento.nombre}
          </h3>

          <p className="text-sm mb-2 text-center flex-grow line-clamp-3">
            {elemento.descripcion}
          </p>
        
          { elemento.precio &&
            <h3 className="text-xl text-black font-semibold mt-auto">
              {`$${elemento.precio}`}
            </h3>
          }
        </div>
      </div>
      
    </Link>
  );
}

export default Elemento;