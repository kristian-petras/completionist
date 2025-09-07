import Roact from "@rbxts/roact";
import { usePlayerData } from "../hooks/usePlayerData";
import type { NotificationData } from "../types/PlayerData";
import { ActionButton } from "./ActionButton";
import { NotificationToast } from "./NotificationToast";
import { PlayerStats } from "./PlayerStats";

export function GameHUD(): Roact.Element {
    const [playerData, updatePlayerData] = usePlayerData();

    // Mock notification data for demonstration
    const sampleNotification: NotificationData = {
        id: "sample",
        message: "Welcome to Completionist! Start your journey!",
        type: "info",
    };

    const handleRebirthClick = () => {
        print("Rebirth button clicked!");
        // In a real game, this would trigger rebirth logic
        updatePlayerData({
            rebirths: playerData.rebirths + 1,
            level: 1,
            experience: 0,
            coins: playerData.coins + 1000,
        });
    };

    const handleShopClick = () => {
        print("Shop button clicked!");
        // In a real game, this would open the shop
    };

    const handleSettingsClick = () => {
        print("Settings button clicked!");
        // In a real game, this would open settings
    };

    const handleGrindClick = () => {
        print("Grind button clicked!");
        // Simulate gaining experience and coins
        updatePlayerData({
            experience: playerData.experience + 25,
            coins: playerData.coins + 10,
        });
    };

    const handleNotificationDismiss = () => {
        print("Notification dismissed!");
        // In a real implementation, this would remove the notification from state
    };

    return Roact.createElement(
        "Frame",
        {
            Size: new UDim2(1, 0, 1, 0),
            BackgroundTransparency: 1,
        },
        {
            // Player Stats Panel (Top Left)
            PlayerStatsPanel: Roact.createElement(PlayerStats, {
                playerData: playerData,
            }),

            // Action Buttons Container (Bottom Center)
            ActionButtonsContainer: Roact.createElement(
                "Frame",
                {
                    Size: new UDim2(0, 800, 0, 80),
                    Position: new UDim2(0.5, -400, 1, -100),
                    BackgroundTransparency: 1,
                },
                {
                    Layout: Roact.createElement("UIListLayout", {
                        FillDirection: Enum.FillDirection.Horizontal,
                        HorizontalAlignment: Enum.HorizontalAlignment.Center,
                        VerticalAlignment: Enum.VerticalAlignment.Center,
                        Padding: new UDim(0, 20),
                    }),

                    GrindButton: Roact.createElement(ActionButton, {
                        text: "GRIND",
                        onClick: handleGrindClick,
                        backgroundColor: new Color3(0.2, 0.8, 0.2),
                        size: new UDim2(0, 150, 0, 60),
                    }),

                    RebirthButton: Roact.createElement(ActionButton, {
                        text: "REBIRTH",
                        onClick: handleRebirthClick,
                        backgroundColor: new Color3(0.8, 0.2, 0.8),
                        size: new UDim2(0, 150, 0, 60),
                        enabled: playerData.level >= 10, // Example requirement
                    }),

                    ShopButton: Roact.createElement(ActionButton, {
                        text: "SHOP",
                        onClick: handleShopClick,
                        backgroundColor: new Color3(0.8, 0.6, 0.2),
                        size: new UDim2(0, 150, 0, 60),
                    }),

                    SettingsButton: Roact.createElement(ActionButton, {
                        text: "SETTINGS",
                        onClick: handleSettingsClick,
                        backgroundColor: new Color3(0.4, 0.4, 0.4),
                        size: new UDim2(0, 150, 0, 60),
                    }),
                },
            ),

            // Notification Panel (Top Right)
            NotificationPanel: Roact.createElement(
                "Frame",
                {
                    Size: new UDim2(0, 320, 0, 200),
                    Position: new UDim2(1, -340, 0, 20),
                    BackgroundTransparency: 1,
                },
                {
                    Layout: Roact.createElement("UIListLayout", {
                        SortOrder: Enum.SortOrder.LayoutOrder,
                        Padding: new UDim(0, 10),
                    }),

                    // Sample notification
                    SampleNotification: Roact.createElement(NotificationToast, {
                        notification: sampleNotification,
                        onDismiss: handleNotificationDismiss,
                    }),
                },
            ),

            // Game Title (Top Center)
            GameTitle: Roact.createElement("TextLabel", {
                Size: new UDim2(0, 400, 0, 60),
                Position: new UDim2(0.5, -200, 0, 20),
                Text: "COMPLETIONIST",
                TextColor3: new Color3(1, 1, 1),
                TextSize: 32,
                Font: Enum.Font.GothamBold,
                BackgroundTransparency: 1,
                TextStrokeColor3: new Color3(0, 0, 0),
                TextStrokeTransparency: 0.5,
            }),
        },
    );
}
