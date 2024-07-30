import { Boss, BossData } from "@/utils/models";

export interface GameData {
    title: string;
    bosses: Array<Boss | BossData>;
}

export interface Game extends GameData {
    id: number;
}
