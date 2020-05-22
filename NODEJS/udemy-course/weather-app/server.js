const request = require('postman-request')
//const {dataWeather, dataMap} = require('./data')

const getLocation = (location='Los%20Angeles', callback) => {
    const urlMap = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiZnBjNzA2MyIsImEiOiJja2FkZWppcTQwNXVzMnpxdDJyNmlxdHVpIn0.9LbiCcBVGn-iaef_1pdbZw&limit=1`
    request({ url: urlMap, json: true }, (error, res) => {
        let reqError
        if (error) {
            reqError = "Unable to connect to mapbox API!"
        } else if (res.body.error) {
            reqError = "ERROR: bad request"
        } else if (res.body.features[0] == undefined)
        {
            reqError = 'Place not found'
        } else {
            const dataMap = res.body
            //console.log(dataMap.features[0])
            const longitude = dataMap.features[0].center[0]
            const latitude = dataMap.features[0].center[1]

            let data = {
                location: location,
                longitude: longitude,
                latitude: latitude
            }
            callback(reqError, data)
        }
    })
}

const getWeather = (location, callback) => {
    const { longitude, latitude } = location
    const urlWeather=`http://api.weatherstack.com/current?access_key=f0590860b210479ac75e6c8212e11fc3&query=${latitude},${longitude}`
    request({ url: urlWeather, json: true }, (error, res) => {
        let reqError, data
        if (error) {
            reqError = "Can't connect to weatherstack"
        } else if (res.body.error) {
            reqError = "ERROR: bad request"
        } else {
            const dataWeather = res.body
            const rainChance = dataWeather.current.precip
            const temperature = dataWeather.current.temperature
            const feelLike = dataWeather.current.feelslike
            const weatherDescription = dataWeather.current.weather_descriptions[0]

            data = {
                rainChance: rainChance,
                temperature: temperature,
                feelLike: feelLike,
                weatherDescription: weatherDescription
            }
            console.log(`Está fazendo: ${temperature} graus e a sensação térmica é de ${feelLike} graus`)
            console.log(`${weatherDescription}, a chance de chover é de ${rainChance * 100}%`)    
        }
        callback(reqError, data)
    })
}

//getLocation('Los%20Angeles', (longitude, latitude) => getWeather(longitude, latitude))
getLocation('Los%20Angeles', (error, res) => {
    if (error != undefined) console.log('Error', error)
    else {
        console.log('Data', res)
        getWeather(res, (error, res) => {
            if (error != undefined) console.log('Error', error)
            else console.log('Data', res)
        })
    }
})

/*
const generalReq (dados, callback) => {
    request({url: url, json: true}, (error, res) => {
        let reqError, data
        if (error) {
            reqError = "Unable to connect to server"
        } else if (res.body.error) {
            reqError = "API call ERROR")
        } else {
            //console.log("API call SUCCESS", res.body)
            data = null
        }
        callback(error, data)
})
}
*/






