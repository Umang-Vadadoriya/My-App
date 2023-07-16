import React, { useReducer } from 'react'

const CntReducer = () => {

    const [state, dispatch] = useReducer(reduser, 0);

    function reduser(state, action) {
        switch (action.type) {
            case "A":
                return state + action.payload;
            case "B":
                return state - action.payload;

        }
    }

    return (
        <div>
            <h2>Simple Counter</h2>
            <button onClick={() => dispatch({ type: "A", payload: 1 })}> + </button>
            {state}
            <button onClick={() => dispatch({ type: "B", payload: 1 })}> - </button>
        </div>
    )
}

export default CntReducer
