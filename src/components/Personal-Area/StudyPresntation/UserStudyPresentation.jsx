import React from "react";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import './UserStudyPresentation.css';
import usersData from '../../Data/users.json';
import { userIndexContext } from "../../../Contexts/userIndexContext";
import command from '../../../../Files/FullStack/Intro Basics/command.pdf'
import downloads from '../../../../Files/FullStack/Intro Basics/downloads.pdf'
import GITcheatsheat from '../../../../Files/FullStack/Intro Basics/GITCheatsheat.pdf'
import Githubbasics from '../../../../Files/FullStack/Intro Basics/Githubbasics.pdf'
import MERN from '../../../../Files/FullStack/Intro Basics/MERN.pdf'
import TheWebhttpprotocol from '../../../../Files/FullStack/Intro Basics/TheWebhttpprotocol.pdf'
import webdevelopmenframeworks from '../../../../Files/FullStack/Intro Basics/webdevelopmenframeworks.pdf'
import ApplyingCSStoHTML from '../../../../Files/FullStack/HTML & CSS/ApplyingCSStoHTML.pdf'
import Boxmodel from '../../../../Files/FullStack/HTML & CSS/Boxmodel.pdf'
import CSSGrid from '../../../../Files/FullStack/HTML & CSS/CSSGrid.pdf'
import CSSIntroduction from '../../../../Files/FullStack/HTML & CSS/CSSIntroduction.pdf'
import CSSSelectors from '../../../../Files/FullStack/HTML & CSS/CSSSelectors.pdf'
import HTMLTables from '../../../../Files/FullStack/HTML & CSS/HTMLTables.pdf'
import introductiontoHTML from '../../../../Files/FullStack/HTML & CSS/introductiontoHTML.pdf'
import listslinks from '../../../../Files/FullStack/HTML & CSS/listslinks.pdf'
import Marginspaddingborders from '../../../../Files/FullStack/HTML & CSS/Marginspaddingborders.pdf'
import PositionsTransformbeforeafterexercises from '../../../../Files/FullStack/HTML & CSS/PositionsTransformbeforeafterexercises.pdf'
import properties from '../../../../Files/FullStack/HTML & CSS/properties.pdf'
import QuizandAnswers from '../../../../Files/FullStack/HTML & CSS/QuizandAnswers.pdf'
import Specificity from '../../../../Files/FullStack/HTML & CSS/Specificity.pdf'
import TagsAttributesandElements from '../../../../Files/FullStack/HTML & CSS/TagsAttributesandElements.pdf'
import Units from '../../../../Files/FullStack/HTML & CSS/Units.pdf'
import Webbrowsers from '../../../../Files/FullStack/HTML & CSS/Webbrowsers.pdf'
import Recommendedlearningsites from '../../../../Files/FullStack/JavaScript/Recommendedlearningsites.pdf'
import Javascriptsyntax from '../../../../Files/FullStack/JavaScript/Javascriptsyntax.pdf'
import JSVariables from '../../../../Files/FullStack/JavaScript/JSVariables.pdf'
import Scope from '../../../../Files/FullStack/JavaScript/Scope.pdf'
import JSFunctions from '../../../../Files/FullStack/JavaScript/JSFunctions.pdf'
import Objectsandarrays from '../../../../Files/FullStack/JavaScript/Objectsandarrays.pdf'
import JSfunctionsobjectsandarraysbasicexercises from '../../../../Files/FullStack/JavaScript/JSfunctionsobjectsandarraysbasicexercises.pdf'
import Ifelsestatements from '../../../../Files/FullStack/JavaScript/Ifelsestatements.pdf'
import IfElseexercises from '../../../../Files/FullStack/JavaScript/IfElseexercises.pdf'
import Switch from '../../../../Files/FullStack/JavaScript/Switch.pdf'
import JSLoops from '../../../../Files/FullStack/JavaScript/JSLoops.pdf'
import JSloopsexercises from '../../../../Files/FullStack/JavaScript/JSloopsexercises.pdf'
import JSArraymethods from '../../../../Files/FullStack/JavaScript/JSArraymethods.pdf'
import JSArraymethodsCheatSheet from '../../../../Files/FullStack/JavaScript/JSArraymethodsCheatSheet.pdf'
import JSStringMethods from '../../../../Files/FullStack/JavaScript/JSStringMethods.pdf'
import JSStringmethodsCheatSheet from '../../../../Files/FullStack/JavaScript/JSStringmethodsCheatSheet.pdf'
import Javascriptobjectmethods from '../../../../Files/FullStack/JavaScript/Javascriptobjectmethods.pdf'
import ObjectmethodCheatSheet from '../../../../Files/FullStack/JavaScript/ObjectmethodCheatSheet.pdf'
import Asynchronouscode from '../../../../Files/FullStack/JavaScript/Asynchronouscode.pdf'
import JSPerformance from '../../../../Files/FullStack/JavaScript/JSPerformance.pdf'
import JSCleanCode from '../../../../Files/FullStack/JavaScript/JSCleanCode.pdf'
import JSON from '../../../../Files/FullStack/JavaScript/JSON.pdf'
import JSloopsmethodsExercises from '../../../../Files/FullStack/JavaScript/JSloopsmethodsExercises.pdf'
import DOMmanipulation from '../../../../Files/FullStack/JavaScript/DOMmanipulation.pdf'
import WeatherappvanillaJS from '../../../../Files/FullStack/JavaScript/WeatherappvanillaJS.pdf'
import { introContext } from "../../../Contexts/introContext";
import { htmlContext } from '../../../Contexts/htmlContext';
import { jsContext } from '../../../Contexts/jsContext';



const UserStudyPresentation = () => {

    const pdfImg = <img id="pdf-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAv0lEQVR4nM3SPQrCMBjG8eDi4iQU8vzTsVdwExTv4FkcdXJ18wQKnsBJUHDRI3gEF0F06VQpRCjS2g8XXwghb5JfPo35qwDmkmIg+ShP59ywFJAUh2HYzYFT5FqKAElRXlLfI6NGAJnj1AYqj8F3SjoDq1+AG/D4BdhI2pumASwknYwxrVo7iKKo7ZwbA3d/42m9rXOEo3/zpbW2J+kCrCsDknbAIQiCTk7fLPsf0nYh9GWBiQemtSe/w1o7yCZeMBJFrD6p2tIAAAAASUVORK5CYII=" />
    const [displayIntroStyle, setDisplayIntroStyle] = useState('visible');
    const [displayHTMLStyle, setDisplayHTMLStyle] = useState('visible');
    const [displayJSStyle, setDisplayJSStyle] = useState('visible');
    const [btn, setBtn] = useState('-');
    const [btnStyle, setBtnStyle] = useState('hidden-btn');
    const { userIndex } = useContext(userIndexContext);
    const {introStyle, setIntroStyle} = useContext(introContext);
    const {htmlStyle, setHtmlStyle} = useContext(htmlContext);
    const {jsStyle, setJsStyle} = useContext(jsContext);


    useEffect(()=> {
        if (usersData.users[userIndex].username === 'admin') {
            setBtnStyle('visible-btn');
        }
    }, [])

    function handleIntroDisplay() {
        if (introStyle === 'visible') {
            setIntroStyle('hidden');
            setBtn('+');
        } else {
            setIntroStyle('visible');
            setBtn('-');
        }
    }

    function handleHTMLDisplay() {
        if (htmlStyle === 'visible') {
            setHtmlStyle('hidden');
            setBtn('+');
        } else {
            setHtmlStyle('visible');
            setBtn('-');
        }
    }

    function handleJSDisplay() {
        if (jsStyle === 'visible') {
            setJsStyle('hidden');
            setBtn('+');
        } else {
            setJsStyle('visible');
            setBtn('-');
        }
    }

    return (
        <div className="user-study-area-holder">
            <div className="userStudyArea">
                <div id="files-header">Course's Files</div>
                <div className="files-outer-container">
                    <div className="files-headers"><button className="foldBtn" id={btnStyle} onClick={handleIntroDisplay}>{btn}</button> Intro Basics</div>
                    <div className="files-container" id={introStyle}>
                        <a id="files" href={command} download>{pdfImg} command line navigation v0.1</a>
                        <a id="files" href={downloads} download>{pdfImg} Downloads v0.1</a>
                        <a id="files" href={GITcheatsheat} download>{pdfImg} GIT Cheatsheat v0.1</a>
                        <a id="files" href={Githubbasics} download>{pdfImg} Github basics v0.1</a>
                        <a id="files" href={MERN} download>{pdfImg} MERN v0.1</a>
                        <a id="files" href={TheWebhttpprotocol} download>{pdfImg} The Web + http protocol v0.1</a>
                        <a id="files" href={webdevelopmenframeworks} download>{pdfImg} web development frameworks v0.1</a>
                    </div>
                </div>
                <div className="files-outer-container">
                    <div className="files-headers"><button className="foldBtn" id={btnStyle} onClick={handleHTMLDisplay}>{btn}</button> HTML & CSS</div>
                    <div className="files-container" id={htmlStyle}>
                        <a id="files" href={ApplyingCSStoHTML} download>{pdfImg} Applying CSS to HTML v0.1</a>
                        <a id="files" href={Boxmodel} download>{pdfImg} Box model v0.1</a>
                        <a id="files" href={CSSGrid} download>{pdfImg} CSS Grid</a>
                        <a id="files" href={CSSIntroduction} download>{pdfImg} CSS Introduction v0.1</a>
                        <a id="files" href={CSSSelectors} download>{pdfImg} CSS Selectors v0.1</a>
                        <a id="files" href={HTMLTables} download>{pdfImg} HTML Tables v0.1</a>
                        <a id="files" href={introductiontoHTML} download>{pdfImg} introduction to HTML v0.1</a>
                        <a id="files" href={listslinks} download>{pdfImg} lists links v0.1</a>
                        <a id="files" href={Marginspaddingborders} download>{pdfImg} Margins, padding, borders v0.1</a>
                        <a id="files" href={PositionsTransformbeforeafterexercises} download>{pdfImg} Positions, Transform  before_after exercises</a>
                        <a id="files" href={properties} download>{pdfImg} properties v0.1</a>
                        <a id="files" href={QuizandAnswers} download>{pdfImg} Quiz and Answers v0.1</a>
                        <a id="files" href={Specificity} download>{pdfImg} Specificity v0.1</a>
                        <a id="files" href={TagsAttributesandElements} download>{pdfImg} Tags, Attributes and Elements v0.1</a>
                        <a id="files" href={Units} download>{pdfImg} Units v0.1</a>
                        <a id="files" href={Webbrowsers} download>{pdfImg} Web browsers v0.1</a>
                    </div>
                </div>
                <div className="files-outer-container">
                    <div className="files-headers"><button className="foldBtn" id={btnStyle} onClick={handleJSDisplay}>{btn}</button> JavaScript</div>
                    <div className="files-container" id={jsStyle}>
                        <a id="files" href={Recommendedlearningsites} download>{pdfImg} Recommended learning sites</a>
                        <a id="files" href={Javascriptsyntax} download>{pdfImg} Javascript syntax v0.1</a>
                        <a id="files" href={JSVariables} download>{pdfImg} JS Variables v0.1</a>
                        <a id="files" href={Scope} download>{pdfImg} Scope v0.1</a>
                        <a id="files" href={JSFunctions} download>{pdfImg} JS Functions v0.1</a>
                        <a id="files" href={Objectsandarrays} download>{pdfImg} Objects and arrays v0.1</a>
                        <a id="files" href={JSfunctionsobjectsandarraysbasicexercises} download>{pdfImg} JS functions - objects and arrays basic exercises</a>
                        <a id="files" href={Ifelsestatements} download>{pdfImg} If-else statements v0.1</a>
                        <a id="files" href={IfElseexercises} download>{pdfImg} If Else exercises</a>
                        <a id="files" href={Switch} download>{pdfImg} Switch v0.1</a>
                        <a id="files" href={JSLoops} download>{pdfImg} JS Loops v0.1</a>
                        <a id="files" href={JSloopsexercises} download>{pdfImg} JS loops exercises</a>
                        <a id="files" href={JSArraymethods} download>{pdfImg} JS Array methods v0.1</a>
                        <a id="files" href={JSArraymethodsCheatSheet} download>{pdfImg} JS Array methods Cheat Sheet v0.1</a>
                        <a id="files" href={JSStringMethods} download>{pdfImg} JS String Methods v0.1</a>
                        <a id="files" href={JSStringmethodsCheatSheet} download>{pdfImg} JS String Methods Cheatsheets v0.1</a>
                        <a id="files" href={Javascriptobjectmethods} download>{pdfImg} Javascript object methods v0.1</a>
                        <a id="files" href={ObjectmethodCheatSheet} download>{pdfImg} Object method Cheat Sheet v0.1</a>
                        <a id="files" href={Asynchronouscode} download>{pdfImg} Asynchronous code v0.1</a>
                        <a id="files" href={JSPerformance} download>{pdfImg} JS Performance v0.1</a>
                        <a id="files" href={JSCleanCode} download>{pdfImg} JS Clean Code v0.1</a>
                        <a id="files" href={JSON} download>{pdfImg} JSON v0.1</a>
                        <a id="files" href={JSloopsmethodsExercises} download>{pdfImg} JS loopsmethods Exercises</a>
                        <a id="files" href={DOMmanipulation} download>{pdfImg} DOM manipulation</a>
                        <a id="files" href={WeatherappvanillaJS} download>{pdfImg} Weather app - vanilla JS</a>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default UserStudyPresentation