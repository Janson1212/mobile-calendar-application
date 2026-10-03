import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
type tasks = {
  id: number;
  name: string;
  task_type: string;
  detail: string;
  assign_date: string;
  complete_date?: string;
  complete_ratio: number;
  complete: boolean;
}
class task {
  id: number;
  name: string;
  task_type: string;
  detail: string;
  assign_date: string;
  complete_date?: string;
  complete_ratio: number;
  complete: boolean;
}
export default function RootLayout() {
  const router = useRouter();
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [draftName, setDraftName] = useState("Name of Task");
  const [draftDetail, setDraftDetail] = useState("Important notes about the task");
  const [tasks, setTasks] = useState<tasks[]>([]);
  const onPress = () => {
    Alert.alert('Working');
  };

  function openEditor() {
  setIsEditorOpen(true);
  }

  function closeEditor() {
    setIsEditorOpen(false);
  }
  return (
  <View style = {styles.page}>
    <Modal
        visible = {isEditorOpen}
        transparent={true}
        animationType="slide"
        onRequestClose={closeEditor}
    >
      <View style = {styles.modalBackdrop}>
        <View style = {styles.modalCard}>
          <View style = {styles.CardInfo}>
            <View style = {styles.card_title_column}>
              <Text style = {styles.cardTitle}> Task </Text>
            </View>
            <View style = {styles.card_content_column}>
              <Text style = {styles.TaskTitle}> Task Name: </Text>
              <TextInput style = {styles.InputBox} placeholder="Type your name" value={draftName} onChangeText={setDraftName}/>
              <View style = {styles.back_button}>
                <Button onPress = {closeEditor} title = "Close Tab"/>
              </View>
              <View style = {styles.comfirm_button}>
                <Button onPress = {onPress} title = "Set task"/>
              </View>
            </View>
          </View>
        </View>

      </View>

    </Modal>
    <View style = {styles.date_row}>
      <Text style = {styles.date}> 9 / 20</Text>
    </View>
    <View style = {styles.daily_buttons_row}>
      <View style = {styles.hor_buttons_formate}>
        <Button onPress= {onPress} title = "Daily Task"/>
      </View>
      <View style = {styles.hor_buttons_formate}>
        <Button onPress= {onPress} title = "Over view"/>
      </View>
      <View style = {styles.hor_buttons_formate}>
        <Button onPress= {onPress} title = "Status"/>
      </View>
    </View>
    <View style = {styles.main_row}>
      <Text style = {styles.date}>Daily Tasks</Text>
    </View>
    <View style = {styles.add_task_button}>
      <Button onPress={openEditor} title = "Add New Tasks"/>
    </View>
    <View style = {styles.menu_row}>
      <View style = {styles.hor_buttons_formate}>
        <Button onPress= {onPress} title = "Weekly task"/>
      </View>
      <View style = {styles.hor_buttons_formate}>
        <Button onPress= {onPress} title = "Daily task"/>
      </View>
      <View style = {styles.hor_buttons_formate}>
        <Button onPress= {onPress} title = "One time task"/>
      </View>
    </View>
  </View>
  
    );

}

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      marginTop: 40
    },
    date_row: {
      flexDirection: "row",
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    daily_buttons_row: {
      flexDirection: "row",
      flex: 2,
      alignItems: "center",
      justifyContent: "center"
    },
    hor_buttons_formate: {
      flexDirection: "column",
      flex: 1
    },
    main_row: {
      flexDirection: "row",
      flex: 15,
      alignItems: "center",
      justifyContent: "center"
    },
    add_task_button: {
      flexDirection: "row",
      flex: 3,
      alignItems: "center",
      justifyContent: "center"
    },
    menu_row: {
      flexDirection: "row",
      flex: 3,
      alignItems: "center",
      justifyContent: "center"
    },
    taskArea: {
      flex: 1,
    },

    date:{
      fontSize: 30,
      fontWeight: "bold" ,
      color: "black"
    },

    modalBackdrop: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.35)",
      justifyContent: "center",
      padding: 20,
    },
    modalCard: {
      backgroundColor: "white",
      borderRadius: 12,
      padding: 20,
    },
    CardInfo: {
      marginTop: 30,
      marginBottom: 30
    },
    card_title_column: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    card_content_column: {
      flexDirection: "column",
    },
    cardTitle: {
      fontSize: 25,
      fontWeight: "bold",
      marginBottom: 16,
    },
    TaskTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 16,
    },
    InputBox:{
      borderBottomWidth: 1,
      borderBottomColor: "#777",
      paddingVertical: 8,
      marginLeft: 3
    },
    comfirm_button: {
      alignContent: "center",
      alignItems: "center",
      flexDirection: "row",
      flex: 1
    },
    back_button: {
      alignContent: "center",
      alignItems: "center",
      flexDirection: "row",
      flex: 1
    }
  }
  
)