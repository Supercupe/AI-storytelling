"use client";

import styles from './page.module.css'
import {useState} from "react"
import PromptForm from "../components/PromptForm"

export default function Home(){

  const[choices, setChoices] =useState([]);

  return(
    <main className={styles.main}>
      <PromptForm 
        isLoading={isLoading}  
        onSubmit={async(prompt) => {
          setIsLoading(true);
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify({
              prompt,
            }),
          });
          setIsLoading(false);
          const result = await response.json();
          setChoices(result.choices)

        }}
      />

        {choices.map(choices=>{
          return(
            <p>{choice.message.content}</p>
          )
        })}
    </main>
  );
}