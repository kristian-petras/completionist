import Roact from "@rbxts/roact";

interface ActionButtonProps {
    text: string;
    onClick: () => void;
    size?: UDim2;
    position?: UDim2;
    backgroundColor?: Color3;
    textColor?: Color3;
    enabled?: boolean;
}

export function ActionButton(props: ActionButtonProps): Roact.Element {
    const {
        text,
        onClick,
        size = new UDim2(0, 200, 0, 50),
        position = new UDim2(0, 0, 0, 0),
        backgroundColor = new Color3(0.2, 0.4, 0.8),
        textColor = new Color3(1, 1, 1),
        enabled = true,
    } = props;

    return Roact.createElement(
        "TextButton",
        {
            Size: size,
            Position: position,
            Text: text,
            TextColor3: textColor,
            TextSize: 18,
            TextScaled: true,
            Font: Enum.Font.GothamBold,
            BackgroundColor3: backgroundColor,
            BorderSizePixel: 0,
            Active: enabled,
            [Roact.Event.MouseButton1Click]: () => {
                if (enabled) {
                    onClick();
                }
            },
            [Roact.Event.MouseEnter]: (rbx: TextButton) => {
                if (enabled) {
                    rbx.BackgroundColor3 = new Color3(
                        math.min(backgroundColor.R * 1.2, 1),
                        math.min(backgroundColor.G * 1.2, 1),
                        math.min(backgroundColor.B * 1.2, 1),
                    );
                }
            },
            [Roact.Event.MouseLeave]: (rbx: TextButton) => {
                rbx.BackgroundColor3 = backgroundColor;
            },
        },
        {
            Corner: Roact.createElement("UICorner", {
                CornerRadius: new UDim(0, 8),
            }),
            Stroke: Roact.createElement("UIStroke", {
                Color: new Color3(0, 0, 0),
                Transparency: 0.8,
                Thickness: 2,
            }),
        },
    );
}
