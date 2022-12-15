import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import {useNavigate } from "react-router-dom";

function MyBody() {

    // useEffect(() => {
            
        
    // }
    // )
    return <div>

    </div>

}



export default function Generation0() {
    
    const [inputs, setInputs] = useState([]);
    const [textes, setTextes] = useState([]);
    const [texte1, setTexte1] = useState([]);
    const [images, setImages] = useState([]);
    //const [result, setResult] = useState([]);
    const [prompt, setPrompt] = useState("");


    useEffect(() => {
        // setTextes(textes)
        // setImages(images)
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
            prompt: "Ecrire un argument de vente pour une application" +
                    "selon cette description: " + prompt + " de couleur " + inputs['select1'] +  " il " + inputs['select2'],
            max_tokens: 100,
            temperature: 0.8,
            n: 10,
        });

        const responseImage = await openai.createImage({
            prompt: prompt,
            n: 10,
            size: "256x256",
        });
        
        for(let i = 0; i < 10; i++){
      //   let concat = [responseText.data.choices[i].text, responseImage.data.data[i].url]
      //   result[i] = concat
         textes[i]=responseText.data.choices[i].text;
         images[i]=responseImage.data.data[i].url;
        } 

        setTexte1(responseText.data.choices[0].text)
        setTextes(textes)
        setImages(images)

        console.log("###############")
        console.log(responseText.data.choices[0])
        console.log("###############")
        console.log(responseImage.data.data[0])

      // setResult(result)  
      // console.log(result)         
    }


    return (
        <div>{MyBody()}
            <div id="form_container">
                <h1>
                    Avez vous une idée de l'application de vos rêves? Dites nous tout...
                </h1>
                <div id="div_form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <textarea
                                className="app-input"
                                placeholder="description de ce que tu veux"
                                onChange={(e) => setPrompt(e.target.value)}
                                rows="10"
                                cols="40"
                            />
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

            {images.length > 0 ? ( 
                <div id="main_container">
                <div id="articles_container" className="">
                    <div id="article1" className="article">
                        <img className="img_article" src={images[0]}></img>
                        <div className="text_article">{texte1}</div>
                    </div>
                    <div id="article2" className="article">
                        <img className="img_article" src={images[1]}></img>
                        <div className="text_article">{textes[1]}</div>
                    </div>
                    <div id="article3" className="article">
                        <img className="img_article" src={images[2]}></img>
                        <div className="text_article">{textes[2]}</div>
                    </div>
                    <div id="article4" className="article">
                        <img className="img_article" src={images[3]}></img>
                        <div className="text_article">{textes[3]}</div>
                    </div>
                    <div id="article5" className="article">
                        <img className="img_article" src={images[4]}></img>
                        <div className="text_article">{textes[4]}</div>
                    </div>
                    <div id="article6" className="article">
                        <img className="img_article" src={images[5]}></img>
                        <div className="text_article">{textes[5]}</div>
                    </div>
                    <div id="article7" className="article">
                        <img className="img_article" src={images[6]}></img>
                        <div className="text_article">{textes[6]}</div>
                    </div>
                    <div id="article8" className="article">
                        <img className="img_article" src={images[7]}></img>
                        <div className="text_article">{textes[7]}</div>
                    </div>
                    <div id="article9" className="article">
                        <img className="img_article" src={images[8]}></img>
                        <div className="text_article">{textes[8]}</div>
                    </div>
                    <div id="article10" className="article">
                        <img className="img_article" src={images[9]}></img>
                        <div className="text_article">{textes[9]}</div>
                    </div>
    
                </div>
            </div>
            ) : (
                <></>
            )}


        </div>
    )
}