interface PartnerItem {
  name: string;
  logo: string;
}

interface PartnerGroup {
  category: string;
  items: PartnerItem[];
}

const partners = [
  {
    category: "Aliados Tucán",
    items: [
      {
        name: "Ecopint",
        logo: new URL(
          "../assets/logos 2025/1_NivelTucan/ecopint.png",
          import.meta.url
        ).href
      },
      {
        name: "La Vicotira Colombia",
        logo: new URL(
          "../assets/logos 2025/1_NivelTucan/editable logos La Vicotira Colombia_Mesa de trabajo 1 copia-08.png",
          import.meta.url
        ).href
      },
      {
        name: "El Caracol",
        logo: new URL(
          "../assets/logos 2025/1_NivelTucan/el caracol minca Eme.png",
          import.meta.url
        ).href
      },
      {
        name: "El Mirador",
        logo: new URL(
          "../assets/logos 2025/1_NivelTucan/el mirador de minca.png",
          import.meta.url
        ).href
      },
      {
        name: "La Miga",
        logo: new URL(
          "../assets/logos 2025/1_NivelTucan/la miga png eme.png",
          import.meta.url
        ).href
      },
      {
        name: "Chapolin",
        logo: new URL(
          "../assets/logos 2025/1_NivelTucan/Logo chapolin.png",
          import.meta.url
        ).href
      },
      {
        name: "Potente",
        logo: new URL(
          "../assets/logos 2025/1_NivelTucan/logo potente blanco y negro positivo.png",
          import.meta.url
        ).href
      },
      {
        name: "Soldeminca",
        logo: new URL(
          "../assets/logos 2025/1_NivelTucan/soldeminca.png",
          import.meta.url
        ).href
      },
      {
        name: "Yao",
        logo: new URL(
          "../assets/logos 2025/1_NivelTucan/yao.png",
          import.meta.url
        ).href
      }
    ]
  },
  {
    category: "Aliados Colibrí",
    items: [
      {
        name: "Dream",
        logo: new URL(
          "../assets/logos 2025/2_NivelColibri/logo dreamer.png",
          import.meta.url
        ).href
      },
      {
        name: "Lynattika",
        logo: new URL(
          "../assets/logos 2025/1_NivelTucan/ecopint.png",
          import.meta.url
        ).href
      },
      {
        name: "Mayasa",
        logo: new URL(
          "../assets/logos 2025/2_NivelColibri/Mayasa_negro_exp - casasviejasfacturas.png",
          import.meta.url
        ).href
      },
      {
        name: "Yaku Tiki",
        logo: new URL(
          "../assets/logos 2025/2_NivelColibri/YAKU TIKI eme.png",
          import.meta.url
        ).href
      }
    ]
  },
  {
    category: "Aliados Oropéndola",
    items: [
      {
        name: "colores de la sierra",
        logo: new URL(
          "../assets/logos 2025/3_NivelCoropendola/3h6M. logo colores de la sierra-3.png",
          import.meta.url
        ).href
      },
      {
        name: "casa taller",
        logo: new URL(
          "../assets/logos 2025/3_NivelCoropendola/casa taller.png",
          import.meta.url
        ).href
      },
      {
        name: "poder mistico",
        logo: new URL(
          "../assets/logos 2025/3_NivelCoropendola/poder mistico.png",
          import.meta.url
        ).href
      },
      {
        name: "Qualitativo",
        logo: new URL(
          "../assets/logos 2025/3_NivelCoropendola/QUALITY.png",
          import.meta.url
        ).href
      },
      {
        name: "Ecopint",
        logo: new URL(
          "../assets/logos 2025/1_NivelTucan/ecopint.png",
          import.meta.url
        ).href
      },
      {
        name: "yurtas colombia",
        logo: new URL(
          "../assets/logos 2025/3_NivelCoropendola/yurtas colombia.png",
          import.meta.url
        ).href
      }
    ]
  },
  {
    category: "Aliados Especiales",
    items: [
      {
        name: "Potente Cine",
        logo: new URL(
          "../assets/logos 2025/4_Nivelespeciales/Imagen 1.png",
          import.meta.url
        ).href
      },
      {
        name: "Junta Directiva Comunal Minca",
        logo: new URL(
          "../assets/logos 2025/4_Nivelespeciales/junta de accion.png",
          import.meta.url
        ).href
      },
      {
        name: "Plaza Numen",
        logo: new URL(
          "../assets/logos 2025/4_Nivelespeciales/plaza numen.png",
          import.meta.url
        ).href
      },
      {
        name: "Sacra",
        logo: new URL(
          "../assets/logos 2025/4_Nivelespeciales/sacra .png",
          import.meta.url
        ).href
      },
      {
        name: "Sonidos Color",
        logo: new URL(
          "../assets/logos 2025/4_Nivelespeciales/sonidoselva-color.png",
          import.meta.url
        ).href
      },
      {
        name: "Telecaribe",
        logo: new URL(
          "../assets/logos 2025/4_Nivelespeciales/telecaribe.png",
          import.meta.url
        ).href
      }
    ]
  }
];


export function Partners() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 uppercase tracking-wider">
            Nuestros Colaboradores
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-8">Aliados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gracias a nuestros aliados que hacen posible este festival
          </p>
        </div>

        {/* Groups */}
        {partners.map((group) => (
          <div key={group.category} className="mb-20">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-emerald-700">
              {group.category}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {group.items.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center justify-center text-center gap-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-20 h-20 object-contain"
                    />
                    <span className="text-gray-700 hover:text-emerald-700 transition-colors">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
