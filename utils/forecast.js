const request = require('request');

const forecast = (lat, lon, callback) => {
  const url = `https://api.darksky.net/forecast/351ef60f1cf09e4e5b0192f2aeeeffe8/${lat},${lon}?units=uk2`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to service');
    } else if (body.error) {
      callback('Unable to find location');
    } else {
      const dataCurrently = body.currently;
      const dataDaily = body.daily.data[0];

      callback(
        undefined,
        `${dataDaily.summary} It is currently ${dataCurrently.temperature} degrees out. There is a ${dataCurrently.precipProbability}% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
