export default function CharacterList({ data }) {
  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
      gap: "15px", 
      padding: "0 20px" 
    }}>
      {data.map((char) => (
        <div 
          key={char.id} 
          style={{ 
            border: "1px solid #0077cc", 
            borderRadius: "8px", 
            padding: "10px", 
            textAlign: "center",
            backgroundColor: "#e0f7ff"
          }}
        >
          <img src={char.image} alt={char.name} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "50%" }} />
          <p style={{ marginTop: "8px", fontWeight: "500", color: "#0077cc" }}>{char.name}</p>
        </div>
      ))}
    </div>
  );
}
