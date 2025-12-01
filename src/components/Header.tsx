import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from '../assets/Logo.webp';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-12 overflow-hidden flex items-center justify-center">
  <img
    src={Logo}
    alt="Logo"
    className="w-full h-full object-cover"
  />
</div>

            
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-emerald-600 transition-colors">
                Festival
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a
                  href="#festival-2025"
                  className="block px-4 py-3 hover:bg-emerald-50 text-gray-700"
                >
                  Festival 2025
                </a>
                <a
                  href="#festival-2024"
                  className="block px-4 py-3 hover:bg-emerald-50 text-gray-700"
                >
                  Festival 2024
                </a>
                <a
                  href="#festival-2023"
                  className="block px-4 py-3 hover:bg-emerald-50 text-gray-700"
                >
                  Festival 2023
                </a>
              </div>
            </div>
            <a
              href="#formacion"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Formación Audiovisual
            </a>
            <a
              href="#galeria"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Galería
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-emerald-600 transition-colors">
                Aliados Turisticos
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a
                  href="#hoteles"
                  className="block px-4 py-3 hover:bg-emerald-50 text-gray-700"
                >
                  Hoteles
                </a>
                <a
                  href="#restaurantes"
                  className="block px-4 py-3 hover:bg-emerald-50 text-gray-700"
                >
                  Restaurantes
                </a>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <button className="hidden lg:block bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors">
            Quiero ser amigo del festival
          </button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <a
              href="#festival-2025"
              className="block py-3 text-gray-700 hover:text-emerald-600"
            >
              Festival 2025
            </a>
            <a
              href="#festival-2024"
              className="block py-3 text-gray-700 hover:text-emerald-600"
            >
              Festival 2024
            </a>
            <a
              href="#festival-2023"
              className="block py-3 text-gray-700 hover:text-emerald-600"
            >
              Festival 2023
            </a>
            <a
              href="#formacion"
              className="block py-3 text-gray-700 hover:text-emerald-600"
            >
              Formación Audiovisual
            </a>
            <a
              href="#galeria"
              className="block py-3 text-gray-700 hover:text-emerald-600"
            >
              Galería
            </a>
            <a
              href="#hoteles"
              className="block py-3 text-gray-700 hover:text-emerald-600"
            >
              Hoteles
            </a>
            <a
              href="#restaurantes"
              className="block py-3 text-gray-700 hover:text-emerald-600"
            >
              Restaurantes
            </a>
            <button className="w-full mt-4 bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors">
              Quiero ser amigo del festival
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}