 const myNameHeading = document.querySelector("h1")
 myNameHeading.innerHTML = "My Shopping List"

 const ItemsInfo = document.getElementById("Items")
 ItemsInfo.innerHTML = `
Items to buy for the week. </a><br>
Stay in budget and eat healthy! </a><br>
Avoid unnecessary purchases and focus on essentials.`

 const ul_Items = document.getElementById("ul_Items")
 const Items1 = document.createElement ("li")
 Items1.innerHTML = "Milk"
 const Items2 = document.createElement ("li")
 Items2.innerHTML = "Rice"
 const Items3 = document.createElement ("li")
 Items3.innerHTML = "Eggs"
 const Items4 = document.createElement ("li")
 Items4.innerHTML = "Fruits"
ul_Items.appendChild(Items1)
ul_Items.appendChild(Items2)
ul_Items.appendChild(Items3)
ul_Items.appendChild(Items4)

const img_profile = document.getElementById("img_profile")
img_profile.src = "https://cdn-icons-png.flaticon.com/512/5230/5230364.png"