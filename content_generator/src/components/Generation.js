import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";

function MyBody() {

    useEffect(() => {
            
        
    }
    )
    return <div>

    </div>

}



export default function Generation() {
    
    const [inputs, setInputs] = useState([]);
    const [result, setResult] = useState([]);
    const [prompt, setPrompt] = useState("");

    useEffect(() => {
            
        
    }
    )

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
        


    async function handleSubmit(event) {
        event.preventDefault();
        console.log(inputs["firstinput"]);
        console.log(process.env.REACT_APP_Open_AI_Key, "sasa")

        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_Open_AI_Key,
        });
        
        const openai = new OpenAIApi(configuration);
        console.log(inputs)
        const responseArgVente = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Ecrire un argument de vente pour une application" +
                    "selon cette description: " + prompt,
            max_tokens: 300,
            presence_penalty: 2,
            temperature: 1,
            n: 10,
        });

        const responseTitre = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Donne moi un nom pour cette application" +
                    "selon cette description: " + prompt,
            max_tokens: 20,
            presence_penalty: 2,
            temperature: 1,
            n: 10,
        });

        const responseImage = await openai.createImage({
            prompt: "Give a logo without text about this application:" + prompt,
            n: 10,
            size: "512x512",
        });
        
        for(let i = 0; i < 10; i++){
            let concat = [responseTitre.data.choices[i].text, responseArgVente.data.choices[i].text, responseImage.data.data[i].url]
            result[i] = concat
        }    
    }


    return (
        <div>{MyBody()}
            <div>
                <h1>
                    Avez vous une idée de l'application de vos rêves? Dites nous tout...
                </h1>
                <div id="div_form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                className="app-input"
                                placeholder="description de ce que tu veux"
                                onChange={(e) => setPrompt(e.target.value)}
                                as="textarea" rows={3}
                            />
                        </Form.Group>
                        <h2>Des idées précises pour paufiner votre création?</h2>
                        <Form.Group className="mb-3">
                            <Form.Label >Le type?</Form.Label>
                            <Form.Control
                                className="app-input"
                                placeholder="description de ce que tu veux"
                                onChange={(e) => setPrompt(e.target.value)}
                                rows="10"
                                cols="40"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>La clientèle?</Form.Label>
                            <Form.Control
                                className="app-input"
                                placeholder="description de ce que tu veux"
                                onChange={(e) => setPrompt(e.target.value)}
     
                            />
                        </Form.Group>
                        <Button type="submit">Générer</Button>
                        {
                            result[0] != null ? (
                                <img className="result-image" src={result[0][2]} alt="result" />
                            ) : (
                                <></>
                            )
                        }
                    </Form>
                </div>
            </div>
        </div>
    )
}