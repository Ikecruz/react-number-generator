import Header from "./components/header"
import { useState } from "react";

const App = () => {

    let [number, setNumber] = useState(null);

    const changeNumber = () => {
        setNumber(Math.floor(Math.random() * 100));
    }

    return(
        <div>
            <Header />
            <div className="body_contain">
                <div>
                    <p className="generated">Generated Number :</p>
                    <p className="number">{ number || "Click button to generate number" }</p>
                    <button className="btn" onClick={() => changeNumber()}>Generate Number</button>
                </div>
            </div>
        </div>
    )
}

export default App;