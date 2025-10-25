import React, { useState, FC } from "react";

interface Position {
  x: number;
  y: number;
}

interface MouseTrackerProps {
  render: (position: Position) => React.ReactNode;
}

const MouseTracker: FC<MouseTrackerProps> = ({ render }) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      style={{
        height: "250px",
        border: "2px dashed #aaa",
        borderRadius: "10px",
        margin: "10px 0",
        position: "relative",
        textAlign: "center",
      }}
      onMouseMove={handleMouseMove}
    >
      <p>Gerakkan mouse di dalam kotak ini</p>
      {render(position)}
    </div>
  );
};

export default MouseTracker;
