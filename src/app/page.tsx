import { ProgressBar } from "@/components/ProgressBar";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg text-center justify-center">
                <h1>god gamer</h1>
                <ProgressBar />
            </div>
            <div />
        </section>
    );
}
