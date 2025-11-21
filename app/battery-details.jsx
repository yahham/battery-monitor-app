import { StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import * as Battery from "expo-battery";

import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import ThemedCard from "../components/ThemedCard";
import Spacer from "../components/Spacer";
import { useBatteryMonitor } from "../hooks/useBatteryMonitor";

const BatteryDetails = () => {
    const { batteryLevel, batteryState, isCharging, isLowBattery } =
        useBatteryMonitor();

    const getBatteryStateName = (state) => {
        switch (state) {
            case Battery.BatteryState.CHARGING:
                return "Charging";
            case Battery.BatteryState.FULL:
                return "Full";
            case Battery.BatteryState.UNPLUGGED:
                return "Unplugged";
            default:
                return "Unknown";
        }
    };

    const getRecommendations = () => {
        if (isCharging) {
            return [
                "✓ Good time for app updates",
                "✓ Background sync can proceed",
                "✓ High-performance mode available",
            ];
        } else if (isLowBattery) {
            return [
                "⚠ Reduce background activity",
                "⚠ Disable non-essential features",
                "⚠ Consider enabling battery saver",
            ];
        } else {
            return [
                "• Normal power management active",
                "• Monitoring battery consumption",
                "• Ready to optimize if needed",
            ];
        }
    };

    return (
        <ThemedView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <ThemedText style={styles.title} title={true}>
                    Battery Details
                </ThemedText>

                <Spacer height={20} />

                <ThemedCard style={styles.card}>
                    <ThemedText style={styles.cardTitle} title={true}>
                        Current Status
                    </ThemedText>
                    <Spacer height={10} />
                    <ThemedText>Battery Level: {batteryLevel}%</ThemedText>
                    <ThemedText>
                        State: {getBatteryStateName(batteryState)}
                    </ThemedText>
                    <ThemedText>
                        Charging: {isCharging ? "Yes" : "No"}
                    </ThemedText>
                    <ThemedText>
                        Low Battery: {isLowBattery ? "Yes" : "No"}
                    </ThemedText>
                </ThemedCard>

                <ThemedCard style={styles.card}>
                    <ThemedText style={styles.cardTitle} title={true}>
                        Power Recommendations
                    </ThemedText>
                    <Spacer height={10} />
                    {getRecommendations().map((rec, index) => (
                        <ThemedText key={index} style={styles.recommendation}>
                            {rec}
                        </ThemedText>
                    ))}
                </ThemedCard>

                <Link href="/" style={styles.link}>
                    <ThemedText>← Back to Home</ThemedText>
                </Link>
            </ScrollView>
        </ThemedView>
    );
};

export default BatteryDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        padding: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
    },
    card: {
        width: "100%",
        marginVertical: 10,
    },
    cardTitle: {
        fontSize: 18,
        marginBottom: 5,
    },
    recommendation: {
        marginVertical: 3,
    },
    link: {
        marginTop: 20,
        alignSelf: "center",
        borderBottomWidth: 1,
    },
});
