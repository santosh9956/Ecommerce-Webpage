const cardSection = document.getElementById("card-section")
const uri = "http://store.webautobazaar.com/api/products"

const fetchProducts = async()=>{
  const resp = await fetch(uri)
  const AllData = await resp.json()
  
  const records = AllData.data.records

  console.log(records);

  let htmlContent = ''
  for(let d of records){
    htmlContent+=`
    <div class="shoes-cart">
    <div class="shoes-img">
      <img src="${d.image}" alt="">
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
    `
  }
  cardSection.innerHTML = htmlContent
}

fetchProducts()