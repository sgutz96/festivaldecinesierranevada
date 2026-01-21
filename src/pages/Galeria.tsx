import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { Calendar, Eye, Download } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Importar todas las imágenes de la carpeta como URLs
const galeriaImports = import.meta.glob('../assets/Galeria/*.{jpg,png}', { eager: true, as: 'url' });

// Hero de la galería
function HeroGaleria() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          //src="https://images.unsplash.com/photo-1702890764798-eda71e941da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZmVzdGl2YWwlMjBjaW5lbWF8ZW58MXx8fHwxNzY0NTUxOTY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          src={new URL("../assets/Galeria/Fot (45).jpg", import.meta.url).href}
          alt="Galería FECSINE"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
            Memorias del Festival
          </div>
          <h1 className="text-5xl md:text-6xl mb-8">Galería FECSINE</h1>
          <p className="text-xl md:text-2xl mb-10 text-emerald-100 leading-relaxed">
            Revive los mejores momentos de nuestras ediciones, celebrando la cultura, 
            el cine y la conexión con nuestras raíces.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Componente de contenido de la galería
function GaleriaContent() {
  const [imagenes, setImagenes] = useState<{ url: string; titulo: string; fecha: string; categoria: string; subcategoria: string; }[]>([]);
  const [categoriaActiva, setCategoriaActiva] = useState("todas");

  useEffect(() => {
    // Convertimos los imports en un array de objetos
    const urls = Object.values(galeriaImports) as string[];
    const galeria = urls.map(url => ({
      url,
      titulo: url.split('/').pop()?.replace(/\.(jpg|png)$/, '').replace(/_/g, ' ') || 'Imagen',
      fecha: '2024',
      categoria: '2024',
      subcategoria: 'todas'
    }));
    setImagenes(galeria);
  }, []);

  const imagenesFiltradas = categoriaActiva === "todas"
    ? imagenes
    : imagenes.filter(img => img.categoria === categoriaActiva || img.subcategoria === categoriaActiva);

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Filtros */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-6">Explora Nuestras Memorias</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {["todas", "2025", "2024", "2023", "talleres", "ceremonias"].map(cat => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  categoriaActiva === cat ? "bg-emerald-600 text-white shadow-lg" : "bg-white text-gray-700 hover:bg-emerald-50"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imagenesFiltradas.map((imagen, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={imagen.url}
                  alt={imagen.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {/*<h3 className="text-white text-xl mb-2">{imagen.titulo}</h3>*/}
                    <div className="flex items-center gap-2 text-emerald-200 text-sm">
                      <Calendar size={16} />
                      <span>{imagen.fecha}</span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors text-sm">
                        <Eye size={16} />
                        Ver
                      </button>
                      <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors text-sm">
                        <Download size={16} />
                        Descargar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Página completa
export default function Galeria() {
  return (
    <div>
      <Header />
      <HeroGaleria />
      <GaleriaContent />
      <Contact />
    </div>
  );
}
