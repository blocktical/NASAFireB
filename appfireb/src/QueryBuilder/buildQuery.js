export const query = (params) => {
    let keyObject = {
        dateMax : 'date-max',
        dateMin : 'date-min',
        velMax : 'vel-max',
        velMin : 'vel-min'
        
    }
    let query = ''
    let keys = Object.keys(params)
    keys.map((key)=>{
        query = query ==''? `${keyObject[key]}=${params[key]}` : query + `&${key}=${params[key]}`;
    })
    return query;
}