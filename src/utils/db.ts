import Dexie, { Table } from "dexie";

import { Boss, Game } from "@/utils/models";
import { populateDb } from "@/utils/populateDb";

export class SoulsDB extends Dexie {
    games!: Table<Game, number>;
    bosses!: Table<Boss, number>;

    constructor() {
        super("SoulsDB");
        this.version(1).stores({
            games: "++id, title, bossIds",
            bosses: "++id, name, region, killed, gameId",
        });
    }
}

export const db = new SoulsDB();

db.on("populate", populateDb)

export const getGamesWithBosses = async () => {
    const games = await db.games.toArray()

    return Promise.all(
        games.map(async (game) => {
            const gameBosses = await db.bosses.where('gameId').equals(game.id).toArray()

            return {
                ...game,
                bosses: gameBosses,
            }
        })
    )
}
