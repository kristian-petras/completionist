import type { PlayerData } from "../types/PlayerData";

export function usePlayerData(): [PlayerData, (newData: Partial<PlayerData>) => void] {
    // Initialize with mock data for the example
    const initialData: PlayerData = {
        level: 1,
        experience: 0,
        experienceToNext: 100,
        coins: 50,
        rebirths: 0,
        achievements: 3,
        totalAchievements: 50,
    };

    // For now, return static data since we're building an example
    // In a real game, this would connect to actual game state
    const updatePlayerData = (newData: Partial<PlayerData>) => {
        // This would update the actual player data in a real implementation
        print("Would update player data:", newData);
    };

    return [initialData, updatePlayerData];
}
