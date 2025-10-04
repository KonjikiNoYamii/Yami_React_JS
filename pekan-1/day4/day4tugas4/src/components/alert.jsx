function AlertBox({ type, message }) {
  const baseStyle = {
    padding: "12px",
    borderRadius: "8px",
    margin: "10px 0",
    fontWeight: "bold",
    textAlign: "center",
  };

  let styleVariant = {};

  switch (type) {
    case "success":
      styleVariant = {
        backgroundColor: "#d4edda",
        color: "#155724",
        border: "1px solid #c3e6cb",
      };
      break;
    case "warning":
      styleVariant = {
        backgroundColor: "#fff3cd",
        color: "#856404",
        border: "1px solid #ffeeba",
      };
      break;
    case "error":
      styleVariant = {
        backgroundColor: "#f8d7da",
        color: "#721c24",
        border: "1px solid #f5c6cb",
      };
      break;
    default:
      styleVariant = {
        backgroundColor: "#e2e3e5",
        color: "#383d41",
        border: "1px solid #d6d8db",
      };
  }

  // Gabungkan baseStyle + styleVariant
  const finalStyle = { ...baseStyle, ...styleVariant };

  return <div style={finalStyle}>{message}</div>;
}

export default AlertBox;
