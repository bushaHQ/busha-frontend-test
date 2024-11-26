import React from "react";

function RenderIf({
  condition,
  children,
}: {
  condition: boolean;
  children: React.ReactNode;
}) {
  if (condition) {
    return <>{children}</>;
  }
  return null;
}

export default RenderIf;
