import Poster from "../assets/Poster_2025.png";
import Programacion from "../assets/Programacion-Festival-Sierra-Nevada.pdf";
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

      {/* Green gradient overlay (CLAVE PARA LEGIBILIDAD) */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/80 to-teal-900/85" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text column */}
          <div>
            <span className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm tracking-wide mb-8">
              Fundación Cine Jaguar
            </span>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
              Festival de Cine <br />
              <span className="text-emerald-300">
                Sierra Nevada
              </span>
            </h1>

            <p className="text-lg md:text-xl text-emerald-100 leading-relaxed mb-6 max-w-xl">
              Una celebración donde el cine, la montaña y las culturas originarias se encuentran.
              Del <strong>11 al 16 de diciembre</strong>, Minca será nuevamente el punto de encuentro
              para historias que inspiran y protegen la vida.
            </p>

            <p className="text-lg md:text-xl text-emerald-100 leading-relaxed mb-10 max-w-xl">
              Cada proyección es un puente entre culturas y un llamado a cuidar nuestra casa común.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={Programacion}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-emerald-900 px-8 py-3 rounded-full font-medium hover:bg-emerald-50 transition-colors"
              >
                Ver programación
              </a>

              <a
              href= "https://youtu.be/6ixJjCYfArY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white/80 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                Video promocional
              </a>
            </div>
          </div>

          {/* Poster column */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <ImageWithFallback
                src={Poster}
                alt="Afiche oficial Festival de Cine Sierra Nevada 2025"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-center">
          <div>
            <div className="text-4xl font-semibold mb-2">3+</div>
            <div className="text-emerald-200 text-sm tracking-wide">
              Años del Festival
            </div>
          </div>
          <div>
            <div className="text-4xl font-semibold mb-2">60+</div>
            <div className="text-emerald-200 text-sm tracking-wide">
              Películas Proyectadas
            </div>
          </div>
          <div>
            <div className="text-4xl font-semibold mb-2">7</div>
            <div className="text-emerald-200 text-sm tracking-wide">
              Etnias Participantes
            </div>
          </div>
          <div>
            <div className="text-4xl font-semibold mb-2">500+</div>
            <div className="text-emerald-200 text-sm tracking-wide">
              Personas Impactadas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
