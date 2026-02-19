let emailForm = document.getElementById("emailForm")
let txtEmail = document.getElementById("email-input")
let pmsg = document.getElementById("error-message")
emailForm.addEventListener("submit", function(event) {
   
    event.preventDefault()
    pmsg.classList.remove("error", "success")
    if (txtEmail.value === "") 
        {
            pmsg.innerText = "Please Enter Your Email"
            pmsg.classList.add("error")
            return
        }
        pmsg.innerText = "Your Email is Valid"
        pmsg.classList.add("success")
})