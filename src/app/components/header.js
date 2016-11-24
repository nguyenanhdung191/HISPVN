const React = require("react");

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="#home" className="logo"><img className="logoImage" src="img/logo.png"/></a></li>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#news">ABOUT US</a></li>
                    <li><a href="#contact">PROJECTS</a></li>
                    <li><a href="#about">NEWS</a></li>
                    <li><a href="#about">LEARN</a></li>
                </ul>
            </div>
        );
    }
}