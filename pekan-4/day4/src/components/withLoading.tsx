import React, { FC, ComponentType } from "react";

interface WithLoadingProps {
  isLoading: boolean;
}

export function withLoading<P extends object>(WrappedComponent: ComponentType<P>) {
  const ComponentWithLoading: FC<P & WithLoadingProps> = ({ isLoading, ...props }) => {
    if (isLoading) {
      return (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <p>⏳ Sedang memuat data...</p>
        </div>
      );
    }
    return <WrappedComponent {...(props as P)} />;
  };

  return ComponentWithLoading;
}
