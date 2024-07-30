import React from "react";
import { Checkbox } from "@nextui-org/checkbox";

import { Boss } from "@/utils/models";
import { db } from "@/utils/db";

interface Props {
    bosses: Array<Boss>;
}

export const BossList = ({ bosses }: Props) => {
    return (
        <>
            {bosses.map((boss) => {
                const onValueChange = (isSelected: boolean) => {
                    db.bosses.update(boss.id!, { killed: isSelected });
                };

                return (
                    <Checkbox
                        key={`boss-${boss.id}`}
                        lineThrough
                        color="success"
                        onValueChange={onValueChange}
                        isSelected={boss.killed}
                    >
                        {boss.name}
                    </Checkbox>
                );
            })}
        </>
    );
};
