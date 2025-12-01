import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
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
  const ethnicMovies: Movie[] = [
    {
      title: "Voces Ancestrales",
      director: "María Kogui",
      country: "Colombia",
      year: 2024,
      duration: "85 min",
      image: "https://images.unsplash.com/photo-1763733594402-051a9721ff14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwY3VsdHVyZSUyMGZlc3RpdmFsfGVufDF8fHx8MTc2NDU1MTk2OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Guardianes de la Sierra",
      director: "José Arhuaco",
      country: "Colombia",
      year: 2024,
      duration: "72 min",
      image: "https://images.unsplash.com/photo-1627328607888-536d01934a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWVycmElMjBuZXZhZGElMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY0NTUxOTY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Tejiendo Memoria",
      director: "Ana Wiwa",
      country: "Colombia",
      year: 2023,
      duration: "90 min",
      image: "https://images.unsplash.com/photo-1702890764798-eda71e941da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZmVzdGl2YWwlMjBjaW5lbWF8ZW58MXx8fHwxNzY0NTUxOTY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Palabras Sagradas",
      director: "Pedro Kankuamo",
      country: "Colombia",
      year: 2024,
      duration: "68 min",
      image: "https://images.unsplash.com/photo-1659431245554-e66588fbd196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmb3Jlc3QlMjB0cm9waWNhbHxlbnwxfHx8fDE3NjQ1NTE5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const environmentalMovies: Movie[] = [
    {
      title: "Río de Vida",
      director: "Carlos Mendoza",
      country: "Colombia",
      year: 2024,
      duration: "95 min",
      image: "https://images.unsplash.com/photo-1659431245554-e66588fbd196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmb3Jlc3QlMjB0cm9waWNhbHxlbnwxfHx8fDE3NjQ1NTE5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Corazón de la Selva",
      director: "Laura Ramírez",
      country: "Colombia",
      year: 2023,
      duration: "88 min",
      image: "https://images.unsplash.com/photo-1728557349552-c1660fbdff7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWd1YXIlMjB3aWxkbGlmZXxlbnwxfHx8fDE3NjQ1MDgwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "El Último Bosque",
      director: "Diana Torres",
      country: "Colombia",
      year: 2024,
      duration: "102 min",
      image: "https://images.unsplash.com/photo-1627328607888-536d01934a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWVycmElMjBuZXZhZGElMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY0NTUxOTY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Agua Sagrada",
      director: "Miguel Ángel Pérez",
      country: "Colombia",
      year: 2024,
      duration: "75 min",
      image: "https://images.unsplash.com/photo-1763733594402-051a9721ff14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwY3VsdHVyZSUyMGZlc3RpdmFsfGVufDF8fHx8MTc2NDU1MTk2OHww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const caribbeanMovies: Movie[] = [
    {
      title: "Mareas del Caribe",
      director: "Roberto Núñez",
      country: "Colombia",
      year: 2024,
      duration: "80 min",
      image: "https://images.unsplash.com/photo-1754380578509-7a0fbe72ac4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBiZWFjaCUyMGNvbG9tYmlhfGVufDF8fHx8MTc2NDU1MTk3MHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Ritmos de la Costa",
      director: "Sofía Castro",
      country: "Colombia",
      year: 2023,
      duration: "92 min",
      image: "https://images.unsplash.com/photo-1702890764798-eda71e941da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZmVzdGl2YWwlMjBjaW5lbWF8ZW58MXx8fHwxNzY0NTUxOTY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Historias del Mar",
      director: "Luis Villanueva",
      country: "Colombia",
      year: 2024,
      duration: "78 min",
      image: "https://images.unsplash.com/photo-1754380578509-7a0fbe72ac4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBiZWFjaCUyMGNvbG9tYmlhfGVufDF8fHx8MTc2NDU1MTk3MHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Cantos Vallenatos",
      director: "Andrea Martínez",
      country: "Colombia",
      year: 2024,
      duration: "86 min",
      image: "https://images.unsplash.com/photo-1763733594402-051a9721ff14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwY3VsdHVyZSUyMGZlc3RpdmFsfGVufDF8fHx8MTc2NDU1MTk2OHww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

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
        <div className="overflow-hidden" ref={emblaRef}>
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
          <button className="bg-white text-emerald-600 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Play size={24} fill="currentColor" />
          </button>
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-600 uppercase tracking-wider">Selección Oficial</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">Películas del Festival</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las películas que forman parte de nuestra programación 2025
          </p>
        </div>

        <CategorySection title="Cine Étnico" movies={ethnicMovies} icon="🎭" />
        <CategorySection title="Cine Ambiental" movies={environmentalMovies} icon="🌿" />
        <CategorySection title="Cine Caribe" movies={caribbeanMovies} icon="🌊" />
        <CategorySection title="Cine Colombiano" movies={colombianMovies} icon="🇨🇴" />
      </div>
    </section>
  );
}