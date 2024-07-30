import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/tabs";
import { useLiveQuery } from "dexie-react-hooks";

import { getGamesWithBosses } from "@/utils/db";

import { BossList } from "./BossList";

export const GameTabs = () => {
    const games = useLiveQuery(getGamesWithBosses);
    const colors = ["warning"];

    if (!games) return <></>;

    return (
        <div className="flex w-full flex-col py-8 max-w-2xl md:max-w-3xl">
            <Tabs aria-label="Dynamic tabs" items={games} color="warning">
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
