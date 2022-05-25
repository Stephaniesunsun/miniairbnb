import stays from '../data/stays.json';

const getLocations=()=>{
    let locations = [];
    for(let stay of stays){
        let temp = stay.city+", "+stay.country;

        if(locations.indexOf(temp)===-1){
            locations.push(temp);
        }
    }
    return locations;
}

export const LOCATIONS = getLocations();
