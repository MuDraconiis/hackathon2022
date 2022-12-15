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
    const [concat, setConcat] = useState([]);
    const [submit, setSubmit] = useState(false);
    console.log(result)
    

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
        


    async function handleSubmit(event) {
        event.preventDefault();
        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_Open_AI_Key,
        });
        
        const openai = new OpenAIApi(configuration);
        console.log(inputs)
        const responseArgVente = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Ecrire un résumé de cette application" +
                    "selon cette description: " + prompt,
            max_tokens: 300,
            presence_penalty: 2,
            temperature: 1,
            n: 12,
        });

        const responseTitre = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Donne moi un nom pour cette application" +
                    "selon cette description: " + prompt,
            max_tokens: 20,
            presence_penalty: 2,
            temperature: 1,
            n: 12,
        });

        const responseImage = await openai.createImage({
            prompt: "Give a logo without text about this application:" + prompt,
            n: 12,
            size: "256x256",
        });
        for(let i = 0; i < 12; i++){
            setConcat([responseTitre.data.choices[i].text, responseArgVente.data.choices[i].text, responseImage.data.data[i].url])
        }
        setSubmit(true)
    }

    useEffect(() => {
        for(let i = 0; i < 12; i++){
            console.log(concat)
            result[i] = concat
        } 
        console.log(result)
    })

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
                        {
                            submit == true ? (
                                <>
                                    <h2>Des idées précises pour paufiner votre création?</h2>
                                    <Form.Group className="mb-3">
                                        <Form.Label >Un thème?</Form.Label>
                                        <Form.Control
                                            className="app-input"
                                            placeholder="Ex: Nature, animaux, science, technologie..."
                                            onChange={(e) => setPrompt(e.target.value)}
                                            rows="10"
                                            cols="40"
                                        />

                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Une clientèle visée?</Form.Label>
                                        <Form.Control
                                            className="app-input"
                                            placeholder="Ex: Organisation, particulier, catégorie de personne..."
                                            onChange={(e) => setPrompt(e.target.value)}

                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Ce que vous proposez?</Form.Label>
                                        <Form.Control
                                            className="app-input"
                                            placeholder="Ex: De la vente, des services... ou même du bénévolat!"
                                            onChange={(e) => setPrompt(e.target.value)}

                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Un état d'esprit?</Form.Label>
                                        <Form.Control
                                            className="app-input"
                                            placeholder="Ex: Le partage, le sérieux, l'entrain!"
                                            onChange={(e) => setPrompt(e.target.value)}

                                        />
                                    </Form.Group>
                                </>
                            ) : (
                                <></>
                            )
                        }

                        <Button type="submit">Générer</Button>
                        {
                            submit == true ? (
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