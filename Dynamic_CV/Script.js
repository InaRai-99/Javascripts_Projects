 const myNameHeading = document.querySelector("h1")
 myNameHeading.innerHTML = "Clark Kent"

 const contactInfo = document.getElementById("contact")
 contactInfo.innerHTML = `
 Email: <a href="mailto:"> Kent_C@dailyplanet.com,</a><br>
 Phone: 555-123-4567
 Address: 344 Clinton Street, Metropolis, USA`

 const ul_Powers = document.getElementById("ul_Powers")
 const Powers1 = document.createElement ("li")
 Powers1.innerHTML = "Super Strength"
 const Powers2 = document.createElement ("li")
 Powers2.innerHTML = "Flight"
 const Powers3 = document.createElement ("li")
 Powers3.innerHTML = "X-Ray Vision"
ul_Powers.appendChild(Powers1)
ul_Powers.appendChild(Powers2)
ul_Powers.appendChild(Powers3)

const img_profile = document.getElementById("img_profile")
img_profile.src = "https://i.ytimg.com/vi/K7rtl19tgxU/maxresdefault.jpg"