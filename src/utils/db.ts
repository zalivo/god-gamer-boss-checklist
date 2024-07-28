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
