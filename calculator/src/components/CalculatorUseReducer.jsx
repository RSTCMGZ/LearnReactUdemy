import { useReducer } from 'react'
import './Calculator.css'
import { initialState, reducer } from './reducers/ReducerCalculator'

export const CalculatorUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleNumber1Change = (e) => {
        dispatch({ type: 'SET_NUMBER1', payload: Number(e.target.value) })
    }
    const handleNumber2Change = (e) => {
        dispatch({ type: 'SET_NUMBER2', payload: Number(e.target.value) })
    }

    const handleAddition = () => {
        dispatch({ type: 'SET_RESULT', payload: state.number1 + state.number2 })
        dispatch({ type: 'RESET' });

    }
    return (
        <div className="calculator-container">
            <h1>useReducer</h1>
            <div className="form-container">
                <div className="form-group">
                    <label htmlFor="number1" className="form-label">Number1</label>
                    <input type="number" className="form-input" id="number1" onChange={handleNumber1Change}
                        value={state.number1}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="number2" className="form-label">Number2</label>
                    <input type="number" className="form-input" id="number2"
                        onChange={handleNumber2Change}
                        value={state.number2}

                    />
                </div>
                <button className="form-button"
                    onClick={handleAddition}

                >
                    Add
                </button>
                <div className="form-group">
                    <label htmlFor="result" className="form-label">Result</label>
                    <input type="number" className="form-input" id="result" readOnly
                        value={state.result}
                    />
                </div>
            </div>
        </div>
    )
}