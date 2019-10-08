import React, {useState} from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";

import SuggestInput from "react-native-suggest-input";

const suggestions = [
  "long long long long long long long long long long long long long long long long suggestion",
  "London",
  "Kiev",
  "Moscow",
  "Madrid",
  "Oslo",
  "Agra",
  "Aigaleo",
  "Akashi",
  "Abuja",
  "New-York",
  "Amsterdam",
  "Berlin",
  "Bristol",
  "Paris",
  "Perm",
  "Rotterdam",
  "Vienna",
  "Zagreb",
  "Rome",
  "Milan",
  "Seoul",
  "Hong Kong",
  "Santiago",
  "Singapore",
  "Florence",
  "Venice",
  "Barcelona",
  "Copenhagen",
  "Hamburg",
  "Helsinki",
  "Lisbon",
  "Liverpool",
  "Odessa",
  "Porto",
  "Sofia",
  "Lakeland",
  "Lakewood",
  "Lamesa",
  "Landover",
  "Lansdale",
  "Las Vegas",
  "Volgograd"
];

const App = () => {
  const [value, setValue] = useState("");
  const computeSuggestions = values => {
    return values.reduce((accumulator, currentValue) => {
      if (currentValue.toLowerCase().startsWith(value.toLowerCase())) {
        accumulator.push(currentValue);
      }

      return accumulator;
    }, []);
  };

  const textInputProps = {
    value,
    onChangeText: setValue,
    style: {
      width: 200,
      height: 40,
      backgroundColor: "white",
      borderColor: "black",
      borderWidth: 1,
      paddingHorizontal: 2,
    },
  };
  const currentSuggestions = computeSuggestions(suggestions);

  return (
    <View style={styles.container}>
      <SuggestInput
        flatListStyle={{width: 200, maxHeight: 200, flex: 1}}
        textInputProps={textInputProps}
        suggestions={currentSuggestions}
        hideResults={currentSuggestions.length === 1 && currentSuggestions[0] === value}
        flatListProps={{
          keyboardShouldPersistTaps: "handled",
          ListEmptyComponent: <Text>Empty.....</Text>
        }}
        renderItem={obj => {
          return (
            <TouchableOpacity onPress={() => setValue(obj.item)}>
              <Text>{obj.item}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.exampleContainter}>
        <Text>Your awesome component</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 100,
  },
  exampleContainter: {
    marginTop: 25,
    width: 200,
    height: 100,
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20,
  },
});

export default App;
