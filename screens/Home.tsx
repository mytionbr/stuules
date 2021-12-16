import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Svg, {
  Defs,
  Ellipse,
  LinearGradient,
  RadialGradient,
  Rect,
  Stop,
} from "react-native-svg";
import Gradient from "../components/Gradient";
import { images } from "../constants";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import styles from "../styles";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SettingsButton from "../components/SettingsButton";
import Courses from "../components/Courses";

const Home = () => {
  return (
    <ScrollView>
      <View 
        style={{
          ...styles.container,
        }}
        >
        <Gradient>
          <Header />
          <View style={{padding: SIZES.padding}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <SearchBar />
              <SettingsButton />
            </View>
            <Courses />
          </View>
          <View style={styles.spaceBottom} />
        </Gradient>
      </View>
    </ScrollView>
  );
};

export default Home;
