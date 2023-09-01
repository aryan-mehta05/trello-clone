import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Todos in the body of the POST request
  const { todos } = await request.json();
  console.log(todos);
  
  // Communicate with OpenAI's GPT
  // const response = await openai.createChatCompletion({
  //   model: "gpt-3.5-turbo",
  //   temperature: 0.8,
  //   n: 1,
  //   stream: false,
  //   messages: [
  //     {
  //       role: "system",
  //       content: `When responding, welcome the user always as Mr. Aryan and say welcome to your AI Powered Todo App!
  //       Limit the response to 200 characters`,
  //     },
  //     {
  //       role: "user",
  //       content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To Do, In Progress and Done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(todos)}`,
  //     },
  //   ],
  // });

  //////////////////////////////////////////////////////////////////



  // Communicate with OpenAI's GPT
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `When responding, welcome the user always as Mr. Aryan and say welcome to your AI Powered Todo App!
        Limit the response to 200 characters`,
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To Do, In Progress and Done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(todos)}`,
      },
    ],
  });

  console.log("DATA IS: ", chatCompletion);
  console.log(chatCompletion.choices[0].message);
  



  //////////////////////////////////////////////////////////////////

  // const { data } = response;

  // console.log("DATA IS: ", data);
  // console.log(data.choice[0].message);

  return NextResponse.json(chatCompletion.choices[0].message);
}