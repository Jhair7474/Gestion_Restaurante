function AlertButton() {
    const showAlert = () => {
      alert("¡Hola! Esto es una alerta.");
    };
  
    return (
      <button 
        onClick={showAlert} 
        style={{ padding: "10px", margin: "10px", cursor: "pointer" }}
      >
        Mostrar Alerta
      </button>
    );
  }
  
  export default AlertButton;
  