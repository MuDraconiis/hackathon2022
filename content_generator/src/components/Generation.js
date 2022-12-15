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
        const responseText = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Ecrit une description courte d'un " + inputs['firstinput'] + " de couleur " + inputs['select1'] +  " il " + inputs['select2'],
            max_tokens: 100,
            temperature: 0.8,
            n: 10,
        });

        const responseImage = await openai.createImage({
            prompt: inputs["firstinput"] + inputs["select1"] + inputs["select2"],
            n: 10,
            size: "512x512",
        });
        
        for(let i = 0; i < 10; i++){
            let concat = [responseText.data.choices[i].text, responseImage.data.data[i].url]
            result[i] = concat
        }   
        console.log(result)         
    }


    return (
        <div>{MyBody()}
            <div>
                <h1>
                    ici le formulaire
                </h1>
                <div id="div_form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>un input</Form.Label>
                            <Form.Control id="firstinput" name="firstinput" placeholder="quelque chose" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>un premier select</Form.Label>
                            <Form.Select id="select1" name="select1" onChange={handleChange}>
                                <option></option>
                                <option value="blanche">blanche</option>
                                <option value="rousse">rousse</option>
                                <option value="noire">noire</option>
                                <option value="grise">grise</option>
                                <option value="marron">marron</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>un deuxieme select</Form.Label>
                            <Form.Select id="select2" name="select2" onChange={handleChange}>
                                <option></option>
                                <option value="saute">saute</option>
                                <option value="dors">dors</option>
                                <option value="cours">cours</option>
                                <option value="méchant">méchant</option>
                                <option value="joueur">joueur</option>
                            </Form.Select>
                        </Form.Group>
                        <Button type="submit">Générer</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}