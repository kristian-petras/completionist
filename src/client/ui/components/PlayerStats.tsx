import Roact from "@rbxts/roact";
import type { PlayerData } from "../types/PlayerData";

interface PlayerStatsProps {
    playerData: PlayerData;
}

export function PlayerStats(props: PlayerStatsProps): Roact.Element {
    const { playerData } = props;
    const experiencePercent = playerData.experience / playerData.experienceToNext;

    return Roact.createElement(
        "Frame",
        {
            Size: new UDim2(0, 300, 0, 200),
            Position: new UDim2(0, 20, 0, 20),
            BackgroundColor3: new Color3(0.1, 0.1, 0.1),
            BorderSizePixel: 0,
        },
        {
            Corner: Roact.createElement("UICorner", {
                CornerRadius: new UDim(0, 12),
            }),
            Stroke: Roact.createElement("UIStroke", {
                Color: new Color3(0.3, 0.3, 0.3),
                Thickness: 2,
            }),
            Padding: Roact.createElement("UIPadding", {
                PaddingTop: new UDim(0, 12),
                PaddingBottom: new UDim(0, 12),
                PaddingLeft: new UDim(0, 12),
                PaddingRight: new UDim(0, 12),
            }),
            Layout: Roact.createElement("UIListLayout", {
                SortOrder: Enum.SortOrder.LayoutOrder,
                Padding: new UDim(0, 8),
            }),

            // Title
            Title: Roact.createElement("TextLabel", {
                Size: new UDim2(1, 0, 0, 30),
                Text: "Player Stats",
                TextColor3: new Color3(1, 1, 1),
                TextSize: 20,
                Font: Enum.Font.GothamBold,
                BackgroundTransparency: 1,
                LayoutOrder: 1,
            }),

            // Level
            Level: Roact.createElement("TextLabel", {
                Size: new UDim2(1, 0, 0, 25),
                Text: `Level: ${playerData.level}`,
                TextColor3: new Color3(0.9, 0.9, 0.9),
                TextSize: 16,
                Font: Enum.Font.Gotham,
                BackgroundTransparency: 1,
                LayoutOrder: 2,
            }),

            // Experience Bar
            ExperienceContainer: Roact.createElement(
                "Frame",
                {
                    Size: new UDim2(1, 0, 0, 20),
                    BackgroundColor3: new Color3(0.2, 0.2, 0.2),
                    BorderSizePixel: 0,
                    LayoutOrder: 3,
                },
                {
                    Corner: Roact.createElement("UICorner", {
                        CornerRadius: new UDim(0, 4),
                    }),
                    ExperienceBar: Roact.createElement(
                        "Frame",
                        {
                            Size: new UDim2(experiencePercent, 0, 1, 0),
                            BackgroundColor3: new Color3(0.2, 0.8, 0.2),
                            BorderSizePixel: 0,
                        },
                        {
                            Corner: Roact.createElement("UICorner", {
                                CornerRadius: new UDim(0, 4),
                            }),
                        },
                    ),
                    ExperienceText: Roact.createElement("TextLabel", {
                        Size: new UDim2(1, 0, 1, 0),
                        Text: `${playerData.experience}/${playerData.experienceToNext} XP`,
                        TextColor3: new Color3(1, 1, 1),
                        TextSize: 12,
                        Font: Enum.Font.Gotham,
                        BackgroundTransparency: 1,
                    }),
                },
            ),

            // Coins
            Coins: Roact.createElement("TextLabel", {
                Size: new UDim2(1, 0, 0, 25),
                Text: `Coins: ${playerData.coins}`,
                TextColor3: new Color3(1, 0.8, 0.2),
                TextSize: 16,
                Font: Enum.Font.Gotham,
                BackgroundTransparency: 1,
                LayoutOrder: 4,
            }),

            // Rebirths
            Rebirths: Roact.createElement("TextLabel", {
                Size: new UDim2(1, 0, 0, 25),
                Text: `Rebirths: ${playerData.rebirths}`,
                TextColor3: new Color3(0.8, 0.2, 1),
                TextSize: 16,
                Font: Enum.Font.Gotham,
                BackgroundTransparency: 1,
                LayoutOrder: 5,
            }),

            // Achievements
            Achievements: Roact.createElement("TextLabel", {
                Size: new UDim2(1, 0, 0, 25),
                Text: `Achievements: ${playerData.achievements}/${playerData.totalAchievements}`,
                TextColor3: new Color3(0.2, 0.8, 1),
                TextSize: 16,
                Font: Enum.Font.Gotham,
                BackgroundTransparency: 1,
                LayoutOrder: 6,
            }),
        },
    );
}
