import {
  Calendar,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Programacion from "../assets/Programacion-Festival-Sierra-Nevada.pdf";

import BannerImg from "../assets/Banner.jpeg";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useMemo, useState } from "react";

export function FestivalPoster() {
  /* =========================
     PROGRAMACIÓN
  ========================== */
  const scheduleItems = [
  // --- MIÉRCOLES 10 ---
  {
    date: "10 de Diciembre",
    time: "9:00 AM - 5:00 PM",
    title: "Semillero juvenil de cine - CineJaguar",
    type: "Formación",
    location: "Salón comunal - Minca",
    guest: "-",
  },

  // --- JUEVES 11 ---
  {
    date: "11 de Diciembre",
    time: "10:00 AM",
    title: `Festival de cine infantil "Túcan y Delfín": Ooommm mmmooo Yoga para niños, Aisha la super estrella: saluda al sol, Flora la armoniosa: despierta tus sentidos`,
    type: "Cine infantil",
    location: "Salón comunal - Minca",
    guest: "Dir: Diana Rico - Richard Décaillet",
  },
  {
    date: "11 de Diciembre",
    time: "10:00 AM",
    title: `Festival de cine infantil "Túcan y Delfín": Manatí y colibrí`,
    type: "Cine infantil",
    location: "Salón comunal - Minca",
    guest: "Dir: EndemannFilms, FundaMurunmake, Jacana Jacana",
  },
  {
    date: "11 de Diciembre",
    time: "10:00 AM",
    title: `Festival de cine infantil "Túcan y Delfín": Una aventura por el río`,
    type: "Cine infantil",
    location: "Salón comunal - Minca",
    guest: "Dir: Marcela Rincón González",
  },
  {
    date: "11 de Diciembre",
    time: "10:00 AM",
    title: `Festival de cine infantil "Túcan y Delfín": Guillermina y Candelario, Residuos Orgánicos`,
    type: "Cine infantil",
    location: "Salón comunal - Minca",
    guest: "Dir: Econsciente Audiovisual / Jacana Jacana",
  },
  {
    date: "11 de Diciembre",
    time: "10:00 AM",
    title: `Festival de cine infantil "Túcan y Delfín": Rinconcita`,
    type: "Cine infantil",
    location: "Salón comunal - Minca",
    guest: "Dir: Sergio Fernández - Aura Restrepo",
  },
  {
    date: "11 de Diciembre",
    time: "10:00 AM",
    title: `Festival de cine infantil "Túcan y Delfín": La cumbia del bagre`,
    type: "Cine infantil",
    location: "Salón comunal - Minca",
    guest: "Dir: Jacana Jacana",
  },
  {
    date: "11 de Diciembre",
    time: "11:00 AM",
    title: "Taller infantil",
    type: "Taller",
    location: "El caracol",
    guest: "-",
  },
  {
    date: "11 de Diciembre",
    time: "2:30 PM",
    title: "Tejido Fecsine (Actividad comunitaria)",
    type: "Actividad comunitaria",
    location: "El caracol",
    guest: "-",
  },
  {
    date: "11 de Diciembre",
    time: "4:30 PM",
    title: "Inauguración Salón de exposición fotográfica Fecsine",
    type: "Inauguración",
    location: "Salón comunal - Minca",
    guest: "-",
  },
  {
    date: "11 de Diciembre",
    time: "6:30 PM",
    title: "El canto del Naguaré",
    type: "Proyección",
    location: "Parque principal - Minca",
    guest: "Dir: Vanessa Teteye - Edilma Prada",
  },
  {
    date: "11 de Diciembre",
    time: "6:30 PM",
    title: "Bimdaso a Má bila mí",
    type: "Proyección",
    location: "Parque principal - Minca",
    guest: "Dir: Alejandro Perdomo",
  },
  {
    date: "11 de Diciembre",
    time: "6:30 PM",
    title: "Kunzamu zaku - El huso",
    type: "Proyección",
    location: "Parque principal - Minca",
    guest: "Dir: Colectivo Yosokwi",
  },
  {
    date: "11 de Diciembre",
    time: "6:30 PM",
    title: "Conversatorio serie Kunzamu zaku",
    type: "Conversatorio",
    location: "Parque principal - Minca",
    guest: "Invitada: Marcela Villafañe",
  },
  {
    date: "11 de Diciembre",
    time: "8:30 PM",
    title: "Las voces del río",
    type: "Proyección",
    location: "Parque principal - Minca",
    guest: "Dir: Wilson Giraldo - Vladimir Dacol",
  },
  {
    date: "11 de Diciembre",
    time: "10:00 PM",
    title: "Concierto Yaku tiki",
    type: "Concierto",
    location: "Parque principal - Minca",
    guest: "-",
  },

  // --- VIERNES 12 ---
  {
    date: "12 de Diciembre",
    time: "10:00 AM",
    title: `Festival de cine infantil "Túcan y Delfín": Ooommm mmmooo Yoga para niños`,
    type: "Cine infantil",
    location: "Salón comunal - Minca",
    guest: "Dir: Diana Rico - Richard Décaillet",
  },
  {
    date: "12 de Diciembre",
    time: "10:00 AM",
    title: `Festival de cine infantil "Túcan y Delfín": JEWU`,
    type: "Cine infantil",
    location: "Salón comunal - Minca",
    guest: "Dir: IndocuPalomino y Jacana Jacana",
  },
  {
    date: "12 de Diciembre",
    time: "10:00 AM",
    title: `Festival de cine infantil "Túcan y Delfín": Viaje al corazón del mundo`,
    type: "Cine infantil",
    location: "Salón comunal - Minca",
    guest: "Dir: Aura Canela",
  },
  {
    date: "12 de Diciembre",
    time: "10:00 AM",
    title: `Festival de cine infantil "Túcan y Delfín": Minca Pura - Territorio`,
    type: "Cine infantil",
    location: "Salón comunal - Minca",
    guest: "Dir: Econsciente Audiovisual - Jacana Jacana",
  },
  {
    date: "12 de Diciembre",
    time: "10:00 AM",
    title: `Festival de cine infantil "Túcan y Delfín": Minca pura sin basura`,
    type: "Cine infantil",
    location: "Salón comunal - Minca",
    guest: "Dir: Jacana Jacana",
  },
  {
    date: "12 de Diciembre",
    time: "11:00 AM",
    title: "Taller infantil",
    type: "Taller",
    location: "Sol de Minca",
    guest: "-",
  },
  {
    date: "12 de Diciembre",
    time: "2:30 PM",
    title: "Mandala Fecsine (Actividad comunitaria)",
    type: "Actividad comunitaria",
    location: "Sol de Minca",
    guest: "-",
  },
  {
    date: "12 de Diciembre",
    time: "4:30 PM",
    title: "Master class: Film Score",
    type: "Master class",
    location: "Sonido Selva",
    guest: "Invitado: Cristian Castaño",
  },
  {
    date: "12 de Diciembre",
    time: "6:30 PM",
    title: "Magüita los 4 principios del ser",
    type: "Proyección",
    location: "Parque principal - Minca",
    guest: "Dir: Creación comunitaria",
  },
  {
    date: "12 de Diciembre",
    time: "6:30 PM",
    title: "Acuatenientes",
    type: "Proyección",
    location: "Parque principal - Minca",
    guest: "Dir: Andrés Gil",
  },
  {
    date: "12 de Diciembre",
    time: "6:30 PM",
    title: "Kunzamu zaku - La sangre",
    type: "Proyección",
    location: "Parque principal - Minca",
    guest: "Dir: Colectivo Yosokwi",
  },
  {
    date: "12 de Diciembre",
    time: "6:30 PM",
    title: "Maú: La Voz de Nuestros Ancestros",
    type: "Proyección",
    location: "Parque principal - Minca",
    guest: "Dir: Miguel Dionisio Ramos",
  },
  {
    date: "12 de Diciembre",
    time: "6:30 PM",
    title: "Conversatorio Maú: La Voz de Nuestros Ancestros",
    type: "Conversatorio",
    location: "Parque principal - Minca",
    guest: "Invitada: Amanda Quijano",
  },
  {
    date: "12 de Diciembre",
    time: "8:30 PM",
    title: "Residuos Orgánicos",
    type: "Proyección",
    location: "Parque principal - Minca",
    guest: "Dir: Econsciente Audiovisual - Jacana Jacana",
  },
  {
    date: "12 de Diciembre",
    time: "8:30 PM",
    title: "Respira Amazonas",
    type: "Proyección",
    location: "Parque principal - Minca",
    guest: "Dir: Wilson Giraldo",
  },
  {
    date: "12 de Diciembre",
    time: "10:00 PM",
    title: "Concierto Funky Band",
    type: "Concierto",
    location: "Parque principal - Minca",
    guest: "-",
  },

  // --- SÁBADO 13 ---
  {
    date: "13 de Diciembre",
    time: null,
    title: "Proyección en Comunidad indígena",
    type: "Proyección",
    location: "Cerrada al público",
    guest: "-",
  },

  // --- DOMINGO 14 ---
  {
    date: "14 de Diciembre",
    time: null,
    title: "Proyección en Comunidad indígena",
    type: "Proyección",
    location: "Cerrada al público",
    guest: "-",
  },

  // --- LUNES 15 ---
  {
    date: "15 de Diciembre",
    time: "10:00 AM",
    title: `Festival de cine infantil "Túcan y Delfín": Ooommm mmmooo Yoga para niños, Flora la armoniosa: despierta tus sentidos, Pati y Ani en contacto`,
    type: "Cine infantil",
    location: "Sacra - Palomino",
    guest: "Dir: Diana Rico - Richard Décaillet",
  },
  {
    date: "15 de Diciembre",
    time: "10:00 AM",
    title: `Festival de cine infantil "Túcan y Delfín": Manatí y colibrí`,
    type: "Cine infantil",
    location: "Sacra - Palomino",
    guest: "Dir: EndemannFilms, FundaMurunmake, Jacana Jacana",
  },
  {
    date: "15 de Diciembre",
    time: "10:00 AM",
    title: `Festival de cine infantil "Túcan y Delfín": Los secretos del manglar Guillermina y Candelario`,
    type: "Cine infantil",
    location: "Sacra - Palomino",
    guest: "Dir: Marcela Rincón González",
  },
  {
    date: "15 de Diciembre",
    time: "10:00 AM",
    title: `Festival de cine infantil "Túcan y Delfín": Rinconcita`,
    type: "Cine infantil",
    location: "Sacra - Palomino",
    guest: "Dir: Sergio Fernández - Aura Restrepo",
  },
  {
    date: "15 de Diciembre",
    time: "10:00 AM",
    title: `Festival de cine infantil "Túcan y Delfín": Residuos Orgánicos`,
    type: "Cine infantil",
    location: "Sacra - Palomino",
    guest: "Dir: Econsciente Audiovisual - Jacana Jacana",
  },
  {
    date: "15 de Diciembre",
    time: "11:00 AM",
    title: "Taller infantil",
    type: "Taller",
    location: "Sacra - Palomino",
    guest: "-",
  },
  {
    date: "15 de Diciembre",
    time: "2:00 PM",
    title: "La cumbia del bagre",
    type: "Proyección",
    location: "Sacra - Palomino",
    guest: "Dir: Jacana Jacana",
  },
  {
    date: "15 de Diciembre",
    time: "3:00 PM",
    title: "Resultado del Taller de video danza – Festival de danza pies descalzos",
    type: "Actividad artística",
    location: "Sacra - Palomino",
    guest: "-",
  },
  {
    date: "15 de Diciembre",
    time: "3:00 PM",
    title: "Las voces del río",
    type: "Proyección",
    location: "Sacra - Palomino",
    guest: "Dir: Wilson Giraldo - Vladimir Dacol",
  },
  {
    date: "15 de Diciembre",
    time: "4:30 PM",
    title: "Conversatorio: El Cine y el cuidado del planeta",
    type: "Conversatorio",
    location: "Sacra - Palomino",
    guest: "-",
  },
  {
    date: "15 de Diciembre",
    time: "6:30 PM",
    title: "El canto del Naguaré",
    type: "Proyección",
    location: "Plaza Numen - Palomino",
    guest: "Dir: Vanessa Teteye - Edilma Prada",
  },
  {
    date: "15 de Diciembre",
    time: "6:30 PM",
    title: "Aquel 4 de noviembre",
    type: "Proyección",
    location: "Plaza Numen - Palomino",
    guest: "Dir: Marbel Vanegas Jusayu",
  },
  {
    date: "15 de Diciembre",
    time: "6:30 PM",
    title: "Kunzamu zaku - El algodón",
    type: "Proyección",
    location: "Plaza Numen - Palomino",
    guest: "Dir: Colectivo Yosokwi",
  },
  {
    date: "15 de Diciembre",
    time: "6:30 PM",
    title: "Tejidos",
    type: "Proyección / Arte",
    location: "Plaza Numen - Palomino",
    guest: "Dir: Lorena Osorio",
  },
  {
    date: "15 de Diciembre",
    time: "8:30 PM",
    title: "Maú: La Voz de Nuestros Ancestros",
    type: "Proyección",
    location: "Plaza Numen - Palomino",
    guest: "Dir: Miguel Dionisio Ramos",
  },
  {
    date: "15 de Diciembre",
    time: "8:30 PM",
    title: "Bimdaso a Má bila mí",
    type: "Proyección",
    location: "Plaza Numen - Palomino",
    guest: "Dir: Alejandro Perdomo",
  },
  {
    date: "15 de Diciembre",
    time: "8:30 PM",
    title: "Acuatenientes",
    type: "Proyección",
    location: "Plaza Numen - Palomino",
    guest: "Dir: Andrés Gil",
  },
  {
    date: "15 de Diciembre",
    time: "8:30 PM",
    title: "Kunzamu zaku - Tumas",
    type: "Proyección",
    location: "Plaza Numen - Palomino",
    guest: "Dir: Colectivo Yosokwi",
  },
  {
    date: "15 de Diciembre",
    time: "10:00 PM",
    title: "Concierto Yao",
    type: "Concierto",
    location: "Plaza Numen - Palomino",
    guest: "-",
  },
];


  /* =========================
     FILTRO POR DÍA
  ========================== */
  const days = useMemo(
    () => ["Todos", ...Array.from(new Set(scheduleItems.map(i => i.date)))],
    [scheduleItems]
  );

  const [activeDay, setActiveDay] = useState("Todos");

  const filteredItems = useMemo(() => {
    if (activeDay === "Todos") return scheduleItems;
    return scheduleItems.filter(item => item.date === activeDay);
  }, [activeDay, scheduleItems]);

  /* =========================
     EMBLA
  ========================== */
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="festival-2025" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-emerald-600 uppercase tracking-wider">
            Edición 2025
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-8">
            Festival de Cine Sierra Nevada
          </h2>
          <p className="text-xl text-gray-600 mx-auto leading-relaxed">
            La Edición 2025 del Festival de Cine Sierra Nevada continúa celebrando la fuerza narrativa de las comunidades indígenas, los creadores del Caribe colombiano y las voces que defienden la naturaleza como un territorio vivo.
            Este año, ampliamos nuestra programación con más proyecciones, invitados especiales, actividades para públicos de todas las edades y espacios de creación que conectan cultura, identidad y territorio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Poster */}
          <div className="relative group rounded-2xl overflow-hidden">
            <div className="aspect-[3/4] bg-black shadow-2xl ">
              <ImageWithFallback
                src = {BannerImg}
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
                <div className="mt-8 flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-[16px]">
                  <Calendar size={20} />
                  <span>10 - 15 de Diciembre, 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Info */}

          





    




          <div className="flex flex-col justify-center">
            <h3 className="text-3xl mb-8">Sobre el Festival</h3>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              El Festival de Cine Sierra Nevada 2025 se realizará en las estribaciones de la Sierra Nevada de Santa Marta, un escenario donde convergen historias ancestrales, memorias del Caribe y miradas ambientales que invitan a reflexionar sobre nuestra relación con el territorio.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Su propósito es seguir visibilizando y fortaleciendo la creación audiovisual regional, especialmente la realizada por los pueblos indígenas (Arhuaco, Wiwa, Kogui y Kankuamo), al tiempo que genera espacios de diálogo entre cineastas, comunidades y audiencias.
            </p>

            <div className="space-y-6 mb-10">

              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin
                    className="text-emerald-600"
                    size={24}
                  />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">
                    Minca
                  </div>
                  <div className="text-gray-600">
                    Santa Marta, Minca - Colombia
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin
                    className="text-emerald-600"
                    size={24}
                  />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">
                    Palomino
                  </div>
                  <div className="text-gray-600">
                    Santa Marta, Palomino - Colombia
                  </div>
                </div>
              </div>

            </div>

            <a href={Programacion}>
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors inline-flex items-center gap-2 self-start">
                Programación
                <ArrowRight size={20} />
              </button>
            </a>
          </div>
        </div>

        {/* Schedule Carousel */}
        <div className="mt-20">
          <h3 className="text-3xl mb-10 text-center">
            Programación
          </h3>
          
        </div>
      </div>







      <div className="container mx-auto px-6 md:px-12">

        {/* FILTRO POR DÍA */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {days.map(day => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-2 rounded-full border transition-all text-sm
                ${activeDay === day
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-white text-gray-700 hover:bg-emerald-50 border-gray-200"
                }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* CARRUSEL */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                    <div className="text-sm text-emerald-600 mb-1">
                      {item.date}
                    </div>
                    <h4 className="text-lg mb-3">
                      {item.title}
                    </h4>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{item.time ?? "Horario por confirmar"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                      <div className="text-xs uppercase tracking-wide text-gray-500">
                        {item.type}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONTROLES */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href={Programacion}>
            <button className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition">
              Ver programación completa
              <ArrowRight size={18} />
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}
