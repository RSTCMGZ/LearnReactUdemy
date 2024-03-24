import './Calculator.css'
export const CalculatorUseReducer = () => {
    return (
        <div className="calculator-container">
            <h1>useReducer</h1>
            <div className="form-container">
                <div className="form-group">
                    <label htmlFor="number1" className="form-label">Number1</label>
                    <input type="number" className="form-input" id="number1" />
                </div>
                <div className="form-group">
                    <label htmlFor="number2" className="form-label">Number2</label>
                    <input type="number" className="form-input" id="number2" />
                </div>
                <button className="form-button">
                    Add
                </button>
                <div className="form-group">
                    <label htmlFor="result" className="form-label">Result</label>
                    <input type="number" className="form-input" id="result" />
                </div>
            </div>
        </div>
    )
}