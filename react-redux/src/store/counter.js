import { createSlice } from "@reduxjs/toolkit"

const initialCounterState = {
    value: 0,
    showCounter: true

}
const counterSlice = createSlice({
    name: 'counter',
    initialCounterState: initialCounterState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        increase(state, action) {
            state.value = state.value + action.payload.amount
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }

    }
})


export const counterActions = counterSlice.actions

export default counterSlice.reducer