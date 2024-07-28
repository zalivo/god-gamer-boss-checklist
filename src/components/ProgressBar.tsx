'use client'

import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import { Progress } from "@nextui-org/progress";

import { db } from "@/utils/db";

export const ProgressBar = () => {
    const bosses = useLiveQuery(
        () => db.bosses.toArray()
    )

    console.log(bosses)

    return (
        <Progress
            classNames={{
                base: "max-w-md",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
            }}
            label="Lose weight"
            radius="sm"
            showValueLabel={true}
            size="sm"
            value={65}
        />
    );
};
