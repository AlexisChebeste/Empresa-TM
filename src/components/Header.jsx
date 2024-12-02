import { useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import SectionContainer from "./SectionContainer";
import CarritoHeader from "./Carrito/CarritoHeader";
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const menuItems = [
    { to: "/", label: "Inicio" },
    { to: "/catalogo", label: "Catálogo" },
    { to: "/fabricantes", label: "Fabricantes" },
    { to: "/componentes", label: "Componentes" },
  ];

  return (
    <header className="relative w-full border-b border-orange-500">
      <SectionContainer className="flex justify-between items-center">
        <Link to="/" >
          <img src="/images/logo.png" alt="Logo de TechMakers" width={48}/>
        </Link>
        <nav className=" hidden md:flex gap-16 my-auto text-2xl font-normal text-gray-600">
          {menuItems.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-orange-500">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden" ref={menuRef}>
          <button
              className="text-gray-600 hover:text-gray-900 z-20 relative"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {isMenuOpen && (
            <nav 
            id="mobile-menu" 
            className="fixed inset-0 bg-white z-10 pt-16 flex flex-col items-center justify-center"
            aria-label="Menú móvil"
          >
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block py-4 text-2xl text-gray-700 hover:text-orange-500 transition-colors duration-200"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
        </div>
        <CarritoHeader />
        
      </SectionContainer>
    </header>
  );
}

export default Header;
