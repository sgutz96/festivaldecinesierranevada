import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FestivalPoster } from "./components/FestivalPoster";
import { MoviesSection } from "./components/MoviesSection";
import { GalleryPress } from "./components/GalleryPress";
import { Partners } from "./components/Partners";
import { Contact } from "./components/Contact";
import FormacionAudiovisual from "./pages/FormacionAudiovisual";
import Galeria from "./pages/Galeria";
import { useState, useEffect } from "react";



export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Detectar cambios en el hash de la URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || "home");
    };

    // Inicializar con el hash actual
    handleHashChange();

    // Escuchar cambios en el hash
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Renderizar página según la ruta
  if (currentPage === "formacion-audiovisual") {
    return <FormacionAudiovisual />;
  }

  if (currentPage === "galeria-completa") {
    return <Galeria />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FestivalPoster />
        <MoviesSection />
        <GalleryPress />
        <Partners />
        <Contact />
      </main>
    </div>
  );
}