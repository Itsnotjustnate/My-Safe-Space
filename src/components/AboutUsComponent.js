import React from 'react';
import person_1 from '../images/person_1.jpg';
import person_2 from '../images/person_2.PNG';
import person_3 from '../images/person_3.jpg';
import person_4 from '../images/person_4.jpg';
import person_5 from '../images/person_5.jpg';
function AboutUs() {
    return (
        <div className="Main">
            <h1>About Us</h1>
            <p>
                Here you will find information about us, the students that created this software
                and our backgrounds with computer science.
            </p>
            <p>
                This should be like a json file or something related to it, 
                just in case information should be updated, changed, 
                or other people are added to the project
            </p>
        <div className="People">
            
            <div className="Person_1">
                <div className="Person_Info">
                <h2 className="Name">Preston Fawcett</h2>
                <p className="Bio"> 
                    A CSUF student that is graduating in the 
                    Fall of 2022 with a Computer Science Degree.
                    Some of the languages that he knows can include
                    Python, C++, HTML, CSS, and JavaScript. He has
                    also worked on projects that include a Rubik's
                    Cube Solver and an Online Poker game.
                </p>
                <a href="https://www.linkedin.com/in/ptfawcett" className="Button">LinkedIn</a>
                <a href="http://github.com/PrestonFawcett" className="Button">Github</a>
            </div>
            </div>
            <div className="Person_2">
            <div className="Person_Info">
                <h2 className="Name">Cody Mangham</h2>
                <p className="Bio"> 
                    A CSUF student that is graduating in the 
                    Fall of 2022 with a Computer Science Degree.
                    Some of the languages that he knows can include
                    Python, C++, Java, and React. He has
                    also worked on projects that include a Chat app
                    and a Flash Card website.
                </p>
                <a href="https://www.linkedin.com/in/cody-mangham" className="Button">LinkedIn</a>
                <a href="http://github.com/CodyMang" className="Button">Github</a>
            </div>
            </div>
            <div className="Person_3">
            <div className="Person_Info">
                <h2 className="Name">Kai Eusebio</h2>
                <p className="Bio"> 
                    A CSUF student that is graduating in the 
                    Fall of 2022 with a Computer Science Degree.
                    Some of the languages that he knows can include
                    Python, C++, HTML, CSS, and JavaScript. He has
                    also worked on projects that include a Rubik's
                    Cube Solver and an Online Poker game.
                </p>
                <a href="https://www.linkedin.com/in/keusebio" className="Button">LinkedIn</a>
                <a href="http://github.com/kaieusebio" className="Button">Github</a>
            </div>
            </div>
            <div className="Person_4">
            <div className="Person_Info">
                <h2 className="Name">Kevin Espinoza</h2>
                <p className="Bio"> 
                    A CSUF student that is graduating in the 
                    Fall of 2022 with a Computer Science Degree.
                    Some of the languages that he knows can include
                    Python, C++, HTML, CSS, and JavaScript. He has
                    also worked on projects that include a Rubik's
                    Cube Solver and an Online Poker game.
                </p>
                <a href="https://www.linkedin.com/in/kevin-espinoza-88a0b6208" className="Button">LinkedIn</a>
                <a href="http://github.com/Kevin-Espinoza" className="Button">Github</a>
            </div>
            </div>
            <div className="Person_5">
            <div className="Person_Info">
                <h2 className="Name">Ryan Williams</h2>
                <p className="Bio"> 
                    A CSUF student that is graduating in the 
                    Fall of 2022 with a Computer Science Degree.
                    Some of the languages that he knows can include
                    Python, C++, HTML, CSS, and JavaScript. He has
                    also worked on projects that include a Rubik's
                    Cube Solver and an Online Poker game.
                </p>
                <a href="https://www.linkedin.com/in/ryan-williams-06597a218/" className="Button">LinkedIn</a>
                <a href="https://github.com/ryanwillyams" className="Button">Github</a>
            </div>
            </div>
            <div className="Person_6">
                <div className="Person_Info">
                    <h2 className="Name">Nathan Eduvala</h2>
                    <p className="Bio"> 
                    A CSUF student that is graduating in the 
                    Fall of 2022 with a Computer Science Degree.
                    Some of the languages that he knows can include
                    Python, C++, HTML, CSS, and JavaScript. He has
                    also worked on projects that include a Rubik's
                    Cube Solver and an Online Poker game.
                    </p>
                    <a href="www.linkedin.com/in/nathan-eduvala" className="Button">LinkedIn</a>
                    <a href="https://github.com/Itsnotjustnate" className="Button">Github</a>
                </div>
            </div>
            {/* <div>
                <img src={person_1} alt="Person_1" className="Person"/>
                <img src={person_2} alt="Person_2" className="Person"/>
            </div>
            <div>
                <img src={person_3} alt="Person_3" className="Person"/>
                <img src={person_4} alt="Person_4" className="Person"/>
            </div>
            <div>
            <img src={person_5} alt="Person_5" className="Person"/>
            <img src={person_5} alt="Person_6" className="Person"/>
            </div> */}
            
        </div>
        </div>
    )
}

export default AboutUs;