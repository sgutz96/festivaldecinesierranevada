import { useState } from "react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import LogoJaguar from "../assets/logo cine jaguar25.png";
import { motion } from "framer-motion";
import image_d8dcc956a282ec7f045ef02137f5a60f160fe758 from "figma:asset/d8dcc956a282ec7f045ef02137f5a60f160fe758.png";

import { QrModal } from "./QrModal";

export function Contact() {
  const [isQrOpen, setIsQrOpen] = useState(false);

  return (
    <>
      <section className="py-24 md:py-32 bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* INFO */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-8">Contacto</h2>
              <p className="text-xl text-emerald-100 mb-10">
                ¿Tienes preguntas sobre el festival? Estamos aquí para ayudarte.
              </p>

              <div className="space-y-8 mb-12">

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="text-emerald-300" />
                  </div>
                  <div>
                    <div>Email</div>
                    <div className="text-emerald-200">contacto@fecsine.org</div>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone className="text-emerald-300" />
                  </div>
                  <div>
                    <div>Teléfono</div>
                    <div className="text-emerald-200">+57 (5) 420 8000</div>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-emerald-300" />
                  </div>
                  <div>
                    <div>Dirección</div>
                    <div className="text-emerald-200">
                      Santa Marta, Magdalena<br />Colombia
                    </div>
                  </div>
                </div>
              </div>

              {/* SOCIAL */}
              <div className="mb-8">
                <div className="mb-4">Síguenos</div>
                <a
                  href="https://www.instagram.com/festivaldecinesierranevada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-full inline-flex items-center justify-center hover:bg-white/20 transition"
                >
                  <Instagram />
                </a>
              </div>

              <img
                src={LogoJaguar}
                alt="Logo Cine Jaguar"
                className="w-48"
              />
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <h3 className="text-2xl mb-6">Sedes del Festival</h3>

                <div className="mb-6">
                  <MapPin className="inline mr-2 text-emerald-200" />
                  Teatro Principal – Santa Marta
                </div>

                <div className="rounded-xl overflow-hidden mb-6">
                  <ImageWithFallback
                    src={image_d8dcc956a282ec7f045ef02137f5a60f160fe758}
                    alt="Mapa"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* BOTÓN QR */}
                <button
                  onClick={() => setIsQrOpen(true)}
                  className="w-full bg-white text-emerald-900 py-3 rounded-full hover:bg-emerald-50 transition"
                >
                  Quiero ser amigo del festival
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MODAL QR */}
      <QrModal
        isOpen={isQrOpen}
        onClose={() => setIsQrOpen(false)}
      />
    </>
  );
}
