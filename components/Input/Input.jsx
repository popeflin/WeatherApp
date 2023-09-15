import { Text, TextInput, View } from "react-native";
import { s } from "./Input.style";

export function Input({ onChange }) {
  return (
    <View style={s.root}>
      <TextInput
        maxLength={3}
        style={s.input}
        placeholder="Masukan Temperature :"
        onChangeText={(text) => onChange(text)}
      />
      <Text style={s.unit}>&deg;C</Text>
    </View>
  );
}
