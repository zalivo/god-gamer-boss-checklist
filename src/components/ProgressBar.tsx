"use client";

import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import { Progress } from "@nextui-org/progress";

import { db } from "@/utils/db";

export const ProgressBar = () => {
    const bosses = useLiveQuery(() => db.bosses.toArray());

    if (!bosses) return <></>;

    const total = bosses.length;
    const killed = bosses.filter((boss) => boss.killed).length;

    return (
        <Progress
            classNames={{
                base: "max-w-xl lg:max-w-3xl",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
            }}
            label="Boss progress"
            color="warning"
            radius="sm"
            showValueLabel={true}
            size="md"
            value={(killed / total) * 100}
        />
    );
};
