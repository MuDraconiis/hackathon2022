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

export default function Generation() {

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(inputs);

        ///////OPENAPI
    // const configuration = new Configuration({
    //     apiKey: "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",
    //   });
    //   const openai = new OpenAIApi(configuration);
  
    //   openai
    //     .createCompletion("text-davinci-002", {
    //       prompt: `Write a detailed blog for 5 fruits`,
    //       temperature: 0.8,
    //       max_tokens: 500,
    //       top_p: 1,
    //       frequency_penalty: 0,
    //       presence_penalty: 0,
    //     })
    //     .then((response) => {
    //         console.log(response.data.choices[0].text)
    //     });

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