const cardSection = document.getElementById("card-section");
const uri = "http://store.webautobazaar.com/api/products";

const fetchProducts = async () => {
  const resp = await fetch(uri);
  const AllData = await resp.json();
  const records = AllData.data.records;
  
  const params = new URLSearchParams(window.location.search);

  for(i of records){
    for (k of Object.values(i)){
      if (k == params.get("id")){
        console.log(k);

        document.getElementById("p_title").innerHTML = i.title;
        document.getElementById("p_desc").innerHTML = i.description;
        document.getElementById("p_price").innerHTML = `₹ ${i.price}`;

      }
    }
  }

};

fetchProducts();
