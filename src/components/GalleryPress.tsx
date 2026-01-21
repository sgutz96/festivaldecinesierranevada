import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';

import Foto1 from "../assets/Galeria/Foto_ (1).jpg";
import Foto2 from "../assets/Galeria/Foto_ (2).jpg";
import Foto3 from "../assets/Galeria/Foto_ (3).jpg";
import Foto4 from "../assets/Galeria/Foto_ (4).jpg";
import Foto5 from "../assets/Galeria/Foto_ (5).jpg";
import Foto6 from "../assets/Galeria/Foto_ (6).jpg";


export function GalleryPress() {
  const galleryImages = [
  {
    url: Foto1,
    caption: "Ceremonia de Apertura 2024"
  },
  {
    url: Foto2,
    caption: "Presentación Cultural"
  },
  {
    url: Foto3,
    caption: "Proyección al Aire Libre"
  },
  {
    url: Foto4,
    caption: "Taller Audiovisual"
  },
  {
    url: Foto5,
    caption: "Conversatorio con Directores"
  },
  {
    url: Foto6,
    caption: "Premiación Festival"
  }
];



  const pressItems = [
  {
    "title": "Llega el Festival de Cine Sierra Nevada con las comunidades indígenas como protagonistas",
    "source": "Deracamandaca",
    "date": "31 octubre 2024",
    "excerpt": "Después de su éxito en 2023, la Fundación Cine Jaguar y Potente Cine presentan la segunda edición del Festival de Cine Sierra Nevada, del 8 al 11 de noviembre en Minca, Santa Marta, con una variada programación cinematográfica y cultural.",
    "link": "https://deracamandaca.com/llega-el-festival-de-cine-sierra-nevada-con-las-comunidades-indigenas-como-protagonistas/"
  },
  {
    "title": "Festival de Cine Sierra Nevada, un espacio de intercambio cultural",
    "source": "ZonaCero",
    "date": "01 noviembre 2024",
    "excerpt": "El evento se llevará a cabo del 8 al 11 de noviembre en Minca, Santa Marta, integrando cine, naturaleza y comunidad en un espacio de intercambio cultural.",
    "link": "https://zonacero.com/sociales/festival-de-cine-sierra-nevada-un-espacio-de-intercambio-cultural"
  },
  {
    "title": "Llega el Festival de Cine Sierra Nevada",
    "source": "Combotropical (blog)",
    "date": "octubre 2024",
    "excerpt": null,
    "link": "https://combotropical.blogspot.com/2024/10/llega-el-festival-de-cine-sierra-nevada.html?m=1"
  },
  {
    "title": "Encuentro entre el arte y la naturaleza en el Festival de Cine Sierra Nevada 2024",
    "source": "Diario La Libertad",
    "date": "04 noviembre 2024",
    "excerpt": "El festival ofrecerá más de 40 películas (largometrajes y cortos) en sus líneas de cine ambiental, caribeño, infantil y étnico, con foco en comunidades indígenas y afrocolombianas; también habrá programación cultural, música, ferias artesanales y actividades formativas.",
    "link": "https://diariolalibertad.com/sitio/2024/11/04/encuentro-entre-el-arte-y-la-naturaleza-en-el-festival-de-cine-sierra-nevada-2024/"
  },
  {
    "title": null,
    "source": "Caracol.com.co",
    "date": "08 noviembre 2024",
    "excerpt": null,
    "link": "https://caracol.com.co/2024/11/08/atletas-de-power-training-club-se-coronan-campeones-en-evento-nacional-de-crossfit/"
  },
  {
    "title": "La Sierra Nevada cuenta con su propio Festival de Cine",
    "source": "Hoy Diario del Magdalena",
    "date": "noviembre 2024",
    "excerpt": null,
    "link": "https://hoydiariodelmagdalena.com.co/archivos/1023698/la-sierra-nevada-cuenta-con-su-propio-festival-de-cine/"
  },
  {
    "title": "Inicia en Santa Marta el Festival de Cine Sierra Nevada",
    "source": "Opinión Caribe",
    "date": "08 noviembre 2024",
    "excerpt": "Desde este viernes hasta el 11 de noviembre en Minca se realizará la edición 2024 del festival, con películas de cine ambiental, del Caribe y étnico, incluyendo obras de indígenas de la Sierra Nevada.",
    "link": "https://www.opinioncaribe.com/2024/11/08/inicia-en-santa-marta-el-festival-de-cine-sierra-nevada/"
  },
  {
    "title": "Inicia el Festival de Cine Sierra Nevada: comunidades indígenas son protagonistas",
    "source": "El Espectador",
    "date": "08 noviembre 2024",
    "excerpt": "Del 8 al 11 de noviembre se llevará a cabo la segunda edición del festival en Minca, Santa Marta; la programación incluye 40 títulos entre películas y cortos de cine ambiental, caribeño, infantil y étnico —con producciones de pueblos Arhuaco, Wiwa, Kogui, Kankuamo, Wayúu y palenqueros— además de actividades culturales, formativas y artísticas.",
    "link": "https://www.elespectador.com/entretenimiento/cine-y-tv/inicia-el-festival-de-cine-sierra-nevada-comunidades-indigenas-son-protagonistas/"
  },
  {
    "title": "Minca es sede del Festival de Cine Sierra Nevada",
    "source": "Hoy Diario del Magdalena",
    "date": "noviembre 2024",
    "excerpt": null,
    "link": "https://hoydiariodelmagdalena.com.co/archivos/1024853/minca-es-sede-del-festival-de-cine-sierra-nevada/"
  },
  {
    "title": "El Festival de Cine Sierra Nevada llega a Minca y a sus comunidades rurales",
    "source": "Revista7",
    "date": null,
    "excerpt": null,
    "link": "https://revista7.co/el-festival-de-cine-sierra-nevada-llega-a-minca-y-a-sus-comunidades-rurales/"
  },
  {
    "title": "Inicia el Festival de Cine Sierra Nevada con las comunidades indígenas como protagonistas",
    "source": "Santa Marta City",
    "date": "08 noviembre 2024",
    "excerpt": null,
    "link": "https://santamartacity.com/noticias/inicio-el-festival-de-cine-sierra-nevada-con-las-comunidades-indigenas-como-protagonistas/"
  }
]
;

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
                    <a href={item.link} className="flex gap-2">
                    Leer más
                    <ExternalLink size={16} />
                    </a>
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
    <section id="galeria" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Gallery Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-emerald-600 uppercase tracking-wider">Momentos del Festival</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-8">Galería</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Revive los mejores momentos de nuestras ediciones anteriores
            </p>
          </div>

          <GalleryCarousel />

          <div className="text-center mt-12">
            <a href="#galeria-completa">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors inline-flex items-center gap-2">
              Ver Galería Completa
              <ExternalLink size={18} />
            </button>
            </a>
          </div>
        </div>

        {/* Press Section */}
        <div>
          <div className="text-center mb-16">
            <span className="text-emerald-600 uppercase tracking-wider">En los Medios</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-8">Prensa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Lo que dicen los medios sobre el Festival de Cine Sierra Nevada
            </p>
          </div>

          <PressCarousel />
        </div>
      </div>
    </section>
  );
}