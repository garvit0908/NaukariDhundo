import React, { useState } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";

//Major Issue flat list me hi hai wo khi bhi nhi chlraaa....

function TabButton({ name, activeTab, onHandleSearchType }) {
  return (
    <TouchableOpacity
    style={styles.btn(name, activeTab)}
    onPress={onHandleSearchType}
  >
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
);
}


const data=["abc","cbd","cvbwdbv"]

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  console.log(tabs)
  return (
    <View style={styles.container}>
      <FlatList
          data={tabs}
          renderItem={({item})=>(
            <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
          
          )}
          contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        keyExtractor={(item) => item}
          horizontal

      />
    </View>
  );
};

export default Tabs;