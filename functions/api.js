const axios = require("axios");

exports.handler = function(event, context, callback) {
  console.log("****************");
  const urlParts = event.path.split("/");
  console.log(urlParts);
  const userId = urlParts[3];
  console.log(userId);
  const url = "/" + urlParts.slice(3).join("/");
  console.log(url);
  const request_url = `https://api-fake-test.firebaseio.com/users/${userId}/apis.json`;

  axios
    .get(request_url)
    .then(res => {
      console.log(res.data);
      for (let key in res.data) {
        console.log(res.data[key].url, url);
        if (res.data[key].url == url) {
          console.log("Found it");
          console.log(res.data[key]);
          return callback(null, {
            statusCode: 200,
            body: res.data[key].response
          });
        } else {
          console.log("Data not found");
          return callback(null, {
            statusCode: 404,
            body: JSON.stringify({ msg: "Data not found" })
          });
        }
      }
    })
    .catch(err => {
      console.log(err);
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({ msg: "Something went wrong!" })
      });
    });

  console.log("hehe");
  //   const userId = req.params.userId;

  //   console.log(urlParts);
  //   if (urlParts.length != 4) {
  //     return res.status(400).send({ msg: `Bad request` });
  //   }
  //   const url = "/" + urlParts[2] + "/" + urlParts[3];
  //   db.ref(`users/${userId}/apis`)
  //     .orderByChild("url")
  //     .equalTo(url)
  //     .once("value")
  //     .then(snapshot => {
  //       console.log(snapshot.val());
  //       if (!snapshot.val()) {
  //         return res.status(404).send({ msg: `Could not find data for ${url}` });
  //       }
  //       const data = snapshot.val();
  //       const keys = Object.keys(data);
  //       const retVal = data[keys[0]];
  //       console.log(retVal);
  //       res.status(retVal.status).send(retVal.response);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       res.status(500).send({ msg: `Could not retrieve data for ${url}` });
  //     });
};
