import { Image, useColorScheme } from "react-native";

const ThemedLogo = () => {
    const colorScheme = useColorScheme();
    const logo = require("../assets/images/bma-logo.png");

    return <Image source={logo} style={{ width: 100, height: 100 }} />;
};

export default ThemedLogo;
