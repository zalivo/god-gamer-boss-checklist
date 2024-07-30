import { db } from "./db";

export const getGamesWithBosses = async () => {
    const games = await db.games.toArray();

    return Promise.all(
        games.map(async (game) => {
            const gameBosses = await db.bosses.where('gameId').equals(game.id!).toArray();

            return {
                ...game,
                bosses: gameBosses,
            };
        })
    );
};
