import Dexie, { type EntityTable } from "dexie";
import relationships from "dexie-relationships";

interface AbstractEntity {
  id: number;
}

interface Game extends AbstractEntity {
  title: string;
  bosses: Array<BossEntry>;
}

interface BossEntry extends AbstractEntity {
  id: number;
  name: string;
  region?: string;
  killed: boolean;
}

const db = new Dexie("SoulsDatabase", { addons: [relationships] }) as Dexie & {
  games: EntityTable<Game, "id">;
  boss_entries: EntityTable<BossEntry, "id">;
};

// Schema declaration:
db.version(1).stores({
  game: "++id, title",
  boss_entry: "++id, name, region, killed, gameId -> game.id",
});

export type { Game, BossEntry };
export { db };
