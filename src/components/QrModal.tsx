import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import QR from "../assets/QR.png";

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QrModal({ isOpen, onClose }: QrModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Cerrar con ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Click fuera del modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="popup  fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* MODAL */}
          <motion.div
            ref={modalRef}
            className="relative bg-white rounded-3xl w-100 shadow-2xl mx-4 p-8"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              aria-label="Cerrar modal"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
            >
              <X size={22} />
            </button>

            {/* CONTENIDO */}
            <div className="flex flex-col items-center text-center gap-5">
              <h2 className="text-2xl font-semibold text-gray-800">
                Apoya el Festival
              </h2>

              <p className="text-sm text-gray-600 max-w-xs">
                Escanea el código QR y conviértete en amigo del festival
              </p>

              <img
                src={QR}
                alt="QR Festival"
                className="w-100 object-contain"
              />

              <p className="text-xs text-gray-500">
                Tu apoyo hace posible este evento 💚
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
