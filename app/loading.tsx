"use client";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const loading = () => {
  return (
    <ClipLoader
      size={150}
      color="#3b82f6"
      loading={true}
      cssOverride={override}
    />
  );
};

export default loading;
