import { Link } from "react-router-dom";
import Separacion from "./Separacion";

function ListadoItems ({tipo, items}){
    return(
        <section id={tipo.toLowerCase()}>
            <h2 className="text-2xl font-semibold mb-4">{tipo}</h2>
            <Separacion />
            <ul className="list-disc list-inside">
            {items && items.map((item) => (
                <li key={item.id} className="mb-2">
                <Link to={`/${tipo}/${item.id}`} className="hover:underline">
                    {item.nombre}
                </Link>
                </li>
            ))}
            </ul>
        </section>
    )
}

export default ListadoItems;