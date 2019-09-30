import React from "react";
import {
  View,
  Text,
  FlatList,
  ViewStyle,
  TextInput,
  StyleSheet,
  UIManager,
} from "react-native";

import DEVICE from "../helpers/device";
import animate from "../helpers/animation";

import SuggestInputProps from "../interfaces/component";

import suggestInputStyle from "./styles";

class SuggestInput extends React.PureComponent<SuggestInputProps> {
  
  static defaultSuggestions = ["Please", "add", "some", "suggestions"];
  static defaultRenderItem = ({ item } : { item: string}): JSX.Element => (
    <Text style={suggestInputStyle.text}>{item}</Text>
  )

  static defaultProps = {
    renderItem: SuggestInput.defaultRenderItem,
    suggestions: SuggestInput.defaultSuggestions,
  };

  private keyExtractor = (_: any, key: number): string => String(key);
  private isSuggestions = (): boolean => Boolean(
    this.props.suggestions && this.props.textInputProps.value,
  )

  public componentDidUpdate(): void {
    if (this.isSuggestions()) {
      animate(this.props.animationProps);
    }
  }

  public render(): JSX.Element {
    const {
      hideResults,
      suggestions,
      renderItem,
      flatListStyle,
      flatListProps,
      textInputProps,
      containerStyle,
    } = this.props;

    const isSuggestions: boolean = this.isSuggestions() && !hideResults; 

    const listStyle: ViewStyle = StyleSheet.flatten([
      suggestInputStyle.flatList,
      DEVICE.isAndroid && suggestInputStyle.zIndex,
      flatListStyle,
      { top: textInputProps.style.height },
    ]);

    const viewStyle: ViewStyle = StyleSheet.flatten([
      DEVICE.isIOS && suggestInputStyle.zIndex,
      containerStyle,
    ]);

    return (
      <View style={viewStyle}>
        <TextInput {...textInputProps} />
        {isSuggestions && (
          <FlatList
            style={listStyle}
            data={suggestions}
            renderItem={renderItem}
            keyExtractor={this.keyExtractor}
            {...flatListProps}
          />
        )}
      </View>
    );
  }
}


export default SuggestInput;
