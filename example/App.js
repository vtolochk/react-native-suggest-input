import React, {useState} from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";

import SuggestInput from "react-native-suggest-input";

const sugg = [
  "some suggestion",
  "another one",
  "come on",
  "ahahaafdfdsfdsfsdfdsfsdfsfdsfsfdsfsfsfshtheend",
  "a",
  "aaaa",
  "AAAAA",
  "ahahaah",
  "a",
  "aaaa",
  "AAAAA",
  "ahahaah",
  "a",
  "aaaa",
  "AAAAA",
  "ahahaah",
  "a",
  "aaaa",
  "AAAAA",
  "ahahaah",
  "a",
  "aaaa",
  "AAAAA",
  "ahahaah",
  "a",
  "aaaa",
  "AAAAA",
  "ahahaah",
  "a",
  "aaaa",
  "AAAAA",
  "ahahaah",
  "hello",
  "TATA",
  "this",
  "is",
  "suggestions",
  "lala",
  "ZAZA",
  "zaza",
  "z",
  "h",
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
  const sug = computeSuggestions(sugg);

  return (
    <View style={styles.container}>
      <SuggestInput
        flatListStyle={{width: 200, maxHeight: 200, flex: 1}}
        textInputProps={textInputProps}
        suggestions={sug}
        hideResults={sug.length === 1 && sug[0] === value}
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
    backgroundColor: "red",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    paddingTop: 200,
    alignItems: "center",
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
