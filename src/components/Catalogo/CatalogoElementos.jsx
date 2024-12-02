import { useMemo } from 'react';
import SectionContainer from '../SectionContainer';
import SearchBar from './SearchBar';
import ErrorComponent from '../ErrorComponent';
import Elemento from './Elemento';
import { AnimatePresence, motion } from 'framer-motion';
import { useCatalogo } from '../../hooks/useCatalogo';

const CatalogoElementos = ({rutaDeAPI, tipo}) =>{
  const { elementos, loading, error, inputValue, setInputValue, refetch } = useCatalogo(rutaDeAPI, tipo);

  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const filteredResults = useMemo(() => {
    if (!inputValue) return elementos;
    return elementos.filter((elemento) =>
      elemento.nombre.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [inputValue, elementos]);

  if (loading) return <div className='loader'>Cargando ...</div>;
  if (error) return <ErrorComponent mensaje={error} refetch={refetch} />;

  return (
    <SectionContainer>
      <h1 className="text-4xl font-bold mb-6">Catálogo de {tipo}</h1>
      <div className='flex flex-col gap-6'>
        <SearchBar value={inputValue} onChange={handleInputChange} />
        
        <AnimatePresence>
          {filteredResults.length > 0 ? (
            <motion.div 
              id='listaFiltrada' 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredResults.map((elemento) => (
                <motion.div
                  key={elemento.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Elemento elemento={elemento} tipo={tipo} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.p
              className="text-center text-gray-500 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              No se encontraron resultados para "{inputValue}"
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </SectionContainer>
  );
}

export default CatalogoElementos;