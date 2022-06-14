async function fetchApi() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: document.getElementById("userName").value,
    password: document.getElementById("password").value,
  });
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      document.getElementById("userName").value
    ) &&
    document.getElementById("password").value.length > 8
  ) {
    document.querySelector(".invalid").style.display = "none";
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    data = fetch("https://reqres.in/api/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        sessionStorage.setItem("token", JSON.parse(result).token);
        location.href = "./product.html";
      })

      .catch((error) => console.log("error while fetching", error));
    return true;
  } else {
    document.querySelector(".invalid").innerHTML =
      "Invalid username or password";
  }
}

const viewButton = document.querySelector("#view");
viewButton.addEventListener("click", function () {
  location.href = "./product.html";
});
