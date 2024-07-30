import { Transaction } from "dexie";

import {
    DarkSoulsI,
    DarkSoulsII,
    DarkSoulsIII,
    Bloodborne,
    Sekiro,
    DemonSouls,
    EldenRing,
} from "@/data/bosses";
import { Game } from "@/utils/models";

const populateGame = async (transaction: Transaction, game: Game) => {
    const id: number = await transaction.table("games").add(game);
    const bosses = game.bosses.map((boss) => ({
        ...boss,
        gameId: id
    }))
    await transaction.table("bosses").bulkAdd(bosses);
}

export const onPopulate = (transaction: Transaction) => {
    const games: Array<Game> = [
        DarkSoulsI,
        DarkSoulsII,
        DarkSoulsIII,
        Bloodborne,
        Sekiro,
        DemonSouls,
        EldenRing,
    ];
    for (const game of games) {
        populateGame(transaction, game);
    }
};
