import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/daily_task");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.whole_container}>
      <View style={styles.top_container}>
        <Text style = {styles.title}>TO DO LIST</Text>
      </View>
      <View style={styles.mid_container}>
        <Text style = {styles.tar}>GOALS:</Text>
      </View>
      <View style={styles.botL}>
        <Text style = {styles.tar}>1. Good amount of exercise</Text>
      </View>
      <View style={styles.botM}>
        <Text style = {styles.tar}>2. stop being lazy and get to learn stuff</Text>
      </View>
      <View style={styles.botR}>
        <Text style = {styles.tar}>3. Won't feel pressure when resting</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  whole_container: {
    flex: 1,
    marginBottom: 150
  },
  top_container:{
    flexDirection: "row",
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  mid_container:{
    flexDirection: "row",
    flex: 1
  },
  botL: {
    flexDirection: "row",
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  botM: {
    flexDirection: "row",
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  botR: {
    flexDirection: "row",
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "grey"
  },
  tar: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
});
