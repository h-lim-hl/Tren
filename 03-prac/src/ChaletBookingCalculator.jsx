import { useState } from "react";

const ChaletBookingCalculator = () => {
    const CHALET_TYPE_STANDARD = "standard";
    const CHALET_TYPE_DELUXE = "deluxe";
    const CHALET_EXTRA_BBQSET = "bbqSet";
    const CHALET_EXTRA_BREAKFAST = "breakfast";
    const CHALET_LOCAITON_BEACHFRONT = "Breachfront";
    const CHALET_LOCAITON_MOUNTAINSIDE = "Mountainside";
    const CHALET_LOCAITON_FOREST = "Forest";

    // State hooks
    // TODO: Declare necessary state variables using useState
    const [numNights, setNumNights] = useState(0);
    const [chaletType, setChaletTyoe] = useState(CHALET_TYPE_STANDARD);
    const [extras, setExtras] = useState([]);
    const [location, setLocation] = useState(CHALET_LOCAITON_BEACHFRONT);

    // TODO: Implement the calculateFee function
    function calculateFee () {
        const STANDARD_PER_NIGHT = 100;
        const DELUXE_PER_NIGHT = 200;
        const BBQ_EXTRA = 50;
        const BREAKFAST_EXTRA = 20;

        return (chaletType === CHALET_TYPE_STANDARD ?
                  STANDARD_PER_NIGHT : DELUXE_PER_NIGHT) * numNights 
                + (extras.includes(CHALET_EXTRA_BBQSET)? BBQ_EXTRA : 0)
                + (extras.includes(CHALET_EXTRA_BREAKFAST)? BREAKFAST_EXTRA : 0);
    }

    // TODO: Implement the handleCheckboxChange function
    const handleCheckboxChange = (event) => {
        const targetValue = event.target.value;
        let newExtras;
        if(extras.includes(targetValue)) {
            newExtras = extras.filter((elem)=>{ elem != targetValue});
        } else {
            newExtras = [...extras, targetValue];
        }
        setExtras(newExtras);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Implement the handleSubmit function logic
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container mt-5">
                <h2 className="mb-4">Chalet Booking Calculator</h2>

                <div className="form-group">
                    <label htmlFor="nights">Nights to stay:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="nights"
                        // TODO: Add state bindings for this input
                    />
                    {/* TODO: Implement validation feedback */}
                </div>

                <div className="form-group">
                    <label>Chalet Type:</label>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            id="standard"
                            name="chaletType"
                            value="standard"
                            // TODO: Add state bindings for this input
                        />
                        <label htmlFor="standard" className="form-check-label">Standard</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            id="deluxe"
                            name="chaletType"
                            value="deluxe"
                            // TODO: Add state bindings for this input
                        />
                        <label htmlFor="deluxe" className="form-check-label">Deluxe</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Extras:</label>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="bbqSet"
                            value="bbqSet"
                            // TODO: Add state bindings for this input
                            checked={extras.includes("bbqSet")}
                            onClick={handleCheckboxChange}
                        />
                        <label htmlFor="bbqSet" className="form-check-label">BBQ Set</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="breakfast"
                            value="breakfast"
                            // TODO: Add state bindings for this input
                            checked={extras.includes("breakfast")}
                            onClick={handleCheckboxChange}
                        />
                        <label htmlFor="breakfast" className="form-check-label">Breakfast</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Location:</label>
                    <select
                        className="form-control"
                        // TODO: Add state bindings for this select
                    >
                        <option value="beachfront">Beachfront</option>
                        <option value="mountainside">Mountainside</option>
                        <option value="forest">Forest</option>
                    </select>
                </div>

                <button className="btn btn-primary" type="submit">Calculate Fee</button>
            </div>
        </form>
    );
};

export default ChaletBookingCalculator;
