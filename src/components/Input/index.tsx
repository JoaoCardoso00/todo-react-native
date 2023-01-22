import { useState } from "react";
import { TextInput } from "react-native";

import { styles } from "./styles";

type InputProps = {
  value?: string;
  onTextChange?: (newText: string) => void;
};

export function Input({ value, onTextChange }: InputProps) {
  const [isOnFocus, setIsOnFocus] = useState(false);

  return (
    <TextInput
      value={value && value}
      onChangeText={(text) => onTextChange && onTextChange(text)}
      onFocus={() => setIsOnFocus(true)}
      onBlur={() => setIsOnFocus(false)}
      style={[styles.Input, isOnFocus && styles.InputFocus]}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor="#808080"
    />
  );
}
