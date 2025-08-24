import { describe, expect, it } from "@jest/globals";
import { makeHello } from "../shared/module";

describe("makeHello", () => {
    it("should return a greeting with the provided name", () => {
        const result = makeHello("Jest");
        expect(result).toBe("Hello from Jest!");
    });

    it("should handle empty string", () => {
        const result = makeHello("");
        expect(result).toBe("Hello from !");
    });

    it("should handle special characters", () => {
        const result = makeHello("Roblox-TS 🚀");
        expect(result).toBe("Hello from Roblox-TS 🚀!");
    });
});
