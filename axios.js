import axios from 'axios';

const options = {
    headers: {
        'Content-Type': 'application/json',
        'cookie': 'pendo.sess.jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVHlwZSI6Imdvb2dsZSIsImV4cCI6MTYzNDMwODc4MywiZ3JhbnRUaW1lIjoiMTZhYzE1MWRlODhkY2I5MSIsImlhdCI6MTYzMzcwMzk4MywibmJmIjoxNjMzNzAzOTgzLCJzZXNzaW9uRXBvY2giOiIxNjhkOWRiNGE1MWY3NjU1Iiwic2Vzc2lvbmlkIjoiNGM2ZWVlN2E4NDViMTdmZCIsInVzZXJpZCI6IjU2NDU4ODgyNjAyNzYyMjQiLCJ2ZW5kb3JJZCI6ImI0NzlkMmNkLTgzOTgtNDU4Ni04ZDcyLTJjNTQyYTU2MDFmMyIsInZlbmRvclVzZXJJZCI6IjgzZWE5YzkzLTY1NjktNDU3Zi1hNTk5LTAwOTM1N2FiMDIzZSJ9.I7hoMl2wA4G_aZCHj5Gmt31mhHM6-ADo0b1hx8Qi9MA'
    }
};
export async function fetchData (data) {
    return axios
        .post(`https://app.pendo.io/api/aggregation/s/5668600916475904`, data ,options)
        .catch((error) => {
            console.warn('error', error);
        });
}
