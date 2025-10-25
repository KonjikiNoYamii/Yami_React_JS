import MouseTracker from "./MouseTracker";

const ParentsMouse = () => {
  return (
    <div style={{ margin: "20px", fontFamily: "sans-serif" }}>
      <h2>Render Props Pattern</h2>
      <p>
        Pola ini memungkinkan berbagi logika tanpa HOC. Di sini, kita melacak posisi mouse dengan dua tampilan berbeda.
      </p>

      <MouseTracker
        render={(pos) => (
          <p>
            Posisi kursor: <strong>({pos.x}, {pos.y})</strong>
          </p>
        )}
      />

      <MouseTracker
        render={(pos) => (
          <div
            style={{
              position: "absolute",
              top: pos.y - 15,
              left: pos.x - 15,
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "rgba(0, 150, 255, 0.5)",
              pointerEvents: "none",
            }}
          ></div>
        )}
      />
    </div>
  );
};

export default ParentsMouse;
