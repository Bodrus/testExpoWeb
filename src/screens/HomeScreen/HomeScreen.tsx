import React from "react";

import { HomeContent } from "./HomeContent";
import CustomLoader from "../../components/CustomLoader";
import { ThemeContext } from "../../context/ThemeContext";

const HomeScreen = () => {
  const { loading } = React.useContext(ThemeContext);

  return (
    <>
      {loading && <CustomLoader />}
      {!loading && <HomeContent />}
    </>
  );
};

export default HomeScreen;
