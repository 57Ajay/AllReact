import {Fragment, useMemo, useState} from 'react'


const words = ["hi", "my", "name", "is", "for", "to", "random", "words", "Ajay", "Upadhyay"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for ( let i=0; i<TOTAL_LINES; i++){
    let sentence = "";
    for (let j=0; j<words.length; j++){
        sentence += (words[Math.floor(words.length*Math.random())]);
        sentence += " ";
    }
    ALL_WORDS.push(sentence);
}
const Assignment2=()=> {
    const [filter, setFilter] = useState("");
    
    const sentences = ALL_WORDS;
    const filteredSentences = useMemo(()=>{
        return sentences.filter((sentence)=>{
            return sentence.toLowerCase().includes(filter.toLowerCase());
        });
    }, [filter, sentences]);

    const refreshComponent = ()=>{
        window.location.reload();
    };
  return (
    <Fragment>
        <h1>Assignment2</h1>
        <input type='text' onChange={(e)=>setFilter(e.target.value)} />
        <button onClick={refreshComponent}>Refresh</button>
        {filteredSentences.map((sentence, index)=>{
            return <p key={index}>{sentence}</p>
        })}
        
    </Fragment>
  )
}

export default Assignment2;
