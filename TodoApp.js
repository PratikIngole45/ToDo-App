let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let lis = document.querySelector("li");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText=inp.value;


    let delBtn = document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName=='BUTTON'){
        let itemDel = event.target.parentElement;
        itemDel.remove();
    }
})