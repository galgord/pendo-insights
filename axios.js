import axios from 'axios';

const options = {
    headers: {
        'Content-Type': 'application/json',
        'cookie': 'pendo.sess.jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVHlwZSI6Imdvb2dsZSIsImV4cCI6MTYzNTE3Nzc3OCwiZ3JhbnRUaW1lIjoiMTZhZjJiNzY5YTdmMDQ3OCIsImlhdCI6MTYzNDU3Mjk3OCwibmJmIjoxNjM0NTcyOTc4LCJzZXNzaW9uRXBvY2giOiIxNjhkOWRiNGE1MWY3NjU1Iiwic2Vzc2lvbmlkIjoiMmI5Yjk5NWVlZDQzM2M3ZCIsInVzZXJpZCI6IjU2NDU4ODgyNjAyNzYyMjQiLCJ2ZW5kb3JJZCI6IjhhMWYyNWZiLTUwZWUtNDdjOC1iOGYwLWRlZGEyNjA1ZTc4MyIsInZlbmRvclVzZXJJZCI6ImMwNjc0NmMzLWM5YmMtNDMwMS05YTAyLTk5YTMyOWFmZjVkZCJ9.eB3vjU4dTf8Xy9uSoe0O-CQHuQtv8hGQ_2RwFvIYCpA'
    }
};
export async function fetchData (data) {
    return axios
        .post(`https://app.pendo.io/api/aggregation/s/5668600916475904`, data ,options)
        .catch((error) => {
            console.warn('error', error);
        });
}
