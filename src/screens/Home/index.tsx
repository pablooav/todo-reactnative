import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Task } from "../../components/Task";

interface ITask {
  description: string;
  done: boolean;
}

export function Home() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [createdCount, setCreatedCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);

  function handleAddTask(taskInput: string) {
    if (!taskInput) return;
    const alreadyExists = tasks.find(item => item.description === taskInput);
    if (alreadyExists) return Alert.alert('Tarefa já cadastrada');
  
    const task: ITask = {
      description: taskInput,
      done: false
    };
  
    setTasks([...tasks, task]);
    setTaskInput('');
    setCreatedCount(createdCount + 1);
  }

  function handleRemoveTask(task: string) {
    const newTasks = tasks.filter(item => item.description !== task);
    const isDone = tasks.find(item => item.description === task && item.done);
    
    setTasks(newTasks);
    setCreatedCount(createdCount - 1);
    if(isDone) setDoneCount(doneCount - 1);
    
  }

  function handleToggleTask(description: string) {
    const newTasks = tasks.map(item => {
      if (item.description === description) {
        item.done = !item.done;
      }
      return item;
    });
    const doneCount = newTasks.filter(item => item.done).length;

    setTasks(newTasks);
    setDoneCount(doneCount);
    
  }

  return (
    <>
      <View style={styles.header}>
        <Image source={require('../../../assets/Logo.png')} />
      </View>
      <View style={styles.body}>
        <View style={styles.form}>
          <TextInput 
            style={styles.input} 
            placeholder="Adicionar uma nova tarefa" 
            placeholderTextColor="#6b6b6b"
            value={taskInput}
            onChangeText={setTaskInput}
          />

          <TouchableOpacity 
            style={styles.button}
            onPress={() => handleAddTask(taskInput)}  
          >
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tasks}>
          <View style={styles.info}>
            <Text style={styles.created}>
              Criadas
            </Text>
            <View style={styles.counter}>
              <Text style={styles.conterText}>{createdCount}</Text>
            </View>
           
          </View>
          <View style={styles.info}>
            <Text style={styles.done}>
              Concluídas
            </Text>
            <View style={styles.counter}>
              <Text style={styles.conterText}>{doneCount}</Text>
            </View>
          </View>
        </View>

        <View style={styles.list}>

          <FlatList
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Task 
                description={item.description}
                onRemove={() => handleRemoveTask(item.description)}
                onToggle={() => handleToggleTask(item.description)}
                checked={item.done}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.empty}>
                <Image source={require('../../../assets/Clipboard.png')} />
                <Text style={styles.emptyTextTitle}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.emptyText}>Crie tarefas e organize seus itens a fazer</Text>
              </View>
              
            )}
          />

        </View>

      </View>
    </>
  );
}