"use client";
import { useLiveQuery } from "dexie-react-hooks";

import { ProgressBar } from "@/components/ProgressBar";
import { db } from "@/utils/db";
import { GameList } from "@/components/GameList";
import { GameTabs } from "@/components/GameTabs";

export default function Home() {
    const games = useLiveQuery(() => db.games.toArray());

    return (
        <section className="flex flex-col w-full max-w-screen-lg items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block w-full text-center justify-center py-8">
                <h1 className="text-xl">GOD GAMER BOSS CHECKLIST</h1>
            </div>
            <ProgressBar />
            <GameList />
            <section>
                <GameTabs />
            </section>
        </section>
    );
}
