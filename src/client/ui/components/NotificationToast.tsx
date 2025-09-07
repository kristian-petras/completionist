import Roact from "@rbxts/roact";
import type { NotificationData } from "../types/PlayerData";

interface NotificationToastProps {
    notification: NotificationData;
    onDismiss: () => void;
}

export function NotificationToast(props: NotificationToastProps): Roact.Element {
    const { notification, onDismiss } = props;

    // Define colors based on notification type
    const getNotificationColor = (notificationType: NotificationData["type"]): Color3 => {
        switch (notificationType) {
            case "success":
                return new Color3(0.2, 0.8, 0.2);
            case "warning":
                return new Color3(1, 0.8, 0.2);
            case "error":
                return new Color3(0.8, 0.2, 0.2);
            default:
                return new Color3(0.2, 0.6, 1);
        }
    };

    const notificationColor = getNotificationColor(notification.type);

    return Roact.createElement(
        "Frame",
        {
            Size: new UDim2(0, 300, 0, 60),
            Position: new UDim2(1, -320, 0, 20),
            BackgroundColor3: new Color3(0.1, 0.1, 0.1),
            BorderSizePixel: 0,
        },
        {
            Corner: Roact.createElement("UICorner", {
                CornerRadius: new UDim(0, 8),
            }),
            Stroke: Roact.createElement("UIStroke", {
                Color: notificationColor,
                Thickness: 2,
            }),
            Padding: Roact.createElement("UIPadding", {
                PaddingTop: new UDim(0, 8),
                PaddingBottom: new UDim(0, 8),
                PaddingLeft: new UDim(0, 12),
                PaddingRight: new UDim(0, 12),
            }),

            // Icon indicator
            Icon: Roact.createElement(
                "Frame",
                {
                    Size: new UDim2(0, 8, 1, 0),
                    Position: new UDim2(0, 0, 0, 0),
                    BackgroundColor3: notificationColor,
                    BorderSizePixel: 0,
                },
                {
                    Corner: Roact.createElement("UICorner", {
                        CornerRadius: new UDim(0, 4),
                    }),
                },
            ),

            // Message text
            Message: Roact.createElement("TextLabel", {
                Size: new UDim2(1, -60, 1, 0),
                Position: new UDim2(0, 20, 0, 0),
                Text: notification.message,
                TextColor3: new Color3(0.9, 0.9, 0.9),
                TextSize: 14,
                Font: Enum.Font.Gotham,
                BackgroundTransparency: 1,
                TextWrapped: true,
                TextXAlignment: Enum.TextXAlignment.Left,
            }),

            // Close button
            CloseButton: Roact.createElement("TextButton", {
                Size: new UDim2(0, 30, 0, 30),
                Position: new UDim2(1, -35, 0.5, -15),
                Text: "×",
                TextColor3: new Color3(0.7, 0.7, 0.7),
                TextSize: 20,
                Font: Enum.Font.GothamBold,
                BackgroundTransparency: 1,
                [Roact.Event.MouseButton1Click]: onDismiss,
                [Roact.Event.MouseEnter]: (rbx: TextButton) => {
                    rbx.TextColor3 = new Color3(1, 1, 1);
                },
                [Roact.Event.MouseLeave]: (rbx: TextButton) => {
                    rbx.TextColor3 = new Color3(0.7, 0.7, 0.7);
                },
            }),
        },
    );
}
