import React from 'react'
import App from './App'
import store from './src/store/store'
import { Provider } from 'react-redux'
import {registerRootComponent} from 'expo'
// import axios from "axios";
// axios.defaults.baseURL = 'https://app.pendo.io/api/aggregation/s/';
// axios.defaults.headers.common['cookie'] = 'pendo.sess.jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVHlwZSI6Imdvb2dsZSIsImV4cCI6MTYzNDMwODc4MywiZ3JhbnRUaW1lIjoiMTZhYzE1MWRlODhkY2I5MSIsImlhdCI6MTYzMzcwMzk4MywibmJmIjoxNjMzNzAzOTgzLCJzZXNzaW9uRXBvY2giOiIxNjhkOWRiNGE1MWY3NjU1Iiwic2Vzc2lvbmlkIjoiNGM2ZWVlN2E4NDViMTdmZCIsInVzZXJpZCI6IjU2NDU4ODgyNjAyNzYyMjQiLCJ2ZW5kb3JJZCI6ImI0NzlkMmNkLTgzOTgtNDU4Ni04ZDcyLTJjNTQyYTU2MDFmMyIsInZlbmRvclVzZXJJZCI6IjgzZWE5YzkzLTY1NjktNDU3Zi1hNTk5LTAwOTM1N2FiMDIzZSJ9.I7hoMl2wA4G_aZCHj5Gmt31mhHM6-ADo0b1hx8Qi9MA"';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

const AppWrapper = () => {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default registerRootComponent(AppWrapper);
