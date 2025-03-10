import { useState, useEffect } from "react";

const BotonSubir = () => {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      if (window.scrollY > 200) {
        setMostrar(true);
      } else {
        setMostrar(false);
      }
    };

    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  const subirArriba = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    mostrar && (
      <button
        onClick={subirArriba}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 15px",
          fontSize: "16px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ⬆️ Subir
      </button>
    )
  );
};

export default BotonSubir;
