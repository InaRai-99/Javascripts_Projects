const btncart = document.getElementById("btncart")

function handleOutofStock()
{
    const imgproduct = document.getElementById("imgproduct")
    btncart.disabled = true;
    btncart.innerText = "Out Of Stock"
    btncart.classList.add ("Out-Of-Stock-btn")
    imgproduct.classList.add ("Out-Of-Stock-image")
}
btncart.addEventListener("click", handleOutofStock)