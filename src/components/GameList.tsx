import React from "react";
import { useLiveQuery } from "dexie-react-hooks";

import { getGamesWithBosses } from "@/utils/query";

export const GameList = () => {
    const games = useLiveQuery(getGamesWithBosses);

    if (!games) return <></>;

    return (
        <>
            {games.map((game) => {
                const bosses = game.bosses;
                const total = bosses.length;
                const killed = bosses.filter((boss) => boss.killed).length;

                return (
                    <div
                        className="flex flex-row max-w-xl lg:max-w-3xl w-full justify-between py-5 border-solid border-b border-white"
                        key={`game-list-${game.id}`}
                    >
                        <span className="text-5xl">{game.title}</span>
                        <span className="place-self-end text-md">
                            {killed} / {total}
                        </span>
                    </div>
                );
            })}
        </>
    );
};
