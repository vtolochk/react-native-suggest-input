import { Dimensions, Platform, StatusBar} from "react-native";

import { IDevice } from "../interfaces/device";

const isIOS: boolean = Platform.OS === "ios";

// const DEVICE_WIDTH: number = Dimensions.get("window").width;

// const DEVICE_HEIGHT: number = Dimensions.get("window").height;

const DEVICE: IDevice = {
  isIOS,
  isAndroid: !isIOS,
  // width: ~~DEVICE_WIDTH,
  // height: ~~DEVICE_HEIGHT,
};

export default DEVICE;
