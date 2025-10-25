import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

function LocalPortal() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "300px",
        height: "200px",
        border: "2px solid #ccc",
        padding: "16px",
      }}
    >
      <h3>Portal Lokal </h3>
      <button onClick={() => setOpen(!open)}>
        {open ? "Tutup Modal" : "Buka Modal"}
      </button>

      {open &&
        containerRef.current &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "absolute",
              top: "50px",
              left: "20px",
              backgroundColor: "#fff",
              border: "1px solid #aaa",
              borderRadius: "8px",
              padding: "12px",
              zIndex: 10,
            }}
          >
            Ini portal di dalam komponen
          </div>,
          containerRef.current
        )}
    </div>
  );
}

export default LocalPortal;
