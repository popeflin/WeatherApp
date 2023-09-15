import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Text, View, ImageBackground } from "react-native";
import hotBackground from "./assets/hot_weather.png";
import coldBackground from "./assets/cold_weather.png";
import { Input } from "./components/Input/Input";
import { s } from "./App.style";
import { Button } from "react-native-web";
import { ButtonConvert } from "./components/Button/ButtonConvert";
import { TextDisplay } from "./components/DisplayText/TextDisplay";
import { useState } from "react";

import { convertToFahrenheit, convertToCelcius } from "./utils/temperature";

export default function App() {
  const [input, setInput] = useState(0);

  return (
    <ImageBackground source={hotBackground} style={s.background}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <TextDisplay suhu={convertToFahrenheit(input)} unit="F" />
            <Input onChange={setInput} />
            <ButtonConvert />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
