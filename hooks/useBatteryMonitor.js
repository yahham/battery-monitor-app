import { useState, useEffect } from 'react';
import * as Battery from 'expo-battery';

export const useBatteryMonitor = () => {
    const [batteryLevel, setBatteryLevel] = useState(null);
    const [batteryState, setBatteryState] = useState(null);
    const [isCharging, setIsCharging] = useState(false);
    const [isLowBattery, setIsLowBattery] = useState(false);

    useEffect(() => {
        let batteryLevelSubscription;
        let batteryStateSubscription;

        const initializeBatteryMonitoring = async () => {
            try {
                // Get initial battery level
                const level = await Battery.getBatteryLevelAsync();
                const percentage = Math.floor(level * 100);
                setBatteryLevel(percentage);
                setIsLowBattery(percentage < 20);

                // Get initial battery state
                const state = await Battery.getBatteryStateAsync();
                setBatteryState(state);
                setIsCharging(state === Battery.BatteryState.CHARGING);

                // Subscribe to battery level changes
                batteryLevelSubscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
                    const level = Math.floor(batteryLevel * 100);
                    setBatteryLevel(level);
                    setIsLowBattery(level < 20);
                });

                // Subscribe to battery state changes
                batteryStateSubscription = Battery.addBatteryStateListener(({ batteryState }) => {
                    setBatteryState(batteryState);
                    setIsCharging(batteryState === Battery.BatteryState.CHARGING);
                });
            } catch (error) {
                console.error('Error initializing battery monitoring:', error);
            }
        };

        initializeBatteryMonitoring();

        // Cleanup subscriptions on unmount
        return () => {
            if (batteryLevelSubscription) {
                batteryLevelSubscription.remove();
            }
            if (batteryStateSubscription) {
                batteryStateSubscription.remove();
            }
        };
    }, []);

    return {
        batteryLevel,
        batteryState,
        isCharging,
        isLowBattery,
    };
};