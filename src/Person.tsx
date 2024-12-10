import { useState } from "react";

export interface Person {
    name:       string;
    age:        number;
    isMarried:  boolean;
}

export const Person = (props: Person) => {

    const [isShowInfo, setShowInfo] = useState<boolean>(false);

    const [personBio, setPersonBio] = useState<string | null>(null);

    const toggleInfo = () => {
        setShowInfo((prev) => !prev);
    }

    const handleChange = () => {
        setPersonBio();
    }

    return(
        <div className="divider">
            {isShowInfo && (
                <>
                    <p>Name: {props.name}</p>
                    <p>Age: {props.age}</p>
                    <p>This person {props.isMarried ? "is married" : "is single"}</p>
                </>
                
            )}
            <div>
                <button onClick={toggleInfo}>Toggle Info</button>
            </div>
            <div>
                {""}
                <p>{props.name}'s Bio: {!personBio ? "No Available Bio" : personBio}</p>
                <input onChange={handleChange} type="text" />
            </div>
        </div>
    )
}

export default Person;