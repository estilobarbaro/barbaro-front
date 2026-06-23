"use client";

import { useState, useEffect } from "react";

export function useTouch() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Función para verificar si el dispositivo soporta touch
    const checkTouch = () => {
      // Usar matchMedia para detectar si el dispositivo no tiene hover y tiene un puntero grueso (táctil)
      const mql = window.matchMedia("(hover: none) and (pointer: coarse)");
      // También verificamos maxTouchPoints como fallback seguro
      return mql.matches || ("maxTouchPoints" in navigator && navigator.maxTouchPoints > 0);
    };

    // Estado inicial
    setIsTouch(checkTouch());

    // Listener para cambios (ej. si se conecta/desconecta un ratón en un iPad)
    const mql = window.matchMedia("(hover: none) and (pointer: coarse)");
    const handleChange = () => setIsTouch(checkTouch());

    // Fallback para navegadores antiguos que no soportan addEventListener en mql
    if (mql.addEventListener) {
      mql.addEventListener("change", handleChange);
      return () => mql.removeEventListener("change", handleChange);
    } else if (mql.addListener) { // Deprecated form for older Safari
      mql.addListener(handleChange);
      return () => mql.removeListener(handleChange);
    }
  }, []);

  return isTouch;
}
