import React from 'react';
import SectionContainer from './SectionContainer';
import Separacion from './Separacion';
import { useOptimizedImage } from '../hooks/useOptimizacionDeImagenes';

function DetalleItem({ children, item}) {
  const imageProps = useOptimizedImage(item.pathImg, '(max-width: 768px) 100vw, 50vw');
    return (
      <SectionContainer className="flex flex-col md:flex-row border border-orange-300 py-9 pr-6 my-7">
        <div className="md:w-1/2 my-auto">
          <img {...imageProps} alt={item.nombre} className="w-full h-auto rounded-lg " />
        </div>
        <div className="md:w-1/2 text-gray-600 pl-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{item.nombre}</h1>
          <Separacion />
          <p className="text-gray-600 mb-6">{item.descripcion}</p>
          {children}
        </div>
      </SectionContainer>
    );
  }
  
  export default DetalleItem;