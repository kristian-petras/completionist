import Roact from "@rbxts/roact";
import { GameHUD } from "./components/GameHUD";

export function App(): Roact.Element {
    return Roact.createElement(
        "ScreenGui",
        {
            Name: "CompletionistUI",
            ResetOnSpawn: false,
            IgnoreGuiInset: false,
        },
        {
            MainContainer: Roact.createElement(GameHUD, {}),
        },
    );
}
