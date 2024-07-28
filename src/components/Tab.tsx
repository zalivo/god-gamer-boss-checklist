import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/tabs";

export default function App() {
    let tabs = [
        {
            id: "dark-souls-1",
            label: "Dark Souls 1",
            content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            id: "dark-souls-2",
            label: "Dark Souls 2",
            content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            id: "dark-souls-3",
            label: "Dark Souls 3",
            content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            id: "dark-souls-blood-borne",
            label: "Bloodborne",
            content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            id: "sekiro",
            label: "Sekiro",
            content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            id: "demon-souls",
            label: "Demon Souls",
            content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            id: "elden-ring",
            label: "Elden Ring",
            content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ];

    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="Dynamic tabs" items={tabs}>
                {(item) => (
                    <Tab key={item.id} title={item.label}>
                        <Card>
                            <CardBody>{item.content}</CardBody>
                        </Card>
                    </Tab>
                )}
            </Tabs>
        </div>
    );
}
