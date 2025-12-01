import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';

export function GalleryPress() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1702890764798-eda71e941da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZmVzdGl2YWwlMjBjaW5lbWF8ZW58MXx8fHwxNzY0NTUxOTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Ceremonia de Apertura 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1763733594402-051a9721ff14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwY3VsdHVyZSUyMGZlc3RpdmFsfGVufDF8fHx8MTc2NDU1MTk2OHww&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Presentación Cultural"
    },
    {
      url: "https://images.unsplash.com/photo-1627328607888-536d01934a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWVycmElMjBuZXZhZGElMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY0NTUxOTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Proyección al Aire Libre"
    },
    {
      url: "https://images.unsplash.com/photo-1659431245554-e66588fbd196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmb3Jlc3QlMjB0cm9waWNhbHxlbnwxfHx8fDE3NjQ1NTE5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Taller Audiovisual"
    },
    {
      url: "https://images.unsplash.com/photo-1754380578509-7a0fbe72ac4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBiZWFjaCUyMGNvbG9tYmlhfGVufDF8fHx8MTc2NDU1MTk3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Conversatorio con Directores"
    },
    {
      url: "https://images.unsplash.com/photo-1728557349552-c1660fbdff7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWd1YXIlMjB3aWxkbGlmZXxlbnwxfHx8fDE3NjQ1MDgwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Premiación Festival"
    }
  ];

  const pressItems = [
    {
      title: "FECSINE 2024 rompió récord de asistencia",
      source: "El Informador",
      date: "22 de Marzo, 2024",
      excerpt: "El festival alcanzó más de 5,000 asistentes en su séptima edición, consolidándose como el evento de cine indígena más importante de Colombia."
    },
    {
      title: "Cine indígena: una ventana a la diversidad cultural",
      source: "Revista Cultural",
      date: "18 de Marzo, 2024",
      excerpt: "El Festival de Cine Sierra Nevada destaca por su compromiso con las narrativas de los pueblos originarios y la conservación ambiental."
    },
    {
      title: "Fundación Cine Jaguar gana premio internacional",
      source: "Noticias Culturales",
      date: "10 de Abril, 2024",
      excerpt: "La labor de la fundación en promover el cine étnico fue reconocida en el Festival Internacional de Pueblos Indígenas."
    },
    {
      title: "Sierra Nevada: epicentro del cine ambiental",
      source: "Eco Magazine",
      date: "5 de Marzo, 2024",
      excerpt: "FECSINE se consolida como espacio de diálogo sobre conservación y cultura a través del séptimo arte."
    },
    {
      title: "Nuevas voces del cine colombiano",
      source: "Cine Colombia",
      date: "28 de Febrero, 2024",
      excerpt: "El festival abre espacio para jóvenes realizadores indígenas que cuentan sus historias desde sus territorios."
    }
  ];

  const GalleryCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
      { loop: true, align: 'start' },
      [Autoplay({ delay: 4000, stopOnInteraction: false })]
    );

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-lg">{image.caption}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    );
  };

  const PressCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
      { loop: true, align: 'start' },
      [Autoplay({ delay: 5000, stopOnInteraction: false })]
    );

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {pressItems.map((item, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] px-2">
                <div className="bg-white rounded-xl shadow-lg p-6 h-full hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl mb-3 line-clamp-2">{item.title}</h3>
                  <div className="text-emerald-600 mb-3">{item.source}</div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                  <button className="text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-2">
                    Leer más
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    );
  };

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Gallery Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-emerald-600 uppercase tracking-wider">Momentos del Festival</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-6">Galería</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revive los mejores momentos de nuestras ediciones anteriores
            </p>
          </div>

          <GalleryCarousel />

          <div className="text-center mt-8">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors inline-flex items-center gap-2">
              Ver Galería Completa
              <ExternalLink size={18} />
            </button>
          </div>
        </div>

        {/* Press Section */}
        <div>
          <div className="text-center mb-12">
            <span className="text-emerald-600 uppercase tracking-wider">En los Medios</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-6">Prensa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lo que dicen los medios sobre el Festival de Cine Sierra Nevada
            </p>
          </div>

          <PressCarousel />
        </div>
      </div>
    </section>
  );
}