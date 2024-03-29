import { View, Image, Text } from "react-native";
import styles from "./Card.styles";

function Card({ item }) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.productImage}
        source={{
          uri: item.imgURL,
        }}
      />
      <View style={styles.productDetail}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.productInStock}>{item.inStock === false ? "STOKTA YOK" : ""}</Text>
      </View>
    </View>
  );
}

export default Card;
