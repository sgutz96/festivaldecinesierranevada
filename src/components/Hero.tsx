import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1659431245554-e66588fbd196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmb3Jlc3QlMjB0cm9waWNhbHxlbnwxfHx8fDE3NjQ1NTE5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sierra Nevada"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              Fundación Cine Jaguar
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">
              Amando la naturaleza y uniendo culturas
            </h1>
            <p className="text-xl mb-8 text-emerald-100">
              La Fundación Cine Jaguar es una organización dedicada a promover el cine indígena, 
              ambiental y cultural de Colombia. A través del Festival de Cine Sierra Nevada, 
              celebramos las historias que conectan a los pueblos con su territorio y tradiciones.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-emerald-900 px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors">
                Conocer más
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                Ver películas
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1728557349552-c1660fbdff7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWd1YXIlMjB3aWxkbGlmZXxlbnwxfHx8fDE3NjQ1MDgwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jaguar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="text-center">
            <div className="text-4xl mb-2">8+</div>
            <div className="text-emerald-200">Años del Festival</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">100+</div>
            <div className="text-emerald-200">Películas Proyectadas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">15+</div>
            <div className="text-emerald-200">Países Participantes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">5000+</div>
            <div className="text-emerald-200">Asistentes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
