import CatalogoElementos from '../components/Catalogo/CatalogoElementos';
import { API_ROUTES} from '../src_config_api';

const CatalogoProductos = () => {
  return <CatalogoElementos rutaDeAPI={API_ROUTES.productos}  tipo="productos" />;
};

export default CatalogoProductos;

