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
    const [titres, setTitres] = useState([]);
    const [textes, setTextes] = useState([]);
    const [texte1, setTexte1] = useState([]);
    const [images, setImages] = useState([]);
    const [promptCli, setPromptCli] = useState("");
    const [promptPro, setPromptPro] = useState("");
    const [promptThe, setPromptThe] = useState("");
    const [promptEsp, setPromptEsp] = useState("");
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
            prompt: "Ecrit un résumé de cette application sans titre" +
                "selon cette description: " + prompt + " mot clé:" + promptThe +
                promptCli + promptPro + promptEsp,
            max_tokens: 100,
            presence_penalty: 2,
            temperature: 1,
            n: 10,
        });

        const responseTitre = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Donne un nom à cette application en un mot" +
                "selon cette description: " + prompt + " mot clé:" + promptThe +
                promptCli + promptPro + promptEsp,
            max_tokens: 20,
            presence_penalty: 2,
            temperature: 1,
            n: 10,
            stop: " " + ".",
        });
        console.log(prompt)
        const responseImage = await openai.createImage({
            prompt: "Donne un logo à cette application:" + prompt + " mot clé:" + promptThe +
                promptCli + promptPro + promptEsp,
            n: 10,
            size: "256x256",
        });
        // for(let i = 0; i < 12; i++){
        //     setConcat([responseTitre.data.choices[i].text, responseArgVente.data.choices[i].text, responseImage.data.data[i].url])
        // }
        for (let i = 0; i < 10; i++) {
            //   let concat = [responseText.data.choices[i].text, responseImage.data.data[i].url]
            //   result[i] = concat
            titres[i] = responseTitre.data.choices[i].text;
            textes[i] = responseArgVente.data.choices[i].text;
            images[i] = responseImage.data.data[i].url;
        }
        setTexte1(responseArgVente.data.choices[0].text)
    }

    useEffect(() => {
        setTextes(textes)
        setTitres(titres)
        setImages(images)
        console.log(prompt)
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
                                placeholder="Décrivez l'application que vous souhaitez"
                                onChange={(e) => setPrompt(e.target.value)}
                                as="textarea" rows={3}
                            />
                        </Form.Group>

                        <h2>Des idées précises pour paufiner votre création?</h2>
                        <Form.Group className="mb-3">
                            <Form.Label >Un thème?</Form.Label>
                            <Form.Control
                                className="app-input"
                                placeholder="Ex: Nature, animaux, science, technologie..."
                                onChange={(e) => setPromptThe(e.target.value)}
                                rows="10"
                                cols="40"
                            />

                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Une clientèle visée?</Form.Label>
                            <Form.Control
                                className="app-input"
                                placeholder="Ex: Organisation, particulier, catégorie de personne..."
                                onChange={(e) => setPromptCli(e.target.value)}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Ce que vous montrez?</Form.Label>
                            <Form.Control
                                className="app-input"
                                placeholder="Ex: Des produits diverses, de l'information ou de la communication!"
                                onChange={(e) => setPromptPro(e.target.value)}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Un état d'esprit?</Form.Label>
                            <Form.Control
                                className="app-input"
                                placeholder="Ex: Le partage, le sérieux, l'entrain!"
                                onChange={(e) => setPromptEsp(e.target.value)}

                            />
                        </Form.Group>
                        <Button type="submit">Générer</Button>
                        {images.length > 0 ? (
                            <div id="main_container">
                                <div id="articles_container" className="">
                                    <div id="article1" className="article">
                                        <h4>{titres[0]}</h4>
                                        <img className="img_article" src={images[0]}></img>
                                        <div className="text_article">{texte1}...</div>
                                    </div>
                                    <div id="article2" className="article">
                                        <h4>{titres[1]}</h4>
                                        <img className="img_article" src={images[1]}></img>
                                        <div className="text_article">{textes[1]}...</div>
                                    </div>
                                    
                                    <div id="article3" className="article">
                                    <h4>{titres[2]}</h4>
                                        <img className="img_article" src={images[2]}></img>
                                        <div className="text_article">{textes[2]}...</div>
                                    </div>
                                    
                                    <div id="article4" className="article">
                                    <h4>{titres[3]}</h4>
                                        <img className="img_article" src={images[3]}></img>
                                        <div className="text_article">{textes[3]}...</div>
                                    </div>
                                    
                                    <div id="article5" className="article">
                                    <h4>{titres[4]}</h4>
                                        <img className="img_article" src={images[4]}></img>
                                        <div className="text_article">{textes[4]}...</div>
                                    </div>
                                    
                                    <div id="article6" className="article">
                                    <h4>{titres[5]}</h4>
                                        <img className="img_article" src={images[5]}></img>
                                        <div className="text_article">{textes[5]}...</div>
                                    </div>
                                    
                                    <div id="article7" className="article">
                                    <h4>{titres[6]}</h4>
                                        <img className="img_article" src={images[6]}></img>
                                        <div className="text_article">{textes[6]}...</div>
                                    </div>
                                    
                                    <div id="article8" className="article">
                                    <h4>{titres[7]}</h4>
                                        <img className="img_article" src={images[7]}></img>
                                        <div className="text_article">{textes[7]}...</div>
                                    </div>
                                    
                                    <div id="article9" className="article">
                                    <h4>{titres[8]}</h4>
                                        <img className="img_article" src={images[8]}></img>
                                        <div className="text_article">{textes[8]}...</div>
                                    </div>
                                    
                                    <div id="article10" className="article">
                                    <h4>{titres[9]}</h4>
                                        <img className="img_article" src={images[9]}></img>
                                        <div className="text_article">{textes[9]}...</div>
                                    </div>

                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </Form>
                </div>
            </div>
        </div>
    )
}