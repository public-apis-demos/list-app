function getEmpData() {
  const URL = "http://localhost:3000/api/list";
  fetch(URL)
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      // var result = data.file;
      // var image = document.createElement("img");
      // var imageParent = document.getElementById("result");
      // image.id = "id";
      // image.className = "img-thumbnail";
      // image.src = result;
      // imageParent.appendChild(image);
    });
}

getEmpData();
