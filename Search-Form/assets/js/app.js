// let input = document.querySelector(".name");
// let btn = document.querySelector(".btn");

// input.addEventListener("blur",function () {
//     Validation(this);
// })
// input.onkeyup=function () {
//     Validation(this);
// }
// input.onkeydown=function () {
//     Validation(this);
// }


// function Validation(event) {
//     if (event.value.trim()=="") {
//         event.nextElementSibling.classList.remove("d-none");
//     }
//     else{
//         event.nextElementSibling.classList.add("d-none");
//     }
// }

// btn.addEventListener("click",function (e) {
//     e.preventDefault();
//     let ul=document.querySelector("ul");
//     if (isNotNull(input)) {
//         ul.innerHTML+=`<li class="list-group-item">${input.value}<i class="bi bi-trash float-end" onclick="deleteList(this)"></i></li>`
//     }
// })
// function deleteList(event) {
//     event.parentElement.remove();
// }

// function isNotNull(event) {
//     if (event.value.trim()=="") {
//         event.nextElementSibling.classList.remove("d-none");
//         return false;
//     }
//     else{
//         event.nextElementSibling.classList.add("d-none");
//         return true;
//     }
// }
const search=document.querySelector(".search");
search.addEventListener('input',filterList);

function filterList() {
    const filter = search.value.toLowerCase()
    const listItems=document.querySelectorAll(".list-group-item");
    listItems.forEach((item) => {
        let text =item.textContent
        if (text.toLowerCase().includes(filter.toLowerCase())) {
            item.style.display='';
        }
        else{
            item.style.display='none';
        }
    });
}
