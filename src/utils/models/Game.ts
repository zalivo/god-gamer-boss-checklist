import { Boss } from "@/utils/models";

export interface Game {
    id: number;
    title: string;
    bosses: Array<Boss>;
}
