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
    const [submit, setSubmit] = useState(false);
    const [promptCli, setPromptCli] = useState("");
    const [promptPro, setPromptPro] = useState("");
    const [promptThe, setPromptThe] = useState("");
    const [promptEsp, setPromptEsp] = useState("");
    const [keyWord, setKeyWord] = useState("Key word:" + promptCli + promptEsp + promptPro + promptThe);
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
        for(let i = 5; i < 5; i++){
            const responseRecom = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: "Give me a site made with the application GoodBarber with their description"
                + keyWord,
                max_tokens: 100,
                presence_penalty: 2,
                temperature: 1,
            });
    
            console.log(prompt)
            const responseImage = await openai.createImage({
                prompt: "Give the main image from this site" + responseRecom.data.choices[0].text,
                size: "256x256",
            });
            textes[i] = responseRecom.data.choices[i].text;
            images[i] = responseImage.data.data[i].url;
        }
        
        // for(let i = 0; i < 12; i++){
        //     setConcat([responseTitre.data.choices[i].text, responseArgVente.data.choices[i].text, responseImage.data.data[i].url])
        // }
        setSubmit(true)
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
                    A la recherche d'applications pour vous inspirer? On a ça pour vous!
                </h1>
                <div id="div_form">
                    <Form onSubmit={handleSubmit}>
                        {
                            submit == true ? (
                                <>
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
                                        <Form.Label>Ce que vous proposez?</Form.Label>
                                        <Form.Control
                                            className="app-input"
                                            placeholder="Ex: De la vente, des services... ou même du bénévolat!"
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
                                </>
                            ) : (
                                <></>
                            )
                        }

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