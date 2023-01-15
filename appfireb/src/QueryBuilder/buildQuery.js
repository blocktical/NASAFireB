export const query = (params) => {
    let keyObject = {
        dateMax : 'date-max',
        dateMin : 'date-min',
        velMax : 'vel-max',
        velMin : 'vel-min',
        energyMax : 'energy-max',
        energyMin : 'energy-min',
        impactEMin : 'impact-e-min',
        impactEMax : 'impact-e-max',
        altMin : 'alt-min',
        altMax : 'alt-max',
        limit : 'limit',
        sort : 'sort'
    }
    
    let query = ''
    let keys = Object.keys(params)
    keys.map((key)=>{
        query = query ==''? `${keyObject[key]}=${params[key]}` : query + `&${key}=${params[key]}`;
    })
    return query;
}