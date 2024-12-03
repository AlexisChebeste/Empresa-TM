import CatalogoElementos from '../components/Catalogo/CatalogoElementos';
import { API_ROUTES} from '../src_config_api';

const CatalogoFabricantes = () => {
  return <CatalogoElementos rutaDeAPI={API_ROUTES.fabricantes} tipo="fabricantes" />;
};

export default CatalogoFabricantes;

