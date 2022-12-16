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

export default function Generation2() {

    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");


    return (
        <div id="main_container">{MyBody()}
            <div id="articles_container" className="">
                <div id="article1" className="article">
                    <img className="img_article" src={require('.././media/banane.png')}></img>
                    <div className="text_article">le texte</div>
                </div>
                <div id="article2" className="article">
                    <img className="img_article" src={require('.././media/banane.png')}></img>
                    <div className="text_article">le texte</div>
                </div>
                <div id="article3" className="article">
                    <img className="img_article" src={require('.././media/banane.png')}></img>
                    <div className="text_article">le texte</div>
                </div>
                <div id="article4" className="article">
                    <img className="img_article" src={require('.././media/banane.png')}></img>
                    <div className="text_article">le texte</div>
                </div>
                <div id="article5" className="article">
                    <img className="img_article" src={require('.././media/banane.png')}></img>
                    <div className="text_article">le texte</div>
                </div>
                <div id="article6" className="article">
                    <img className="img_article" src={require('.././media/banane.png')}></img>
                    <div className="text_article">le texte</div>
                </div>
                <div id="article7" className="article">
                    <img className="img_article" src={require('.././media/banane.png')}></img>
                    <div className="text_article">le texte</div>
                </div>
                <div id="article8" className="article">
                    <img className="img_article" src={require('.././media/banane.png')}></img>
                    <div className="text_article">le texte</div>
                </div>
                <div id="article9" className="article">
                    <img className="img_article" src={require('.././media/banane.png')}></img>
                    <div className="text_article">le texte</div>
                </div>
                <div id="article10" className="article">
                    <img className="img_article" src={require('.././media/banane.png')}></img>
                    <div className="text_article">le texte</div>
                </div>
                <div id="article11" className="article">
                    <img className="img_article" src={require('.././media/banane.png')}></img>
                    <div className="text_article">le texte</div>
                </div>
                <div id="article12" className="article">
                    <img className="img_article" src={require('.././media/banane.png')}></img>
                    <div className="text_article">le texte</div>
                </div>

            </div>
        </div>
    )

}