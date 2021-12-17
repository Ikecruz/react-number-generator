import Header from "./components/header.js";
import { useState } from "react";
import Footer from "./components/footer.js";

const App = () => {

    let [number, setNumber] = useState(null);

    const changeNumber = () => {
        setNumber(Math.floor(Math.random() * 100));
    }

    const displayNumber = () => {
        if(number == null){
            return <p className="number">{ "Click button to generate number" }</p>
        } else {
            return <p className="number">{ number }</p>
        }
    }

    return(
        <div>
            <Header />
            <div className="body_contain">
                <div>
                    <p className="generated">Generated Number :</p>
                    {displayNumber()}
                    <button className="btn" onClick={() => changeNumber()}>Generate Number</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App;