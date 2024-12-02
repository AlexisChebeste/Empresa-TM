import { useState, useEffect, useCallback } from 'react';
import { fetchData } from '../src_config_api';

export const useCatalogo = (rutaDeAPI, tipoElemento) => {
  const [elementos, setElementos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const fetchElementos = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchData(rutaDeAPI)
      .then(data => {
        setElementos(data);
        setLoading(false);
      })
      .catch((err) => {
        const mensaje = err.response?.status === 404 
          ? `No se encontraron ${tipoElemento}` 
          : `Hubo un error al cargar los ${tipoElemento}. Intente nuevamente más tarde.`;
        setError(mensaje);
        setLoading(false);
      });
  }, [rutaDeAPI, tipoElemento]);

  useEffect(() => {
    fetchElementos();
  }, [fetchElementos]);

  return {
    elementos,
    loading,
    error,
    inputValue,
    setInputValue,
    refetch: fetchElementos
  };
};

