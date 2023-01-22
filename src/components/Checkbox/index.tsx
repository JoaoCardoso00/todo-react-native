import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

import Check from "../../../assets/check.svg";

type CheckBoxProps = {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  onChange?: () => void;
};

export function Checkbox({ isActive, setIsActive, onChange }: CheckBoxProps) {
  function handleChange() {
    onChange && onChange();

    setIsActive(!isActive);
  }

  return (
    <TouchableOpacity
      style={[
        styles.checkBoxContainer,

        isActive
          ? styles.checkBoxContainerActive
          : styles.checkBoxContainerInactive,
      ]}
      onPress={handleChange}
    >
      {isActive && <Check width={20} height={10} />}
    </TouchableOpacity>
  );
}
