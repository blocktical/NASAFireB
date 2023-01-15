import { sightRange } from './../QueryBuilder/buildSigntRange';
const locations = {
    'Delhi' : {
        lat : 28.7041,
        latDir : 'N',
        lon : 77.1025,
        lonDir : 'E',
    },
    'Mumbai' : {
        lat : 19.0760,
        latDir : 'N',
        lon : 72.8777,
        lonDir : 'E',
    },
    'New York' : {
        lat : 40.7128,
        latDir : 'N',
        lon : 74.0060,
        lonDir : 'W',
    }
}

export const filterData = (location, fireball_data) => {
    // get sight range based on location
    if(location){
        sightRange(locations[location].lon, locations[location].lonDir, locations[location].lat, locations[location].latDir)
        .then( range => {

        })
        .catch( e => alert(e))
    }
    
}