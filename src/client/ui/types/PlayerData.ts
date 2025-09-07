export interface PlayerData {
    level: number;
    experience: number;
    experienceToNext: number;
    coins: number;
    rebirths: number;
    achievements: number;
    totalAchievements: number;
}

export interface NotificationData {
    id: string;
    message: string;
    type: "success" | "warning" | "error" | "info";
    duration?: number;
}

export interface ActionButtonData {
    text: string;
    icon?: string;
    enabled: boolean;
    onClick: () => void;
}
