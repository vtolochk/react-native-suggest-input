import { LayoutAnimation, LayoutAnimationConfig } from "react-native";
// import { IAnimation } from "@global-types";

// const COLLAPSE_ANIMATION: IAnimation = {
const COLLAPSE_ANIMATION = {
  duration: 200,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
};

export default (animationProps?: LayoutAnimationConfig): void => {
  LayoutAnimation.configureNext(animationProps || COLLAPSE_ANIMATION);
};