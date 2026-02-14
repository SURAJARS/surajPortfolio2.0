"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-12 px-4 bg-gradient-to-t from-gray-50 to-white border-t border-amber-100">
      <div className="section-container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 mb-4">
            Crafted with care by{" "}
            <span className="text-amber-600 font-semibold">Suraj ARS</span>
          </p>
          <p className="text-sm text-gray-500">
            © {currentYear} Suraj ARS. All rights reserved. | Develop solutions
            that matter.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
