import { StyleSheet, View } from "react-native";
import ThemedCard from "./ThemedCard";
import ThemedText from "./ThemedText";
import { useBatteryMonitor } from "../hooks/useBatteryMonitor";
import { Colors } from "../constants/Colors";

const BatteryStatus = () => {
    const { batteryLevel, isCharging, isLowBattery } = useBatteryMonitor();

    const getBatteryIcon = () => {
        if (isCharging) return "⚡";
        if (isLowBattery) return "🪫";
        return "🔋";
    };

    const getBatteryMessage = () => {
        if (batteryLevel === null) return "Loading battery info...";
        if (isCharging) return "Phone is charging";
        if (isLowBattery) return "Low battery!";
        return `Battery level: ${batteryLevel}%`;
    };

    const getStatusColor = () => {
        if (isCharging) return Colors.primary;
        if (isLowBattery) return Colors.warning;
        return null;
    };

    return (
        <ThemedCard style={styles.container}>
            <View style={styles.iconContainer}>
                <ThemedText style={styles.icon}>{getBatteryIcon()}</ThemedText>
            </View>

            <ThemedText
                style={[
                    styles.message,
                    getStatusColor() && { color: getStatusColor() },
                ]}
                title={true}
            >
                {getBatteryMessage()}
            </ThemedText>

            {batteryLevel !== null && (
                <View style={styles.progressBarContainer}>
                    <View
                        style={[
                            styles.progressBar,
                            {
                                width: `${batteryLevel}%`,
                                backgroundColor: isLowBattery
                                    ? Colors.warning
                                    : isCharging
                                    ? Colors.primary
                                    : "#4caf50",
                            },
                        ]}
                    />
                </View>
            )}
        </ThemedCard>
    );
};

export default BatteryStatus;

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignItems: "center",
        marginVertical: 20,
    },
    iconContainer: {
        marginBottom: 10,
    },
    icon: {
        fontSize: 48,
    },
    message: {
        fontSize: 16,
        marginBottom: 15,
        textAlign: "center",
    },
    progressBarContainer: {
        width: "100%",
        height: 8,
        backgroundColor: "#e0e0e0",
        borderRadius: 4,
        overflow: "hidden",
    },
    progressBar: {
        height: "100%",
        borderRadius: 4,
    },
});
