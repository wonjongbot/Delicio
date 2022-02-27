import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const foods = [
  {
  title: "Galbi Burger",
  description: "Korean style short ribs as a burger, with side of fries",
  price: "$12.00",
  image:
    "https://s3-media0.fl.yelpcdn.com/bphoto/qoB2LkHfYvdDj8g1jL8LtA/o.jpg",
},
{
  title: "Bi Bim Burger",
  description: "Redefining what it means to be a fusion food with this Korean-American burger",
  price: "$13.00",
  image:
    "https://s3-media0.fl.yelpcdn.com/bphoto/U2PC6eFWFqZasVlzvAVa2Q/o.jpg",
},
{
  title: "Fried Dumplings",
  description: "Classic fried dumplings, with extra love on the side",
  price: "$6.00",
  image:
    "https://s3-media0.fl.yelpcdn.com/bphoto/DnnfTbhujpuASt1JkDujTQ/o.jpg",
},
{
  title: "Umami Burger",
  description: "Revitalize your taste palate with this burger and fries",
  price: "$14.00",
  image:
    "https://s3-media0.fl.yelpcdn.com/bphoto/SHhxmy9M3g4aHMZcAfabbQ/o.jpg",
},
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox 
            iconStyle={{borderColor: 'lightgray', borderRadius: 0, }}
            fillColor= "black"
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            oritentation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}
const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
