import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Configuration, OpenAIApi } from "openai";


function MyBody() {

    useEffect(() => {
        /***********************************/
        //code
        /*************************************/
    }
    )

    return <div>

    </div>

}

export default function Generation1() {

const [prompt, setPrompt] = useState("");
const [result, setResult] = useState("");

//console.log(process.env.REACT_APP_Open_AI_Key)

const configuration = new Configuration({
	// apiKey: process.env.VITE_Open_AI_Key,
    apiKey: process.env.REACT_APP_Open_AI_Key,
});

const openai = new OpenAIApi(configuration);
//console.log(openai)

const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });

    setResult(res.data.data[0].url);
    console.log(res.data.data[0].url);

  };


    return (
        <div>{MyBody()}
            <div className="app-main">
                <>
                    <h2>Generate an Image using Open AI API</h2>

                    <textarea
                        className="app-input"
                        placeholder="description de ce que tu veux"
                        onChange={(e) => setPrompt(e.target.value)}
                        rows="10"
                        cols="40"
                    />
                    <Button onClick={generateImage}>Generate an Image</Button>

                    {result.length > 0 ? (
                        <img className="result-image" src={result} alt="result" />
                    ) : (
                        <></>
                    )}
                </>
            </div>
        </div>
    )

}