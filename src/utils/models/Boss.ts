export interface BossData {
    name: string;
    region?: string;
    killed: boolean;
}

export interface Boss extends BossData {
    id: number
}
