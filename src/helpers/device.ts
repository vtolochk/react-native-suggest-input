import { Platform } from "react-native";

import { IDevice } from "../interfaces/device";

const isIOS: boolean = Platform.OS === "ios";

const DEVICE: IDevice = {
  isIOS,
  isAndroid: !isIOS,
};

export default DEVICE;
