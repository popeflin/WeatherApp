import { Text } from "react-native";
import { s } from "./TextDisplay.style";
export function TextDisplay({ suhu, unit }) {
  return (
    <Text style={s.textDisplay}>
      {suhu} &deg;{unit}
    </Text>
  );
}
