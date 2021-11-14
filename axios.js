import axios from 'axios';

const options = {
    headers: {
        'Content-Type': 'application/json',
        'cookie': 'pendo.sess.jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVHlwZSI6Imdvb2dsZSIsImV4cCI6MTYzNzUyMDc3NCwiZ3JhbnRUaW1lIjoiMTZiNzdlNjdmMjBlMDMyOCIsImlhdCI6MTYzNjkxNTk3NCwibmJmIjoxNjM2OTE1OTc0LCJzZXNzaW9uRXBvY2giOiIxNjhkOWRiNGE1MWY3NjU1Iiwic2Vzc2lvbmlkIjoiNzVlODA5NDM3ZmRhYjUwIiwidXNlcmlkIjoiNTY0NTg4ODI2MDI3NjIyNCIsInZlbmRvcklkIjoiYjQ3OWQyY2QtODM5OC00NTg2LThkNzItMmM1NDJhNTYwMWYzIiwidmVuZG9yVXNlcklkIjoiODNlYTljOTMtNjU2OS00NTdmLWE1OTktMDA5MzU3YWIwMjNlIn0.tKq-6yCYN5qIc4HifCi-uYoyiEU2zK-ZGxlODgemtck',
    }
};
export async function fetchData (data) {
    return axios
        .post('https://app.pendo.io/api/aggregation/ss/pendo-internal', data ,options)
        .catch((error) => {
            console.warn('error', error);
        });
}
