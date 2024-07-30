import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";
import { PressEvent } from "@react-types/shared";

import { db, getGamesWithBosses } from "@/utils/db";

export const ChangeButtons = () => {
    const [value, setValue] = React.useState<Set<string>>(new Set([]));
    const games = useLiveQuery(getGamesWithBosses);

    const onPress = async (e: PressEvent) => {
        const gameIds = Array.from(value).map((s) => Number.parseInt(s));
        const bosses = await db.bosses
            .where("gameId")
            .anyOf(gameIds)
            .and((boss) => boss.killed)
            .toArray();
        const bulkUpdate = bosses.map((boss) => ({
            key: boss.id,
            changes: {
                killed: false,
            },
        }));

        await db.bosses.bulkUpdate(bulkUpdate);
    };

    if (!games) return <></>;

    return (
        <div className="flex flex-row w-full gap-3 max-w-xl lg:max-w-3xl">
            <Select
                label="Select game"
                placeholder="Select game"
                selectionMode="multiple"
                className="max-w-md"
                selectedKeys={value}
                onSelectionChange={setValue}
            >
                {games.map((game) => (
                    <SelectItem key={game.id}>{game.title}</SelectItem>
                ))}
            </Select>
            <Button color="warning" onPress={onPress}>
                Reset
            </Button>
        </div>
    );
};
