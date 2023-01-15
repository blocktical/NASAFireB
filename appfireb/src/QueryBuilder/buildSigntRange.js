export const signtRange = (longitude, logDir, latitude, latDir) => {
// calculate teh sight range,,, consider signt range (+-)10

    return new Promise ((res, rej) => {
        // do respective calculation here to create range

        res({
            maxLong : '0',
            maxLongDir: '',
            minLong : '0',
            minLongDir: '',
            maxLat  : '0',
            maxLatDir : '',
            minLat  : '0',
            minLatDir : ''
        })
    })
}