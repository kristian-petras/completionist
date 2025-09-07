import { makeHello } from "@/shared/module";
import { createBaseplate } from "./BaseplateGenerator";

print(makeHello("main.server.ts"));

print("[Server] Initializing game world...");

createBaseplate();

print("[Server] Game world initialized successfully!");
