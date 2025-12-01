import {
  Calendar,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

export function FestivalPoster() {
  const scheduleItems = [
    {
      date: "15 de Marzo, 2025",
      title: "Inauguración del Festival",
      type: "Ceremonia de Apertura",
      location: "Teatro Principal",
      time: "7:00 PM",
    },
    {
      date: "16 de Marzo, 2025",
      title: "Proyección: Cine Étnico",
      type: "Programación Cultural",
      location: "Sala Kogui",
      time: "4:00 PM",
    },
    {
      date: "17 de Marzo, 2025",
      title: "Taller de Documental Indígena",
      type: "Programación Académica",
      location: "Centro de Formación",
      time: "10:00 AM",
    },
    {
      date: "18 de Marzo, 2025",
      title: "Cine Ambiental",
      type: "Programación Cultural",
      location: "Sala Arhuaco",
      time: "5:00 PM",
    },
    {
      date: "19 de Marzo, 2025",
      title: "Panel: Conservación y Cine",
      type: "Programación Académica",
      location: "Auditorio Sierra Nevada",
      time: "11:00 AM",
    },
    {
      date: "20 de Marzo, 2025",
      title: "Ceremonia de Clausura",
      type: "Premiación",
      location: "Teatro Principal",
      time: "8:00 PM",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="festival-2025" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-emerald-600 uppercase tracking-wider">
            Edición 2025
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">
            Festival de Cine Sierra Nevada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La tercera edición del festival que celebra las
            historias de nuestros pueblos originarios y su
            relación sagrada con la naturaleza.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Poster */}
          <div className="relative group">
          <div className="aspect-[3/4] bg-black rounded-2xl overflow-hidden shadow-2xl">
               <ImageWithFallback
                src="https://images.unsplash.com/photo-1763733594402-051a9721ff14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwY3VsdHVyZSUyMGZlc3RpdmFsfGVufDF8fHx8MTc2NDU1MTk2OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Festival Poster"
                className="w-full h-full object-cover opacity-80 grayscale"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-[rgba(0,0,0,0.35)] p-[32px]">
                
                <h3 className="text-3xl md:text-4xl mb-4 text-[rgb(255,255,255)]">
                  FECSINE 2025
                </h3>
                <div className="text-xl mb-2">
                  Festival de Cine Sierra Nevada
                </div>
                <div className="text-lg opacity-90">
                  "Amando la naturaleza y uniendo culturas"
                </div>
                <div className="mt-8 flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <Calendar size={20} />
                  <span>15 - 20 de Marzo, 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl mb-6">Sobre el Festival</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              El Festival de Cine Sierra Nevada es un encuentro
              anual que reúne lo mejor del cine indígena,
              ambiental y caribeño. Durante seis días,
              celebramos las narrativas audiovisuales que honran
              la diversidad cultural y la riqueza natural de
              nuestros territorios.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar
                    className="text-emerald-600"
                    size={24}
                  />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">
                    Fechas del Festival
                  </div>
                  <div className="text-gray-600">
                    15 al 20 de Marzo de 2025
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin
                    className="text-emerald-600"
                    size={24}
                  />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">
                    Ubicación
                  </div>
                  <div className="text-gray-600">
                    Santa Marta, Minca - Colombia
                  </div>
                </div>                
              </div>
            </div>

            

            

            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors inline-flex items-center gap-2 self-start">
              Ver Programación Completa
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Schedule Carousel */}
        <div className="mt-16">
          <h3 className="text-3xl mb-8 text-center">
            Programación
          </h3>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {scheduleItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2"
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 h-full hover:shadow-xl transition-shadow">
                      <div className="text-sm text-emerald-600 mb-2">
                        {item.date}
                      </div>
                      <h4 className="text-xl mb-3">
                        {item.title}
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                          <span>{item.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{item.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}