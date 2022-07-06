import { StyleSheet, Text, View, TouchableOpacity  } from "react-native";
import React from "react";


const Task = (props) => {
  return (
      <View style={styles.item}>
          <View style={styles.itemLeft}>
              <TouchableOpacity style={styles.square}></TouchableOpacity>
              <Text style={styles.itemText}>{props.text}</Text>
              
          </View>
      <View style={styles.circular}></View>
      </View>
      
    );
    
    
};


const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    itemText: {},
    square: {},

   
   
        
    
});

export default Task;