import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import MateiralCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Sakanaya",
    image_url:
      "https://s3.amazonaws.com/secretsaucefiles/photos/images/000/099/723/large/13275401083_7d3fa418dd_c.jpg?1485297155",
    categories: ["Japanese", "Fine Dining"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Fat Sandwich",
    image_url:
      "https://d1ralsognjng37.cloudfront.net/8e2d45e3-a502-492f-ae06-545163bf1714",
    categories: ["Sandwich", "Fast food"],
    price: "$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Chopstix",
    image_url:
      "https://dailyillini.com/wp-content/uploads/2014/12/8174_547d2ee3734c7.imageo.jpg",
    categories: ["Burgers", "Fast food"],
    price: "$",
    reviews: 1244,
    rating: 4,
  },
];

export default function Restaurantitems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {props.restaurantData.map((restaurant, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <RestaruantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaruantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MateiralCommunityIcons name="heart-outline" size={25} color="#ffff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
