import axios from 'axios';

const API_BASE_URL = 'https://empresa-tm-backend-production.up.railway.app';

export const API_ROUTES = {
  productos: `${API_BASE_URL}/productos`,
  producto: (id) => `${API_BASE_URL}/productos/${id}`,
  productoFabricantes: (id) => `${API_BASE_URL}/productos/${id}/fabricantes`,
  productoComponentes: (id) => `${API_BASE_URL}/productos/${id}/componentes`,
  fabricantes: `${API_BASE_URL}/fabricantes`,
  componentes: `${API_BASE_URL}/componentes`,
  componente: (id) => `${API_BASE_URL}/componentes/${id}`,
  fabricante: (id) => `${API_BASE_URL}/fabricantes/${id}`,
};

export const fetchData = async (url) => {
  try{
    const response = await axios.get(url);
    return response.data
  }catch{
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      throw new Error(`HTTP error! status: ${error.response.status}`);
    } else if (error.request) {
      // La solicitud fue hecha pero no se recibió respuesta
      throw new Error('No response received from server');
    } else {
      // Algo sucedió al configurar la solicitud
      throw new Error(`Error setting up request: ${error.message}`);
    }
  }
};