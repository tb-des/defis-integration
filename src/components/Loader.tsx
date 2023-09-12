import Lottie from "lottie-react";
import LottieLoader from "@/assets/lottie/loader.json";

const Loader = () => {
  return (
    <Lottie
      animationData={LottieLoader}
      loop
      autoplay
      style={{ height: "200px", width: "200px" }}
    />
  );
};

export default Loader;
