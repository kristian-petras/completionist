import Roact from "@rbxts/roact";
import { makeHello } from "@/shared/module";
import { App } from "./ui/App";

print(makeHello("main.client.ts"));

// Wait for the game to fully load
const Players = game.GetService("Players");
const LocalPlayer = Players.LocalPlayer;

// Wait for PlayerGui to be available
const playerGui = LocalPlayer.WaitForChild("PlayerGui") as PlayerGui;

// Mount the Roact UI
const appElement = Roact.createElement(App, {});
const tree = Roact.mount(appElement, playerGui);

// Clean up when the player leaves (good practice)
game.GetService("Players").PlayerRemoving.Connect((player) => {
    if (player === LocalPlayer) {
        Roact.unmount(tree);
    }
});

print("Completionist UI mounted successfully!");
