import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const column = 2;
const margin = 16;
const WIDTH = (windowWidth - margin * column * 2) / column;
const HEIGHT = (windowHeight - 140) / 2;

export default StyleSheet.create({
  card: {
    width: WIDTH,
    height: HEIGHT,
    justifyContent: "start",
    alignItems: "center",
    margin: 8,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "lightgrey",
  },
  productImage: {
    width: "100%",
    height: HEIGHT / 1.8,
    borderRadius: 8,
  },
  productDetail: {
    width: "100%",
    margin: 8,
  },
  productTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  productPrice: {
    fontWeight: "bold",
    fontSize: 16,
    color: "grey",
  },
  productInStock: {
    fontWeight: "bold",
    fontSize: 16,
    color: "red",
  },
});
