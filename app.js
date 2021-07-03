const URL = "list.json";

fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
