import axios from 'axios';

const options = {
    headers: {
        'Content-Type': 'application/json',
        'cookie': 'pendo.sess.jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVHlwZSI6Imdvb2dsZSIsImV4cCI6MTYzNzA3NTU2MywiZ3JhbnRUaW1lIjoiMTZiNWU5N2QzYjE0MmRjNiIsImlhdCI6MTYzNjQ3MDc2MywibmJmIjoxNjM2NDcwNzYzLCJzZXNzaW9uRXBvY2giOiIxNjhkOWRiNGE1MWY3NjU1Iiwic2Vzc2lvbmlkIjoiNjg0NTEyZTM0ZWU4ODQ0MiIsInVzZXJpZCI6IjU2NDU4ODgyNjAyNzYyMjQiLCJ2ZW5kb3JJZCI6ImQ5MWQ1ZWM5LTliNTktNDg1Zi05OTY1LTUwOGNkZjNlNzI5MCIsInZlbmRvclVzZXJJZCI6IjljYzY0YjhkLTUxNzYtNGY4Zi1iNGNlLTU3Y2JkYjQ3NThkMyJ9.zcD6Tnfui3WfI8XItp3mir_SGIc47uwDB8UqlcaY_tM'
    }
};
export async function fetchData (data) {
    return axios
        .post(`https://app.pendo.io/api/aggregation/s/5668600916475904`, data ,options)
        .catch((error) => {
            console.warn('error', error);
        });
}
