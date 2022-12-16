import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { FormText } from "react-bootstrap";

function MyBody() {

    // useEffect(() => {


    // }
    // )
    return <div>

    </div>

}

function design() {

    var articlecomplet = (document.getElementById("article12") && document.getElementsByClassName("text_article") && document.getElementsByClassName("titre_article") && document.getElementsByClassName("image_article"));
    console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii " + articlecomplet)

    if (articlecomplet) {
        // 1 4
        // 2 5
        // 3 6
        // 4 7
        // 5 8
        // 6 9
        // 7 10
        // 8 11
        // 9 12

        // var container= document.getElementById("main_container")
        // console.log(container)
        // if(container) console.log(container.style.marginTop)

        var i = 1;
        var marge = 50

        for (var count = 0; count < 3; count++) {

            var topdiv = document.getElementById("article" + i);
            if (topdiv) console.log("div" + i + " " + topdiv.offsetHeight);
            var bottomdiv = document.getElementById("article" + (i + 3));
            //console.log(bottomdiv)
            if (topdiv && bottomdiv) {
                document.getElementById("article" + (i + 3)).style.marginTop = topdiv.offsetHeight + marge + "px"
                marge += 50
            }
            i++
        }

        marge = 100

        for (var count = 0; count < 3; count++) {

            var topdiv1 = document.getElementById("article" + (i - 3));
            var topdiv2 = document.getElementById("article" + i);
            var bottomdiv = document.getElementById("article" + (i + 3));
            //console.log(bottomdiv)
            if (topdiv && bottomdiv) {
                document.getElementById("article" + (i + 3)).style.marginTop = topdiv1.offsetHeight + topdiv2.offsetHeight + marge + "px"
                marge += 50
            }
            i++
        }

        marge = 150

        for (var count = 0; count < 3; count++) {

            var topdiv1 = document.getElementById("article" + (i - 6));
            var topdiv2 = document.getElementById("article" + (i - 3));
            var topdiv3 = document.getElementById("article" + i);
            var bottomdiv = document.getElementById("article" + (i + 3));
            //console.log(bottomdiv)
            if (topdiv && bottomdiv) {
                document.getElementById("article" + (i + 3)).style.marginTop = topdiv1.offsetHeight + topdiv2.offsetHeight + topdiv3.offsetHeight + marge + "px"
                marge += 50
            }
            i++
        }
    }

}



export default function Generation3() {

    const [inputs, setInputs] = useState([]);
    const [textes, setTextes] = useState([]);
    const [titres, setTitres] = useState([]);
    const [texte1, setTexte1] = useState([]);
    const [images, setImages] = useState([]);
    //const [result, setResult] = useState([]);
    const [prompt, setPrompt] = useState("");
    const [concat, setConcat] = useState([]);
    const [submit, setSubmit] = useState(false);
    const [rendered, setRendered] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    useEffect(() => {
        setTimeout(() => {
            setRendered(false)
            console.log(rendered)
            design()
        }, "6000")
        setRendered(true)
        console.log(rendered)
    }
    )

    async function handleSubmit(event) {
        event.preventDefault();
        setSubmit(true)
        //  console.log(inputs["firstinput"]);
        //  console.log(process.env.REACT_APP_Open_AI_Key, "sasa")

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
            prompt: prompt,
            n: 10,
            size: "256x256",
        });

        for (let i = 0; i < 10; i++) {
            //   let concat = [responseText.data.choices[i].text, responseImage.data.data[i].url]
            //   result[i] = concat
            titres[i] = responseTitre.data.choices[i].text;
            textes[i] = responseArgVente.data.choices[i].text;
            images[i] = responseImage.data.data[i].url;
            setConcat([responseTitre.data.choices[i].text, responseArgVente.data.choices[i].text, responseImage.data.data[i].url]);
        }


        setTexte1(responseArgVente.data.choices[0].text)
        setTitres(titres)
        setTextes(textes)
        setImages(images)

        console.log("###############")
        console.log(responseArgVente.data.choices[0])
        console.log("###############")
        console.log(responseImage.data.data[0])

        // setResult(result)  
        // console.log(result)      

        setSubmit(false)

    }

    // useEffect(() => {
    //     for (let i = 0; i < 12; i++) {
    //         console.log(concat)
    //         result[i] = concat
    //     }
    //     console.log(result)
    // }
    // )


    return (
        <div>{MyBody()}
            <div id="form_container">
                <h1 id="formtitre11">
                    Avez vous une idée de l'application de vos rêves ?
                </h1>
                <h1 id="formtitre12">
                    Dites nous tout...
                </h1>
                <div id="div_form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                className="app-input"
                                placeholder="description de ce que tu veux"
                                onChange={(e) => setPrompt(e.target.value)}
                                rows="10"
                                cols="40"
                            />
                        </Form.Group>
                        {
                            images.length > 0 ? (
                                <>
                                    <h2 id="formtitre2">Des idées précises pour paufiner votre création?</h2>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="formlabel">Un thème?</Form.Label>
                                        <Form.Control
                                            className="app-input"
                                            placeholder="Ex: Nature, animaux, science, technologie..."
                                            onChange={(e) => setPrompt(e.target.value)}
                                            rows="10"
                                            cols="40"
                                        />

                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="formlabel">Une clientèle visée?</Form.Label>
                                        <Form.Control
                                            className="app-input"
                                            placeholder="Ex: Organisation, particulier, catégorie de personne..."
                                            onChange={(e) => setPrompt(e.target.value)}

                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="formlabel">Ce que vous proposez?</Form.Label>
                                        <Form.Control
                                            className="app-input"
                                            placeholder="Ex: De la vente, des services... ou même du bénévolat!"
                                            onChange={(e) => setPrompt(e.target.value)}

                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="formlabel">Un état d'esprit?</Form.Label>
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
                        <Button id="btn_generer" type="submit">
                            {
                                submit == true ? (
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <></>
                                )
                            } GO !
                        </Button>
                    </Form>
                </div>
            </div>

            {images.length > 0  ? (
                <div id="main_container" rendered={rendered} >
                    <div id="articles_container" className="">
                        <div id="article1" className="article light">
                            <img className="img_article" src={images[0]}></img>
                            <h1 className="titre_article">{titres[0]}</h1>
                            <div className="text_article">{texte1}</div>
                        </div>
                        <div id="article2" className="article dark">
                            <img className="img_article" src={images[1]}></img>
                            <h1 className="titre_article">{titres[1]}</h1>
                            <div className="text_article">{textes[1]}</div>
                        </div>
                        <div id="article3" className="article light">
                            <img className="img_article" src={images[2]}></img>
                            <h1 className="titre_article">{titres[2]}</h1>
                            <div className="text_article">{textes[2]}</div>
                        </div>
                        <div id="article4" className="article dark">
                            <img className="img_article" src={images[3]}></img>
                            <h1 className="titre_article">{titres[3]}</h1>
                            <div className="text_article">{textes[3]}</div>
                        </div>
                        <div id="article5" className="article light">
                            <img className="img_article" src={images[4]}></img>
                            <h1 className="titre_article">{titres[4]}</h1>
                            <div className="text_article">{textes[4]}</div>
                        </div>
                        <div id="article6" className="article dark">
                            <img className="img_article" src={images[5]}></img>
                            <h1 className="titre_article">{titres[5]}</h1>
                            <div className="text_article">{textes[5]}</div>
                        </div>
                        <div id="article7" className="article light">
                            <img className="img_article" src={images[6]}></img>
                            <h1 className="titre_article">{titres[6]}</h1>
                            <div className="text_article">{textes[6]}</div>
                        </div>
                        <div id="article8" className="article dark">
                            <img className="img_article" src={images[7]}></img>
                            <h1 className="titre_article">{titres[7]}</h1>
                            <div className="text_article">{textes[7]}</div>
                        </div>
                        <div id="article9" className="article light">
                            <img className="img_article" src={images[8]}></img>
                            <h1 className="titre_article">{titres[8]}</h1>
                            <div className="text_article">{textes[8]}</div>
                        </div>
                        <div id="article10" className="article light">
                            <img className="img_article" src={images[9]}></img>
                            <h1 className="titre_article">{titres[9]}</h1>
                            <div className="text_article">{textes[9]}</div>
                        </div>
                        <div id="article11" className="article dark">
                            <img className="img_article" src={images[0]}></img>
                            <h1 className="titre_article">{titres[0]}</h1>
                            <div className="text_article">{textes[0]}</div>
                        </div>
                        <div id="article12" className="article dark">
                            <img className="img_article" src={images[2]}></img>
                            <h1 className="titre_article">{titres[2]}</h1>
                            <div className="text_article">{textes[2]}</div>
                        </div>

                    </div>
                </div>
            ) : (
                <></>
            )}


        </div>
    )
}