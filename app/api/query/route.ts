import OpenAI from "openai";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const { searchParams } = new URL(req.url);
    const description_of_word = searchParams.get("description");
    if (description_of_word === null)
        return Response.json({ error: "No description provided." });

    const response = await openai.chat.completions.create({
        model: "gpt-5-nano",
        messages: [
            {
                role: "system",
                content: `
                You are a friendly assistant that helps people find the word, song, movie or show that was on the tip of their tongue.
                The user will give you a description of what they are thinking of, and you will respond with 5 suggestions. Make sure that the suggestions are relevant to the user's description.
                The suggestions should all be real grammatically correct words, songs, movies or shows or whatever the user asks. Try to be as helpful as possible and make relevant suggestions that
                are likely to be what the user is thinking of. If the user asks for something else, you should respond with 5 suggestions that are relevant to the user's description.
                It might be a technical term, like a Rube Goldberg machine, or an uncommon dictionary word, or just any movie, show, song, or word that fits the description or even a word in another language.
                Reply with the most likely suggestions that fit the user's description of what they are thinking of. 
                `,
            },
            {
                role: "user",
                content: description_of_word,
            },
        ],
        tools: [
            {
                type: "function",
                function: {
                    name: "submit_5_suggestions",
                    description:
                        "Submit the 5 unique suggestions of the word, show, movie, song or whatever the user is trying to think of.",
                    parameters: {
                        type: "object",
                        properties: {
                            possibilities: {
                                type: "array",
                                description:
                                    "List of 5 unique possible suggestions for the word on the tip of the tongue of the user.",
                                items: {
                                    type: "string",
                                    description:
                                        "A possible suggestion for the word on the tip of the tongue of the user.",
                                },
                            },
                        },
                        required: ["possibilities"],
                    },
                },
            },
        ],
        tool_choice: {
            type: "function",
            function: { name: "submit_5_suggestions" },
        },
    });

    const tool_calls = response.choices[0].message.tool_calls;
    if (
        tool_calls === null ||
        tool_calls === undefined ||
        tool_calls.length === 0
    )
        return Response.json({ error: "No suggestions found." });
    const suggestions = tool_calls[0].function.arguments;

    const data = JSON.parse(suggestions);
    const possible_words = data.possibilities;

    return Response.json({ possible_words: possible_words });
};
