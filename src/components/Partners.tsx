export function Partners() {
  const partners = [
    "Ministerio de Cultura",
    "Alcaldía de Santa Marta",
    "Universidad del Magdalena",
    "Proimágenes Colombia",
    "Parques Nacionales",
    "Fundación Sierra Nevada",
    "Instituto Distrital de Cultura",
    "Cámara de Comercio",
    "Red de Cine Indígena",
    "Festival de Cine Ambiental",
    "Organización Gonawindúa Tayrona",
    "Confederación Indígena Tayrona"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-emerald-600 uppercase tracking-wider">Nuestros Colaboradores</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">Aliados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gracias a nuestros aliados que hacen posible este festival
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 flex items-center justify-center text-center hover:bg-emerald-50 hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <div className="text-gray-700 group-hover:text-emerald-700 transition-colors">
                  {partner}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">¿Quieres ser aliado del festival?</p>
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors">
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
}
