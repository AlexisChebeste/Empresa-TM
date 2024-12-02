import {createContext, useState, useEffect} from 'react'

export const CarritoContext = createContext();

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState(() =>{
        const carritoGuardado = localStorage.getItem('carrito');
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

      const agregarAlCarrito = (producto, cantidad) => {
        setCarrito(prevCarrito => {
          const productoExistente = prevCarrito.find(item => item.id === producto.id);
          if (productoExistente) {
            return prevCarrito.map(item =>
              item.id === producto.id
                ? { ...item, cantidad: item.cantidad + cantidad }
                : item
            );
          }
          return [...prevCarrito, { ...producto, cantidad }];
        });
      };

      const removerDelCarrito = (productoId) => {
          setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== productoId));
      };
    
      const actualizarCantidad = (productoId, nuevaCantidad) => {
        if (nuevaCantidad <= 0) {
          removerDelCarrito(productoId);
        } else {
          setCarrito(prevCarrito =>
            prevCarrito.map(item =>
              item.id === productoId ? { ...item, cantidad: nuevaCantidad } : item
            )
          );
        }
      };
    
      const limpiarCarrito = () => {
        setCarrito([]);
      };

      const obtenerCantidadProducto = (productoId) => {
        const producto = carrito.find(item => item.id === productoId);
        return producto ? producto.cantidad : 0;
      };
    
      const obtenerTotalProductos = () => {
        return carrito.reduce((total, item) => total + item.cantidad, 0);
      };
    
      const obtenerTotalPrecio = () => {
        return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
      };

    return(
        <CarritoContext.Provider value={{
            carrito,
            agregarAlCarrito,
            removerDelCarrito,
            actualizarCantidad,
            limpiarCarrito,
            obtenerCantidadProducto,
            obtenerTotalProductos,
            obtenerTotalPrecio
        }}>
            {children}
        </CarritoContext.Provider>
    )
}