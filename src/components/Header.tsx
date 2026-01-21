import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/Logo.webp";
import { QrModal } from "./QrModal";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [qrOpen, setQrOpen] = useState<boolean>(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Logo del festival"
                className="h-12 object-contain"
              />
            </a>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#festival-2025" className="text-gray-700 hover:text-emerald-600">
                Festival 2025
              </a>
              <a href="#formacion-audiovisual" className="text-gray-700 hover:text-emerald-600">
                Formación Audiovisual
              </a>
              <a href="#galeria-completa" className="text-gray-700 hover:text-emerald-600">
                Galería
              </a>
            </nav>

            {/* CTA Desktop */}
            <button
              onClick={() => setQrOpen(true)}
              className="hidden lg:block bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors"
            >
              Quiero ser amigo del festival
            </button>

            {/* Mobile Button */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t">
              <a
                href="#festival-2025"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3"
              >
                Festival 2025
              </a>

              <button
                onClick={() => {
                  setQrOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="block w-full mt-4 bg-emerald-600 text-white px-6 py-3 rounded-full"
              >
                Quiero ser amigo del festival
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* MODAL SIEMPRE FUERA DEL HEADER */}
      <QrModal isOpen={qrOpen} onClose={() => setQrOpen(false)} />
    </>
  );
}
