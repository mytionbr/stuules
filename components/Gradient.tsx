import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import Svg, {
  Defs,
  LinearGradient,
  Polygon,
  Rect,
  Stop,
} from "react-native-svg";
import { images } from "../constants";
import { COLORS, SIZES } from "../constants/theme";
import styles from "../styles";

const Background = require("../assets/images/gradient.png");

const renderBackground = () => {
  return (
    <Svg height={SIZES.height} width={SIZES.width}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={COLORS.lightBlue} stopOpacity="0.5" />
          <Stop offset="1" stopColor={COLORS.paper} stopOpacity="0.5" />
        </LinearGradient>
      </Defs>
      <Rect height={SIZES.height} width={SIZES.width} fill="url(#grad)" />
    </Svg>
  );
};

const Gradient = ({children}: {children: any}) => {
  return (
    <ImageBackground
      source={images.background}
      style={{
        width: "100%",
        height: "100%",
        flex: 1
      }}
    >
      {children}
      </ImageBackground>

  );
};
export default Gradient;
