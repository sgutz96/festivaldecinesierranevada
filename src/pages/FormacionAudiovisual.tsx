import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { BookOpen, Video, Users, Award, Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";

function HeroFormacion() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwY2FtZXJhJTIwcHJvZHVjdGlvbnxlbnwwfHx8fDE3MzMzMjU2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Formación Audiovisual"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
            Educación y Cultura
          </div>
          <h1 className="text-5xl md:text-6xl mb-8">
            Formación Audiovisual
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-emerald-100 leading-relaxed">
            Desarrollamos programas de formación en cine y audiovisuales para comunidades indígenas y jóvenes realizadores, fortaleciendo sus capacidades narrativas y técnicas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-emerald-900 px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors">
              Ver Talleres
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              Inscríbete
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-4xl mb-2">15+</div>
            <div className="text-emerald-200">Talleres Realizados</div>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-4xl mb-2">200+</div>
            <div className="text-emerald-200">Estudiantes Formados</div>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-4xl mb-2">8</div>
            <div className="text-emerald-200">Comunidades Beneficiadas</div>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-4xl mb-2">25+</div>
            <div className="text-emerald-200">Cortometrajes Producidos</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutFormacion() {
  const programas = [
    {
      icon: <Video size={32} />,
      title: "Taller de Documental Indígena",
      description: "Aprende las técnicas fundamentales del cine documental enfocado en narrativas ancestrales y territoriales.",
      duracion: "6 semanas",
      modalidad: "Presencial",
      nivel: "Básico - Intermedio"
    },
    {
      icon: <BookOpen size={32} />,
      title: "Guion y Narrativa Audiovisual",
      description: "Desarrolla habilidades de escritura creativa para cine, enfocándote en historias culturales y ambientales.",
      duracion: "4 semanas",
      modalidad: "Híbrido",
      nivel: "Todos los niveles"
    },
    {
      icon: <Users size={32} />,
      title: "Producción Comunitaria",
      description: "Aprende a gestionar y producir proyectos audiovisuales desde y para tu comunidad.",
      duracion: "8 semanas",
      modalidad: "Presencial",
      nivel: "Intermedio"
    },
    {
      icon: <Award size={32} />,
      title: "Edición y Postproducción",
      description: "Domina las herramientas digitales para editar y finalizar tus proyectos audiovisuales.",
      duracion: "5 semanas",
      modalidad: "Presencial",
      nivel: "Intermedio - Avanzado"
    }
  ];

  const proximosTalleres = [
    {
      nombre: "Introducción al Cine Documental",
      fecha: "5 de Abril, 2025",
      lugar: "Santa Marta",
      instructor: "Carlos Mendoza",
      cupos: 20
    },
    {
      nombre: "Narrativas Indígenas en el Cine",
      fecha: "20 de Abril, 2025",
      lugar: "Minca",
      instructor: "María Kogui",
      cupos: 15
    },
    {
      nombre: "Producción con Recursos Limitados",
      fecha: "10 de Mayo, 2025",
      lugar: "Santa Marta",
      instructor: "Luis Arhuaco",
      cupos: 18
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Introducción */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-emerald-600 uppercase tracking-wider">Nuestra Misión</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-8">Educación Audiovisual con Enfoque Cultural</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            La Fundación Cine Jaguar cree en el poder transformador de la educación audiovisual. 
            Nuestros programas están diseñados para empoderar a las comunidades indígenas y a 
            jóvenes realizadores, dotándolos de las herramientas técnicas y narrativas para contar 
            sus propias historias.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Trabajamos con metodologías participativas que respetan y valoran los saberes ancestrales, 
            integrándolos con las técnicas contemporáneas del cine y la producción audiovisual.
          </p>
        </div>

        {/* Programas */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl mb-6">Nuestros Programas</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una variedad de talleres y cursos adaptados a diferentes niveles y necesidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programas.map((programa, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center text-white mb-6">
                  {programa.icon}
                </div>
                <h4 className="text-2xl mb-4">{programa.title}</h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {programa.description}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-emerald-600" />
                    <span>Duración: {programa.duracion}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-600" />
                    <span>Modalidad: {programa.modalidad}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-emerald-600" />
                    <span>Nivel: {programa.nivel}</span>
                  </div>
                </div>
                <button className="mt-6 bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors w-full">
                  Más Información
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Próximos Talleres */}
        <div className="bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 text-white rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl mb-4">Próximos Talleres</h3>
            <p className="text-xl text-emerald-100">
              Inscríbete en nuestros talleres programados para 2025
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {proximosTalleres.map((taller, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-xl mb-4">{taller.nombre}</h4>
                <div className="space-y-3 text-emerald-100">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{taller.fecha}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>{taller.lugar}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={18} />
                    <span>Instructor: {taller.instructor}</span>
                  </div>
                  <div className="pt-3 border-t border-white/20">
                    <span className="text-sm">Cupos disponibles: {taller.cupos}</span>
                  </div>
                </div>
                <button className="mt-6 bg-white text-emerald-900 px-6 py-2 rounded-full hover:bg-emerald-50 transition-colors w-full">
                  Inscribirse
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonios */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl mb-6">Historias de Éxito</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conoce las experiencias de quienes han participado en nuestros programas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                nombre: "Ana Wiwa",
                comunidad: "Pueblo Wiwa",
                testimonio: "El taller me permitió contar la historia de mi comunidad desde nuestra propia perspectiva. Ahora puedo documentar nuestras tradiciones para las futuras generaciones."
              },
              {
                nombre: "Pedro Kankuamo",
                comunidad: "Pueblo Kankuamo",
                testimonio: "Aprendí no solo técnicas de filmación, sino también a valorar nuestras narrativas ancestrales como fuente de creación audiovisual."
              },
              {
                nombre: "Laura Ramírez",
                comunidad: "Realizadora Independiente",
                testimonio: "Los talleres de la Fundación Cine Jaguar fueron fundamentales en mi formación. Hoy trabajo en proyectos que visibilizan la diversidad cultural de Colombia."
              }
            ].map((testimonio, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl text-emerald-600 mb-4">"</div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonio.testimonio}
                </p>
                <div className="border-t pt-4">
                  <div className="text-gray-900">{testimonio.nombre}</div>
                  <div className="text-sm text-gray-600">{testimonio.comunidad}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FormacionAudiovisual() {
  return (
    <div>
      <Header />
      <HeroFormacion />
      <AboutFormacion />
      <Contact />
    </div>
  );
}
