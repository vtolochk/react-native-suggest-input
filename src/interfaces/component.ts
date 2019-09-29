import { TextInputProps, ViewStyle, ListRenderItem, FlatListProps, LayoutAnimationConfig } from "react-native";

interface SuggestTextInput extends Partial<TextInputProps> {
  style: ViewStyle; 
}

interface SuggestInputProps {
  suggestions: any[];
  hideResults?: boolean;
  flatListStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  renderItem: ListRenderItem<any>;
  textInputProps: SuggestTextInput;
  flatListProps?: Partial<FlatListProps<any>>;
  animationProps?: LayoutAnimationConfig;
}

export default SuggestInputProps;
