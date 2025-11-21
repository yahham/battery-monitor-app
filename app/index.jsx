import { StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";

import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import ThemedLogo from "../components/ThemedLogo";
import BatteryStatus from "../components/BatteryStatus";
import Spacer from "../components/Spacer";

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <ThemedLogo />
                <Spacer height={20} />

                <ThemedText style={styles.title} title={true}>
                    Battery Monitor App
                </ThemedText>

                <ThemedText style={styles.subtitle}>
                    Smart battery monitoring for better power efficiency.
                </ThemedText>

                <BatteryStatus />

                <Link href="/about" style={styles.link}>
                    <ThemedText>About Page</ThemedText>
                </Link>
            </ScrollView>
        </ThemedView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
    },
    subtitle: {
        marginTop: 10,
        marginBottom: 20,
        textAlign: "center",
    },
    link: {
        marginVertical: 20,
        borderBottomWidth: 1,
    },
});
