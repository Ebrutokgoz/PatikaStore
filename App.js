import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, FlatList, View, SafeAreaView, TextInput } from "react-native";
import Card from "./src/Card/Card";
import data from "./data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput style={styles.input} placeholder="Ara..." />
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <Card item={item}></Card>}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    width: "100%",
    fontWeight: "800",
    color: "purple",
    textAlign: "left",
    borderWidth: 2,
    borderColor: "white",
    margin: 4,
  },
  input: {
    fontSize: 16,
    textAlign: "left",
    backgroundColor: "lightgrey",
    height: 40,
    width: "100%",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});
