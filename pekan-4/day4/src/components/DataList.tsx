import React, { FC } from "react";

interface DataListProps {
  data: string[];
}

const DataList: FC<DataListProps> = ({ data }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {data.map((item, index) => (
        <li
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "8px",
            marginBottom: "4px",
            borderRadius: "5px",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DataList;
