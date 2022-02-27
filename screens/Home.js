import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import Restaurantitems, {
  localRestaurants,
} from "../components/Restaurantitems";
import SearchBar from "../components/SearchBar";

const YELP_API_KEY =
  "APDOozHuXa0hO8bNhKNi63jkk7bzKzEPxROjpvEyDAuvDn0NZId6ps71QFuJ2QTCAUAqeYNr9VRAGVorIj-vM6imAGgh9TpPLx79tdKTuYtjW2JpqHAmEADQ7nMaYnYx";

export default function Home() {
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
        <Restaurantitems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
