import { useState } from "react";

export default function Checkbox() {

    const [skills, setSkills] = useState([]);


    const handleSkills = (e) => {
        const { id, checked } = e.target;
        if (checked) {
            setSkills([...skills, id]);
        } else {
            setSkills(skills.filter((skill) => skill !== id));
        }
    }

    return (
        <div>
            <h3>Checkbox</h3>
            <h4>Select Skills - </h4>

            <div>
                <div>
                    <input
                        id="java"
                        type="checkbox"
                        value={"java"}
                        onChange={handleSkills} />
                    <label htmlFor="java">JAVA</label>
                </div>
                <div>
                    <input
                        id="spring"
                        value={"spring"}
                        type="checkbox"
                        onChange={handleSkills} />
                    <label htmlFor="spring">Spring Boot</label>
                </div>
                <div>
                    <input
                        id="js"
                        value={"js"}
                        type="checkbox"
                        onChange={handleSkills} />
                    <label htmlFor="js">JavaScript</label>
                </div>
                <div>
                    <input
                        id="react"
                        value={"react"}
                        type="checkbox"
                        onChange={handleSkills} />
                    <label htmlFor="react">React</label>
                </div>

            </div>

            <h3>Skills :- {skills.toString()} </h3>
        </div>
    )
}
