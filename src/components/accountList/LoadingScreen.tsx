import React from "react";
import { Card } from "../../styles/layout/UtilStyles";
import Loader from "../shared/Loader";

const LoadingScreen: React.FC = () => {
  return (
    <>
      <Card
        flex
        center
        verticalCenter
        // top={5}
      >
        <Loader />
      </Card>
    </>
  );
};

export default LoadingScreen;
