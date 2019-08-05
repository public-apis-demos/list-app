function getEmpData() {
  const URL = "http://localhost:3000/api/list";
  fetch(URL)
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      return data;
    });
}

getEmpData();
