export default function SearchBar({ value, onChange }) {
  return (
    <input 
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search character..."
      style={{
        width: "100%",
        maxWidth: "400px",
        padding: "8px 12px",
        margin: "20px auto",
        display: "block",
        border: "1px solid #0077cc",
        borderRadius: "5px",
        outline: "none",
        fontSize: "16px",
      }}
    />
  );
}
