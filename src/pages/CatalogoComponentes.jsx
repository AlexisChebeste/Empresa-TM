import CatalogoElementos from '../components/Catalogo/CatalogoElementos';
import { API_ROUTES} from '../src_config_api';

const CatalogoComponentes = () => {
  return <CatalogoElementos rutaDeAPI={API_ROUTES.componentes} tipo="Componentes" />;
};

export default CatalogoComponentes;

