import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/tabs";
import { useLiveQuery } from "dexie-react-hooks";

import { db, getGamesWithBosses } from "@/utils/db";
import { BossList } from "./BossList";

export const GameTabs = () => {
    const games = useLiveQuery(getGamesWithBosses);

    if (!games) return <></>;

    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="Dynamic tabs" items={games}>
                {(game) => (
                    <Tab key={game.id} title={game.title}>
                        <Card>
                            <CardBody>
                                <BossList bosses={game.bosses} />
                            </CardBody>
                        </Card>
                    </Tab>
                )}
            </Tabs>
        </div>
    );
};
