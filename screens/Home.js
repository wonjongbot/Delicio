import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import Restaurantitems, {
  localRestaurants,
} from "../components/home/Restaurantitems";
import SearchBar from "../components/home/SearchBar";

const YELP_API_KEY =
  "APDOozHuXa0hO8bNhKNi63jkk7bzKzEPxROjpvEyDAuvDn0NZId6ps71QFuJ2QTCAUAqeYNr9VRAGVorIj-vM6imAGgh9TpPLx79tdKTuYtjW2JpqHAmEADQ7nMaYnYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [address, setaddress] = useState("306 N Wright St, Urbana, IL 61801");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpurl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${address}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpurl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [address, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar addresshandler={setaddress} />
      </View>
      <ScrollView showsVerticalScrollIndication={false}>
        <Categories />
        <Restaurantitems restaurantData={restaurantData} navigation={navigation}/>
      </ScrollView>
      <Divider width = {1}/>
      <BottomTabs/>
    </SafeAreaView>
  );
}
