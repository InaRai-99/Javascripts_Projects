let add_btn = document.getElementById("add-items-btn");
function addItem()
{
    let new_item_input = document.getElementById("new-item-input")
    let shopping_list = document.getElementById("shopping-list")
    let item_value = new_item_input.value
    if (item_value == "")
    {
        console.log("item can't be empty")
        return
    }
     console.log("User Entered"+item_value)
    let list_element = document .createElement("li")
    list_element.innerText = item_value
    list_element.classList.add("added-item")
    console.log("Css class Added")

    shopping_list.appendChild(list_element)
    console.log("Item Added to the list")
    new_item_input.value = ""
    new_item_input.focus()
}
add_btn.addEventListener("click", addItem)

