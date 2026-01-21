import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import LogoJaguar from "../assets/logo cine jaguar25.png";

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';

interface Movie {
  title: string;
  director: string;
  country: string;
  year: number;
  duration: string;
  image: string;
}

export function MoviesSection() {
  const ambientalMovies: Movie[] = [
    {
      title: "Las voces del rio ",
      director: "María Kogui",
      country: "Colombia",
      year: 2025,
      duration: "85 min",
      image: new URL("../assets/ambiental/las voces del rio.jpeg", import.meta.url).href
    },
    {
      title: "Respira Amazonas",
      director: "José Arhuaco",
      country: "Colombia",
      year: 2025,
      duration: "72 min",
      image: new URL("../assets/ambiental/Respira amazanoas.jpeg", import.meta.url).href
    },
    {
      title: "Acuatenientes",
      director: "Ana Wiwa",
      country: "Colombia",
      year: 2025,
      duration: "90 min",
      image: new URL("../assets/ambiental/Acuatenientes.png", import.meta.url).href
    },
    {
      title: "Residuos Orgánicos",
      director: "Ana Wiwa",
      country: "Colombia",
      year: 2025,
      duration: "90 min",
      image: new URL("../assets/ambiental/Residuos Orgánicos.png", import.meta.url).href
    }
  ];

  const EtnicoMovies: Movie[] = [
  {
    title: "Kunsamu Zaku, capítulo 4: Tumas",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Etnico/tumas.png", import.meta.url).href
  },
  {
    title: "Kunsamu Zaku, capítulo 2: El Huso",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Etnico/el-huso.png", import.meta.url).href
  },
  {
    title: "Kunsamu Zaku, capítulo 1: La Sangre",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Etnico/la-sangre.png", import.meta.url).href
  },
  {
    title: "Kunsamu Zaku, capítulo 4: El Algodón",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Etnico/el-algodon.png", import.meta.url).href
  },
  {
    title: "Aquel 4 de noviembre",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Etnico/aquel-4-de-noviembre.jpeg", import.meta.url).href
  },
  {
    title: "Bimdaso a Má bila mí",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Etnico/bimdaso-ma-bila-mi.jpeg", import.meta.url).href
  },
  {
    title: "El canto del Naguaré",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Etnico/canto-del-naguare.jpg", import.meta.url).href
  },
  {
    title: "Maü: La Voz de Nuestros Ancestros",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Etnico/mau-voz-ancestros.png", import.meta.url).href
  },
  {
    title: "Tejidos",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Etnico/tejidos.png", import.meta.url).href
  }
];

  const InfantilMovies: Movie[] = [
  {
    title: "Aisha la super estrella: Saluda al sol – Ooomm Mmmooo Yoga para niños",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Infantil/aisha-saluda-al-sol.png", import.meta.url).href
  },
  {
    title: "Flora la armoniosa: Despierta tus sentidos – Ooomm Mmmooo Yoga para niños",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Infantil/flora-despierta-sentidos.png", import.meta.url).href
  },
  {
    title: "Pati y Ani en contacto – Ooomm Mmmooo Yoga para niños",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Infantil/pati-ani-contacto.png", import.meta.url).href
  },
  {
    title: "Willy el verde se desintoxica – Ooomm Mmmooo Yoga para niños",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Infantil/willy-verde-desintoxica.png", import.meta.url).href
  },
  {
    title: "La cumbia del bagre",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Infantil/cumbia-del-bagre.png", import.meta.url).href
  },
  {
    title: "Manatí y Colibrí",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Infantil/manati-colibri.png", import.meta.url).href
  },
  {
    title: "JEWU",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Infantil/jewu.png", import.meta.url).href
  },
  {
    title: "Minca pura sin basura",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Infantil/minca-pura-sin-basura.png", import.meta.url).href
  },
  {
    title: "Minca pura territorio",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Infantil/minca-pura-territorio.png", import.meta.url).href
  },
  {
    title: "Una aventura por el río – Guillermina y Candelario",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Infantil/aventura-por-el-rio.jpg", import.meta.url).href
  },
  {
    title: "Los secretos del manglar – Guillermina y Candelario",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Infantil/secretos-del-manglar.png", import.meta.url).href
  },
  {
    title: "Rinconcita hasta el último rincón",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Infantil/rinconcita.jpeg", import.meta.url).href
  },
  {
    title: "Un viaje al corazón del mundo",
    director: "",
    country: "Colombia",
    year: 2025,
    duration: "90 min",
    image: new URL("../assets/Infantil/viaje-corazon-mundo.jpeg", import.meta.url).href
  }
];

{/*
  const colombianMovies: Movie[] = [
    {
      title: "Colombia Diversa",
      director: "Juan Pablo Rojas",
      country: "Colombia",
      year: 2024,
      duration: "110 min",
      image: "https://images.unsplash.com/photo-1702890764798-eda71e941da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZmVzdGl2YWwlMjBjaW5lbWF8ZW58MXx8fHwxNzY0NTUxOTY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Territorios de Paz",
      director: "Claudia Gómez",
      country: "Colombia",
      year: 2023,
      duration: "98 min",
      image: "https://images.unsplash.com/photo-1659431245554-e66588fbd196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmb3Jlc3QlMjB0cm9waWNhbHxlbnwxfHx8fDE3NjQ1NTE5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Raíces Colombianas",
      director: "Fernando Vargas",
      country: "Colombia",
      year: 2024,
      duration: "105 min",
      image: "https://images.unsplash.com/photo-1627328607888-536d01934a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWVycmElMjBuZXZhZGElMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY0NTUxOTY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Memorias de mi Tierra",
      director: "Patricia Sánchez",
      country: "Colombia",
      year: 2024,
      duration: "82 min",
      image: "https://images.unsplash.com/photo-1763733594402-051a9721ff14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwY3VsdHVyZSUyMGZlc3RpdmFsfGVufDF8fHx8MTc2NDU1MTk2OHww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];
*/}

  const MovieCarousel = ({ movies }: { movies: Movie[] }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
      { loop: true, align: 'start' },
      [Autoplay({ delay: 3500, stopOnInteraction: false })]
    );

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
      <div className="relative">
        <div className="" ref={emblaRef}>
          <div className="flex gap-4">
            {movies.map((movie, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] px-2">
                <MovieCard movie={movie} />
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

  const MovieCard = ({ movie }: { movie: Movie }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      <div className="relative aspect-[2/3] overflow-hidden">
        <ImageWithFallback
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-lg mb-2 line-clamp-1">{movie.title}</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <div>Director: {movie.director}</div>
          <div className="flex items-center justify-between">
            <span>{movie.country}, {movie.year}</span>
            <span>{movie.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const CategorySection = ({ title, movies, icon }: { title: string; movies: Movie[]; icon: string }) => (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="text-4xl">{icon}</div>
        <h3 className="text-3xl">{title}</h3>
      </div>
      <MovieCarousel movies={movies} />
    </div>
  );

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-emerald-600 uppercase tracking-wider">Selección Oficial</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-8">Películas del Festival</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre las películas que forman parte de nuestra programación 2025
          </p>
        </div>

        <CategorySection title="Cine Ambiental " movies={ambientalMovies} icon="🎭" />
        <CategorySection title="Cine Etnico" movies={EtnicoMovies} icon="🌿" />
        <CategorySection title="Cine Infantil " movies={InfantilMovies} icon="🌊" />
      </div>
    </section>
  );
}