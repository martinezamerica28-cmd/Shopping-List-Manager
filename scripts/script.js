document.addEventListener("DOMContentLoaded",()=>{

    const btnAdd = document.getElementById("btnAdd");
    const inputItem = document.getElementById("txtItem");
    const list = document.getElementById("itemList");
    const error = document.getElementById("error");

    let items = [
        {name:"Laptop",purchase:false},
        {name:"Speakers",purchase:true},
        {name:"MacBook",purchase:false}
    ];

    function renderList(){
        list.innerHTML="";

        items.forEach((item,index)=>{

            let li = document.createElement("li");
            li.className = "list-group-item";

            li.innerHTML=`
                <span>${item.name}</span>
                <button class="btn btn-primary btn-sm editBtn">Edit</button>
                <button class="btn btn-danger btn-sm deleteBtn">Delete</button>
            `;

            list.appendChild(li);

            // edit item
            let editBtn = li.querySelector(".editBtn");

            editBtn.addEventListener("click",()=>{
                let newName = prompt("Edit item:", item.name);

                if(newName !== null && newName.trim() !== ""){
                    items[index].name = newName;
                    renderList();
                }
            });

            // delete item
            let deleteBtn = li.querySelector(".deleteBtn");

            deleteBtn.addEventListener("click",()=>{
                items.splice(index,1);
                renderList();
            });
        });
    }

    // add item
    btnAdd.addEventListener("click",()=>{

        let item = inputItem.value;

        if(item.trim() === ""){
            error.textContent = "Please enter an item";
        }
        else{
            error.textContent = "";

            items.push({
                name:item,
                purchase:false
            });

            inputItem.value = "";
            renderList();
        }
    });

    renderList();
});
