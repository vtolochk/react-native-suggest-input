import {
  TextInputProps,
  ViewStyle,
  ListRenderItem,
  FlatListProps,
  LayoutAnimationConfig,
  RegisteredStyle,
  ViewProps
} from "react-native";

interface SuggestTextInput extends Partial<TextInputProps> {
  style: ViewStyle; 
}

interface SuggestInputProps {
  suggestions: any[];
  hideResults?: boolean;
  flatListStyle?: RegisteredStyle<any>;
  containerStyle?: RegisteredStyle<any>;
  renderItem: ListRenderItem<any>;
  textInputProps: SuggestTextInput;
  containerProps: ViewProps;
  flatListProps?: Partial<FlatListProps<any>>;
  animationProps?: LayoutAnimationConfig;
  leftView?: any;
  rightView?: any;
}

export default SuggestInputProps;
