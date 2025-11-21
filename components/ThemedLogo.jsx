import { Image, useColorScheme } from "react-native";

import Logo from "../assets/images/bma-logo.png";

const ThemedLogo = () => {
    const colorScheme = useColorScheme();

    const logo = colorScheme === "dark" ? Logo : Logo;

    return <Image source={logo} />;
};

export default ThemedLogo;
