import { View, Text, TouchableOpacity, Image } from "react-native";
import { CheckBox } from "react-native-elements";
import { styles } from "./styles";

interface ITaskProps {
  description: string;
  onRemove: () => void;
  onToggle: () => void;
  checked: boolean;
}

export function Task({description, onRemove, onToggle, checked}: ITaskProps) {
  return (
    <View style={styles.container}>
       <CheckBox 
        checkedColor="#5E60CE"
        uncheckedColor="#4EA8DE"
        checkedIcon="check-circle"
        uncheckedIcon="circle-o"     
        size={25}
        onPress={onToggle}
        checked={checked}
      />

      <Text style={[styles.text, checked && styles.taskDone]}>
        {description}
      </Text>

      <TouchableOpacity 
        style={styles.trash} 
        onPress={onRemove}
      >
        <Image source={require('../../../assets/trash.png')} style={styles.trashImage} />
      </TouchableOpacity>
    </View>
  );
}