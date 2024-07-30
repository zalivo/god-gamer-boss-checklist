import { Transaction } from "dexie";

import {
    Bloodborne,
    DarkSoulsI,
    DarkSoulsII,
    DarkSoulsIII,
    DemonSouls,
    EldenRing,
} from "@/data/bosses";
import { Game } from "@/utils/models";

export const populateDb = (transaction: Transaction) => {
    const data: Array<Game> = [
        DarkSoulsI,
        DarkSoulsII,
        DarkSoulsIII,
        Bloodborne,
        DemonSouls,
        EldenRing,
    ];
    let i = 1,
        j = 1;

    for (const g of data) {
        const bosses = [];
        const bossIds: Array<number> = [];

        for (const b of g.bosses) {
            const boss = {
                id: j,
                name: b.name,
                region: b.region,
                killed: b.killed,
                gameId: i,
            };

            bossIds.push(j);
            bosses.push(boss);
            j++;
        }

        const game = {
            id: i,
            title: g.title,
            bossIds: bossIds,
        };

        transaction.table("games").add(game);
        transaction.table("bosses").bulkAdd(bosses);

        i++;
    }
};
