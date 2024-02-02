"use client";

import FancyButton from "../FancyButton/FancyButton";
import { useState } from "react";

export default function QueryForm() {
    const [query, setQuery] = useState("");

    return (
        <div className="flex flex-col justify-evenly items-center h-full w-full md:mx-[10%] p-4 md:p-0">
            <div className="flex flex-col justify-between items-center w-full">
                <p className="text-slate-100 text-balance text-center">
                    Ever found yourself in that frustrating moment where the
                    perfect word, the name of that movie, or a song are right on
                    the tip of your tongue, but you just can&apos;t grasp them?
                    Let&apos;s find out what&apos;s on the tip of your tongue,
                    together.
                </p>
                <br />
                <p className="text-slate-100 text-balance text-center">
                    Simply describe what you&apos;re trying to think of in the
                    text box below, and watch the magic unfold.
                </p>
            </div>

            <textarea
                placeholder="Describe what you're thinking of..."
                className="text-lg flex min-h-[60px] w-2/3 h-1/4 md:h-1/3 rounded-md border border-zinc-700 bg-transparent px-3 py-2 shadow-sm focus:border-zinc-600 outline-none hover:border-zinc-600 text-slate-100"
                onChange={(e) => setQuery(e.target.value)}
            />
            <FancyButton query={query} />
        </div>
    );
}
