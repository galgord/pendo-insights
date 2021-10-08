import React from 'react'
import App from './App'
import store from './src/store/store'
import { Provider } from 'react-redux'
import {registerRootComponent} from 'expo'
const AppWrapper = () => {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default registerRootComponent(AppWrapper);
