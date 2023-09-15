import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./ButtonConvert.style";

export function ButtonConvert({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.textButton}>Convert</Text>
    </TouchableOpacity>
  );
}
