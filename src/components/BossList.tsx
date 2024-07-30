import React from "react";
import { Checkbox } from "@nextui-org/checkbox";

import { Boss, Game } from "@/utils/models";

interface Props {
    bosses: Array<Boss>;
}

export const BossList = ({ bosses }: Props) => {
    return (
        <>
            {bosses.map((boss) => {
                return (
                    <Checkbox key={`boss-${boss.id}`} lineThrough>
                        {boss.name}
                    </Checkbox>
                );
            })}
        </>
    );
};
