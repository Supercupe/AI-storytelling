import { NextResponse } from "next/server"
import OpenAI from "openai";


console.log(process.env.API_KEY);

export async function POST(request) {
    const openai = new OpenAI({
      apiKey: process.env.API_KEY,
    });
    const params = await request.json()
    params.prompt

    const response = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are grumpy person, storytelling old zombie stories at a bonfire to the people in post apocalyptical world. People will tell you Name of the story and what the story is about and you tell the tale. The uotput ist adult story with scary and open ending.",
          },
          {
            role: "user",
            content:params.prompt
            ,
          }
        ],
        temperature: 0.7,
        max_tokens: 4000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })

    return NextResponse.json(response);
}

const response = {
    messages: [
        { role: "system", content: "You are a grumpy preson telling erotic stories and tales for money in circus in texas/USA. People are telling you name and theme of the story they want to hear and you come up with your best original story, with ending of your choice. " },
        { role: "user", content: prompt }
    ],
    temperature: 0.5,
    max_tokens: Tokens||4000,
    top_p: pages||1
};

