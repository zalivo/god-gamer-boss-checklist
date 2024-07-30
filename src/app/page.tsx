"use client";
import { useLiveQuery } from "dexie-react-hooks";

import { ProgressBar } from "@/components/ProgressBar";
import { db } from "@/utils/db";
import { GameList } from "@/components/GameList";
import { GameTabs } from "@/components/GameTabs";
import { Heading } from "@/components/Heading";
import { ChangeButtons } from "@/components/ChangeButtons";

export default function Home() {
    const games = useLiveQuery(() => db.games.toArray());

    return (
        <section className="container flex flex-col w-full max-w-screen-lg items-center justify-center gap-4 py-2">
            <Heading />
            <ProgressBar />
            <GameList />
            <ChangeButtons />
            <GameTabs />
        </section>
    );
}
