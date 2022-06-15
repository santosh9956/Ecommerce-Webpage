const cardSection = document.getElementById("card-section");
const uri = "http://store.webautobazaar.com/api/products";

const fetchProducts = async () => {
  const resp = await fetch(uri);
  const AllData = await resp.json();

  const records = AllData.data.records;

  console.log(records);

  let htmlContent = cardSection.innerHTML;

  for (let d of records) {
    htmlContent += `
    
    

    <div class="shoes-cart" id="product-${d.id}">
    <div class="shoes-img">
      <img src="${d.image}"  class="img" alt="">  
      <button class="del" id="delete" onclick="delData(${d.id})">delete</button>

    </div>
    <div class="del1">
      </div>
    <div class="details">
      <ul class="list-unstyled mt-2">
        <li>${d.title}</li>
        <li>${d.description}</li>
        <li>${d.active}</li>
      </ul>
      <p>${d.price}</p>
    </div>
  </div>
    `;
  }
  cardSection.innerHTML = htmlContent;
};

fetchProducts();

function myFunction() {
  var formdata = new FormData();
  formdata.append("title", document.getElementById("title").value);
  formdata.append("active", document.getElementById("active").value);
  formdata.append(
    "image[]",
    document.querySelector("input[type=file]").files[0],
    "thomas-kinto-6MsMKWzJWKc-unsplash.jpg"
  );
  formdata.append("price", document.getElementById("price").value);
  formdata.append("description", document.getElementById("description").value);
  formdata.append("category_id", document.getElementById("category_id").value);
  var raw = JSON.stringify({
    title: document.getElementById("title").value,
    active: document.getElementById("active").value,
  });
  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };
  fetch("http://store.webautobazaar.com/api/products", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  const exampleModal = document.getElementById("exampleModalCenter");
  const temp2 = document.getElementsByClassName("modal-backdrop");
  console.log(temp2, "tem222");
  exampleModal.classList.remove("show");
  temp2[0].classList.remove("show");
  fetchProducts();
}

function delData(id) {
  var urlencoded = new URLSearchParams();
  document.getElementById(`product-${id}`).remove();

  var requestOptions = {
    method: "DELETE",
    body: urlencoded,
    redirect: "follow",
  };

  fetch(`http://store.webautobazaar.com/api/products/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
