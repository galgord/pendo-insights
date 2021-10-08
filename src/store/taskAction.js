import { SAVE_USER } from "./taskTypes"

export const saveUser = (user) => ({
    type: SAVE_USER,
    payload: user
})
