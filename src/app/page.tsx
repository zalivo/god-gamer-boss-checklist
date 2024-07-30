"use client";
import { useLiveQuery } from "dexie-react-hooks";

import { ProgressBar } from "@/components/ProgressBar";
import { db } from "@/utils/db";
import { GameList } from "@/components/GameList";
import { GameTabs } from "@/components/GameTabs";
import { Heading } from "@/components/Heading";

export default function Home() {
    const games = useLiveQuery(() => db.games.toArray());

    return (
        <section className="flex flex-col w-full max-w-screen-lg items-center justify-center gap-4 py-8 md:py-10">
            <Heading />
            <ProgressBar />
            <GameList />
            <GameTabs />
        </section>
    );
}
