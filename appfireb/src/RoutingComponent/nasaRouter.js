import axios from 'axios';
import { query } from '../QueryBuilder/buildQuery';
const URI='https://ssd-api.jpl.nasa.gov/fireball.api'


export const fetchData = async (params) => {
    let _query = query(params)
    let URL = `${URI}?${_query}`
    console.log(query)
    return new Promise ( (res, rej) => {
      axios.get(URL)
      .then(function (response) {
        let data = response.data;
        console.log('This is data-',data);
        res(data);
      })
      .catch(function (error) {
        rej(error);
      })
    })
    }