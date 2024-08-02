import { useState } from "react";

function Logo(){
    return (
        <img className="logo" src="logo-color-1x.png" alt="logo"/>
    );
}

function List({className, title, number}){
    let rows = [];
    let i = 1;
    while(i <= number){
        rows.push(
            <li id={`${title} ${i}`} key={`${title} ${i}`}>{`${title} ${i}`}</li>
        )
        i++;
    }
    return (
        <ul className={className}>
            {rows}
        </ul>
    );
}


function Menu(){

    return ( 
        <ul className="menu-list"> 
            <li className="tooltip-menu"><a href="index.html" target="_top" className="tooltip-menu">Home <img id="drop-arrow" src="image/right-triangular-arrowhead.png" alt="fav" /> </a>
                   <List className={`tooltiptext-menu `} title={"Demo Template"} number={8}/>  
            </li>
            <li><a href="index.html" target="_blank">About</a></li>
            <li><a href="index.html" target="_blank">Features</a></li>
            <li><a href="index.html" target="_blank">Pricing</a></li>
            <li><a href="index.html" target="_blank">Screenshots</a></li>
            <li className="tooltip-menu"><a href="index.html" target="_blank">Pages <img id="drop-arrow" src="image/right-triangular-arrowhead.png" alt="fav" /></a>
                <ul className="tooltiptext-menu">
                    <li>Login Page 1</li>
                    <li>Login Page 2</li>
                    <li>Signup Page 1</li>
                    <li>Signup Page 2</li>
                    <li>Password Reset</li>
                    <li>Change Password</li>
                    <li>Download Page</li>
                    <li>Review Page</li>
                    <li>FAQ Page</li>
                    <li>404 Page</li>
                    <li>Comming Soon</li>
                    <li>Thank You</li>
                    <li>Team Page</li>
                    <li>Team Single</li>
                </ul>
            </li>
            <li className="tooltip-menu"><a href="index.html" target="_blank">Blog <img id="drop-arrow" src="image/right-triangular-arrowhead.png" alt="fav" /></a>
                <nav className="tooltip-text"> <p> New </p> </nav>
                <ul className="tooltiptext-menu">
                    <li>Blog grid</li>
                    <li>Blog Left Sidebar</li>
                    <li>Details Right Sidebar</li>
                </ul>
            </li>
            <li><a href="index.html" target="_blank">Team</a></li>
            <li><a href="index.html" target="_blank">Contact</a></li>
        </ul>
    );
}

function IconMenu(){
    return (
        <div className="icon-menu">
            <img src="image/menu.png" alt="favicon" />
        </div>
    );
}

function MenuVertical(){
    return (
            <div className="menu-vertical">
                <ul>
                    <li className="tooltip-menu"><p className="tooltip-menu">Home <img id="drop-arrow" src="image/right-triangular-arrowhead.png" alt="fav" /></p>
                        <ul className="tooltiptext-menu"> 
                            <li>Demo Template 1</li>
                            <li>Demo Template 2</li>
                            <li>Demo Template 3</li>
                            <li>Demo Template 4</li>
                            <li>Demo Template 5</li>
                            <li>Demo Template 6</li>
                            <li>Demo Template 7</li>
                            <li>Demo Template 8</li>
                        </ul>
                    </li>
                    <li>About</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Screenshots</li>
                    <li className="tooltip-menu"><p>Pages <img id="drop-arrow" src="image/right-triangular-arrowhead.png" alt="fav" /></p>
                        <ul className="tooltiptext-menu">
                            <li>Login Page 1</li>
                            <li>Login Page 2</li>
                            <li>Signup Page 1</li>
                            <li>Signup Page 2</li>
                            <li>Password Reset</li>
                            <li>Change Password</li>
                            <li>Download Page</li>
                            <li>Review Page</li>
                            <li>FAQ Page</li>
                            <li>404 Page</li>
                            <li>Comming Soon</li>
                            <li>Thank You</li>
                            <li>Team Page</li>
                            <li>Team Single</li>
                        </ul>
                    </li>
                    <li className="tooltip-menu"><p>Blog <img id="drop-arrow" src="image/right-triangular-arrowhead.png" alt="fav" /></p>
                        <ul className="tooltiptext-menu">
                            <li>Blog grid</li>
                            <li>Blog Left Sidebar</li>
                            <li>Details Right Sidebar</li>
                        </ul>
                    </li>
                    <li>Team</li>
                    <li>Contact</li>
                </ul>
        </div>
    );
}

function Nav(){
    return (
        <div >
            <Logo />
            <Menu />
            <IconMenu />
            <MenuVertical />
        </div>
    );
}

function Head(){

    return (
        <h1 style={{color:"white"}}> Customer Say About Us</h1>
    );
}


function Header(){

    return(
        <div className="header">
            <Head />
            <a href="index.html" target="top" rel="noopener noreferrer"> Home </a> <p> `{'> >'}` Review</p>
        </div>
    );
}

function Paragraph({selected, onClick, src}){

    return ( 
        <div className={`paragraph-1 ${selected ? 'selected' : ''}` } onClick={onClick}>

                   <img src="image/icon.png" alt="icon" /> <p>Rapidiously develop user friendly growth strategies after extensive initiatives. 
                        Conveniently grow innovative benefits through fully tested deliverables. 
                        Rapidiously utilize focused platforms through end-to-end schemas
                    </p>
                    <div className="portrait-name">
                        <span><img src={src} alt="img" /></span>
                        <span className="cont">
                            <h3>Arabella Orin</h3><br/>
                            <p>AppCo</p>
                        </span>
                    </div>
                </div>
    );
}

function Content(){
    let [selectedParagraph, setSelectedParagraph] = useState(false);



    return (
        <div className="content">
            <div className="content-in">
                <Paragraph src="image/client-1.jpg" selected={selectedParagraph===1} onClick={(e) => setSelectedParagraph(1)}/>
                <Paragraph src="image/client-2.jpg" selected={selectedParagraph===2} onClick={(e) => setSelectedParagraph(2)}/>
                <Paragraph src="image/client-3.jpg" selected={selectedParagraph===3} onClick={(e) => setSelectedParagraph(3)}/>
                <Paragraph src="image/client-4.jpg" selected={selectedParagraph===4} onClick={(e) => setSelectedParagraph(4)}/>
                <Paragraph src="image/client-5.jpg" selected={selectedParagraph===5} onClick={(e) => setSelectedParagraph(5)}/>
                <Paragraph src="image/client-1.jpg" selected={selectedParagraph===6} onClick={(e) => setSelectedParagraph(6)}/>
            </div>
        </div>
    );
}

function Subsol(){
    return (
        <div className="subsol">
            <div className="content-subsol">
                <div id="desc">
                    <Logo />
                    <p>Holisticly empower premium architectures without value-added ideas. Seamlessly evolve cross-platform experiences.</p><br/>
                    <a href="https://www.facebook.com/"><img className="fav" src="image/facebook-app-symbol.png" alt="favicon" /></a>
                    <a href="https://www.x.com/"><img className="fav" src="image/twitter.png" alt="favicon" /></a>
                    <a href="https://www.pinterest.com/"><img className="fav" src="image/pinterest-logo.png" alt="favicon" /></a>
                    <a href="https://www.instagram.com/"><img className="fav" src="image/instagram.png" alt="favicon" /></a>
                </div>
                <div id="others-links">
                    <h3>Others Links</h3><br />
                    <a href="index.html" target="_top"><p>About Us</p></a><br/>
                    <a href="index.html" target="_top"><p>Contact Us</p></a><br/>
                    <a href="index.html" target="_top"><p>Pricing</p></a><br/>
                    <a href="index.html" target="_top"><p>Privacy Policy</p></a><br/>
                    <a href="index.html" target="_top"><p>Terms and Conditions</p></a><br/>
                </div>
                <div id="support">
                    <h3>Support</h3><br/>
                    <div id="icon">
                        <img src="image/placeholder.png" alt="favicon"/>
                        <img src="image/smartphone-call.png" alt="favicon"/>
                        <img src="image/mail.png" alt="favicon"/>
                        <img src="image/globe.png" alt="favicon"/>
                    </div>
                    <div className="support-date">
                        <p>121 King Melbourne</p><br/>
                        <p>Australia 3000</p>
                        <a href="+61 2 8376 6284">+61 2 8376 6284</a><br/>
                        <a href="mail@example.com">mail@example.com</a><br/>
                        <a href="www.yourdomain.com">www.yourdomain.com</a>
                    </div>
                </div>
                <div id="location">
                    <h3>Location</h3><br/>
                    <img src="image/map.png" alt="map" />
                </div>
            </div>
        </div>
    );
}

function Footer(){
    return (
        <footer>
            <p>Copyrights © 2024 All rights reserved by<a href="index.html ">ThemeTags</a></p>
        </footer>
    );
}

function Continer(){
    return (
        <div className="continer">
            <Header />
            <Content />
            <Subsol />
            <Footer />
        </div>
    );
}


export default function app(){
    return (
        <>
            <Nav />
            <Continer />
        </>
    );
}


// e.stopPropagation()oprește declanșarea gestionatorilor de evenimente atașați etichetelor de mai sus.

// e.preventDefault() previne comportamentul implicit al browserului pentru puținele evenimente care îl au.