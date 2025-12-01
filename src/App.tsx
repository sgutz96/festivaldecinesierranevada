import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FestivalPoster } from "./components/FestivalPoster";
import { MoviesSection } from "./components/MoviesSection";
import { GalleryPress } from "./components/GalleryPress";
import { Partners } from "./components/Partners";
import { Contact } from "./components/Contact";

export default function App() {
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
