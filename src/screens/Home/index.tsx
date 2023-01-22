import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { styles } from "./styles";
import { Input } from "../../components/Input";
import { useState } from "react";

import Logo from "../../../assets/Logo.svg";
import Plus from "../../../assets/plus.svg";
import Clipboard from "../../../assets/Clipboard.svg";
import { Todo } from "../../components/Todo";

export function Home() {
  const [newTodoName, setNewTodoName] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const [completedTodosCount, setCompletedTodosCount] = useState(0);

  const isTodosEmpty = todos.length === 0;
  const todoCount = todos.length;

  function handleTodoCreate() {
    setTodos([...todos, newTodoName]);
    setNewTodoName("");
  }

  function handleTodoDelete(title: string) {
    const newTodoArray = todos.filter((todo) => todo !== title);

    setTodos(newTodoArray);
  }

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#0d0d0d" }} />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo width={210} height={40} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <Input
              value={newTodoName}
              onTextChange={(newText) => setNewTodoName(newText)}
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleTodoCreate}
            >
              <Plus width={50} height={18} />
            </TouchableOpacity>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.individualStatsContainer}>
              <Text style={styles.createdStatsLabel}>Criadas</Text>
              <View style={styles.statsNumberContainer}>
                <Text style={styles.statsNumber}>{todoCount}</Text>
              </View>
            </View>
            <View style={styles.individualStatsContainer}>
              <Text style={styles.concludedStatsLabel}>Concluídas</Text>
              <View style={styles.statsNumberContainer}>
                <Text style={styles.statsNumber}>{completedTodosCount}</Text>
              </View>
            </View>
          </View>
          {isTodosEmpty ? (
            <View style={styles.emptyWarningContainer}>
              <Clipboard height={60} width={100} />
              <Text style={styles.emptyWarningBoldLabel}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyWarningRegularLabel}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          ) : (
            <ScrollView
              style={styles.todosContainer}
              contentContainerStyle={styles.scrollViewContainer}
            >
              {todos.map((todo) => (
                <Todo
                  title={todo}
                  onDelete={handleTodoDelete}
                  completedTodosCount={completedTodosCount}
                  setCompletedTodosCount={setCompletedTodosCount}
                />
              ))}
            </ScrollView>
          )}
        </View>
      </View>
      <SafeAreaView style={{ backgroundColor: "#1a1a1a" }} />
    </>
  );
}
