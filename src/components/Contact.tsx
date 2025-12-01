import image_d8dcc956a282ec7f045ef02137f5a60f160fe758 from 'figma:asset/d8dcc956a282ec7f045ef02137f5a60f160fe758.png';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 text-white bg-[rgba(0,0,0,0)]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Contacto</h2>
            <p className="text-xl text-emerald-100 mb-8">
              ¿Tienes preguntas sobre el festival? Estamos aquí para ayudarte.
            </p>

            <div className="space-y-6 mb-12">
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="text-emerald-300" size={24} />
                </motion.div>
                <div>
                  <div className="mb-1">Email</div>
                  <div className="text-emerald-200">contacto@fecsine.org</div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone className="text-emerald-300" size={24} />
                </motion.div>
                <div>
                  <div className="mb-1">Teléfono</div>
                  <div className="text-emerald-200">+57 (5) 420 8000</div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="text-emerald-300" size={24} />
                </motion.div>
                <div>
                  <div className="mb-1">Dirección</div>
                  <div className="text-emerald-200">
                    Santa Marta, Magdalena<br />
                    Colombia
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="mb-4">Síguenos en redes sociales</div>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Facebook size={24} />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Instagram size={24} />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Twitter size={24} />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Youtube size={24} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl mb-6">Sedes del Festival</h3>
              <div className="space-y-6">
                <motion.div 
                  className="pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <motion.div 
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      animate={{ 
                        y: [0, -5, 0],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <MapPin className="text-emerald-200" size={24} />
                    </motion.div>
                    <div>
                      <div className="mb-1">Teatro Principal</div>
                      <div className="text-sm text-emerald-200">Calle 14 # 3-58, Santa Marta</div>
                    </div>
                  </div>
                </motion.div>

                {/* Map Image */}
                <motion.div 
                  className="rounded-xl overflow-hidden border-2 border-white/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative aspect-video">
                    <ImageWithFallback
                      src={image_d8dcc956a282ec7f045ef02137f5a60f160fe758}
                      alt="Mapa de ubicación"
                      className="w-full h-full object-cover"
                    />
                    <motion.div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      animate={{ 
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                        <MapPin className="text-white" size={28} />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-white/5 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="mb-4">Horarios de Atención</div>
                  <div className="space-y-2 text-sm text-emerald-200">
                    <div className="flex justify-between">
                      <span>Lunes a Viernes:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Durante el Festival:</span>
                      <span>10:00 AM - 10:00 PM</span>
                    </div>
                  </div>
                </motion.div>

                <motion.button 
                  className="w-full bg-white text-emerald-900 px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Quiero ser amigo del festival
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div 
        className="container mx-auto px-4 mt-20 pt-8 border-t border-white/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-emerald-200">
          <div>
            © 2025 Festival de Cine Sierra Nevada - FECSINE. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}