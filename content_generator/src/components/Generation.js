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
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: inputs["firstinput"],
            max_tokens: 100,
            temperature: 0.8,
            n: 10,
        });
        console.log(response.data)
        response.data.choices.map((choice) => console.log(choice.text))
            
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
                                <option value="val1">valeur 1</option>
                                <option value="val2">valeur 2</option>
                                <option value="val3">valeur 3</option>
                                <option value="val4">valeur 4</option>
                                <option value="val5">valeur 5</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>un deuxieme select</Form.Label>
                            <Form.Select id="select2" name="select2" onChange={handleChange}>
                                <option></option>
                                <option value="val1">valeur 1</option>
                                <option value="val2">valeur 2</option>
                                <option value="val3">valeur 3</option>
                                <option value="val4">valeur 4</option>
                                <option value="val5">valeur 5</option>
                            </Form.Select>
                        </Form.Group>
                        <Button type="submit">Générer</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}