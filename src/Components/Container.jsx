import { useState } from "react";
import { Stats } from "./Stats"
import { TextArea } from "./TextArea"

export const Container = () => {
    const [text, setText] = useState("");
    const numberOfCharacters = text.length;
  return (
<main className="container">
    <TextArea text={text} setText={setText}/>
    <Stats numberOfCharacter={numberOfCharacters} />
     </main>

  )
}

