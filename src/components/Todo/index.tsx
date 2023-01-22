import { Dispatch, SetStateAction, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Checkbox } from "../Checkbox";

import Trash from "../../../assets/trash.svg";
import { styles } from "./styles";

export type TodoProps = {
  title: string;
  completedTodosCount: number;
  setCompletedTodosCount: Dispatch<SetStateAction<number>>;
  onDelete: (title: string) => void;
};

export function Todo({
  title,
  onDelete,
  completedTodosCount,
  setCompletedTodosCount,
}: TodoProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleCompletePressEvent() {
    isCompleted
      ? setCompletedTodosCount(completedTodosCount - 1)
      : setCompletedTodosCount(completedTodosCount + 1);
  }

  function handleDeletePressEvent() {
    isCompleted && setCompletedTodosCount(completedTodosCount - 1);
    onDelete(title);
  }

  return (
    <View style={styles.todoContainer}>
      <Checkbox
        isActive={isCompleted}
        setIsActive={setIsCompleted}
        onChange={handleCompletePressEvent}
      />
      <Text
        style={[styles.todoTitle, isCompleted && styles.completedTodoTitle]}
      >
        {title}
      </Text>
      <TouchableOpacity style={styles.trash} onPress={handleDeletePressEvent}>
        <Trash width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
}
