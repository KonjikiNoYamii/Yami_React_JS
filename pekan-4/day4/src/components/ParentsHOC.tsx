import React, { useState, useEffect, FC } from "react";
import { withLoading } from "./withLoading";
import DataList from "./DataList";

const DataListWithLoading = withLoading(DataList);

const ParentsHOC: FC = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setItems(["Apel", "Pisang", "Jeruk"]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      <h2>Custom Higher-Order Component</h2>
      <p>Contoh HOC untuk menambahkan efek loading.</p>

      <DataListWithLoading isLoading={loading} data={items} />
    </div>
  );
};
export default ParentsHOC
