const axios = require("axios");
require("dotenv").config();

exports.handler = function (event, context, callback) {

  const urlParts = event.path.split("/");
  //url format will be /api/user-id/url
  const index = urlParts.indexOf("api");
  const userId = urlParts[index + 1];
  const url = "/" + urlParts.slice(index + 2).join("/");

  console.log("****************");
  console.log(userId, url);

  const databaseURL = process.env.REACT_APP_DATABASE_URL;

  const request_url = `${databaseURL}/users/${userId}/apis${url}.json`;

  axios
    .get(request_url)
    .then(res => {
      console.log(res.data)
      return callback(null, {
        statusCode: parseInt(res.data.status),
        body: res.data.response
      });
    })
    .catch(err => {
      console.log(err);
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({ msg: "Something went wrong!" })
      });
    });
};
