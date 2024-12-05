import { useState } from "react";

export default function PromptFormName({ onSubmit, isLoading }) {
  const [name, setName] = useState("");
  const [story, setStory] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name, story }); 
        setName("");
        setStory("");
      }}
    >
      <div>
        <label>Name of the story:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>What is your story about?</label>
        <input
          type="text"
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
      </div>

      <input type="submit" value="Submit" disabled={isLoading} />
    </form>
  );
}
