const dataWeather = {
    request: {
      type: 'LatLon',
      query: 'Lat 37.83 and Lon -122.42',
      language: 'en',
      unit: 'm'
    },
    location: {
      name: 'North Beach',
      country: 'United States of America',
      region: 'California',
      lat: '37.806',
      lon: '-122.411',
      timezone_id: 'America/Los_Angeles',
      localtime: '2020-05-18 20:19',
      localtime_epoch: 1589833140,
      utc_offset: '-7.0'
    },
    current: {
      observation_time: '03:19 AM',
      temperature: 14,
      weather_code: 116,
      weather_icons: [
        'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png'
      ],
      weather_descriptions: [ 'Partly cloudy' ],
      wind_speed: 24,
      wind_degree: 270,
      wind_dir: 'W',
      pressure: 1015,
      precip: 0.3,
      humidity: 67,
      cloudcover: 50,
      feelslike: 13,
      uv_index: 1,
      visibility: 16,
      is_day: 'no'
    }
  }

const dataMap = {
  "type": "FeatureCollection",
  "query": [],
  "features": [
  {
  "id": "place.7397503093427640",
  "type": "Feature",
  "place_type": [
  "place"
  ],
  "relevance": 1,
  "properties": {
  "wikidata": "Q65"
  },
  "text": "Los Angeles",
  "place_name": "Los Angeles, California, United States",
  "bbox": [
  -118.521456965901,
  33.9018913203336,
  -118.121305008073,
  34.161440999758
  ],
  "center": [
  -118.2439,
  34.0544
  ],
  "geometry": {
  "type": "Point",
  "coordinates": [
  -118.2439,
  34.0544
  ]
  },
  "context": [
  {
  "id": "region.9697035897738010",
  "short_code": "US-CA",
  "wikidata": "Q99",
  "text": "California"
  },
  {
  "id": "country.19352517729256050",
  "short_code": "us",
  "wikidata": "Q30",
  "text": "United States"
  }
  ]
  }
  ],
  "attribution": "NOTICE: © 2020 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained. POI(s) provided by Foursquare."
  }

module.exports = {
  dataWeather: dataWeather,
  dataMap: dataMap
}