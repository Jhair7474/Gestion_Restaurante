function DarkModeButton({ toggleDarkMode }) {
    return (
      <button 
        onClick={toggleDarkMode} 
        style={{ padding: "10px", margin: "10px", cursor: "pointer" }}
      >
        Activar/Desactivar Modo Oscuro
      </button>
    );
  }
  
  export default DarkModeButton;
  