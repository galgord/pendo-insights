import { SAVE_USER } from "./taskTypes";
const initialState = {
    user: {}
}
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER:
            return {
                user: action.payload
            }
        default:
            return state;
    }
}
export default taskReducer
