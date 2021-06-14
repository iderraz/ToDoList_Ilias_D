import {maDiv,masousDiv1,masousDiv2,masousDiv3,masousDiv4,masousDiv5,monh1,mabarre,monAdd,toDo,done,monall,monclear} from "./second.js";
document.body.style.backgroundColor = "teal";





mabarre.addEventListener("keyup", (e) => {
    if(e.keyCode == 13){
        let thingsToDo = document.createElement("div");
        thingsToDo.style.display = "flex";
        thingsToDo.style.justifyContent = "space-around"
        masousDiv4.style.justifyContent = "center"
        masousDiv4.style.alignItems = "center"
        thingsToDo.style.marginTop = "3%";
    
        let mabox = document.createElement("input");
        mabox.setAttribute("type","checkbox");
        thingsToDo.appendChild(mabox);
        mabox.style.height = "50px";
        mabox.style.width = "50px";
    
        let monp = document.createElement("p");
        monp.innerText = mabarre.value;
        thingsToDo.appendChild(monp);
    
        thingsToDo.style.border = "solid 5px grey"
    
    
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "delete";
        let modifBtn = document.createElement("button");
        modifBtn.innerText = "modifier";
    
        deleteBtn.addEventListener("click", () => {
            
            thingsToDo.style.display = "none"
        });
    
    
        thingsToDo.appendChild(deleteBtn);
        thingsToDo.appendChild(modifBtn);
        masousDiv4.appendChild(thingsToDo);
        mabarre.value = "";


        modifBtn.addEventListener("click", () =>{
            monp.innerText = "";
            let newinput = document.createElement("input");
            thingsToDo.appendChild(newinput);
            newinput.addEventListener("keyup", (e) =>{
                          if(e.keyCode == 13){
                             monp.innerText = newinput.value
                             newinput.remove()
                          }
            })
         });
    
        
    }
})





































monAdd.addEventListener("click", () =>{
    let thingsToDo = document.createElement("div");
    thingsToDo.style.display = "flex";
    thingsToDo.style.justifyContent = "space-around"
    masousDiv4.style.justifyContent = "center"
    masousDiv4.style.alignItems = "center"
    thingsToDo.style.marginTop = "3%";

    let mabox = document.createElement("input");
    mabox.setAttribute("type","checkbox");
    thingsToDo.appendChild(mabox);
    mabox.style.height = "50px";
    mabox.style.width = "50px";

    let monp = document.createElement("p");
    monp.innerText = mabarre.value;
    thingsToDo.appendChild(monp);

    thingsToDo.style.border = "solid 5px grey"


    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    let modifBtn = document.createElement("button");
    modifBtn.innerText = "modifier";

    deleteBtn.addEventListener("click", () => {
        
        thingsToDo.style.display = "none"
    });


    thingsToDo.appendChild(deleteBtn);
    thingsToDo.appendChild(modifBtn);
    masousDiv4.appendChild(thingsToDo);
    mabarre.value = "";

    toDo.addEventListener("click", () => {
        if (mabox.checked == false){
            thingsToDo.style.display = "flex";
            console.log("hello");
          } else {
            thingsToDo.style.display = "none";
            console.log("hello");
          }
     });

     done.addEventListener("click", () => {
        if (mabox.checked == true){
            thingsToDo.style.display = "flex";
          } else {
            thingsToDo.style.display = "none";
          }
     });

     monall.addEventListener("click", () => {
        if (mabox.checked == true || mabox.checked == false){
            thingsToDo.style.display = "flex";
        }
     });

     modifBtn.addEventListener("click", () =>{
        monp.innerText = "";
        let newinput = document.createElement("input");
        thingsToDo.appendChild(newinput);
        newinput.addEventListener("keyup", (e) =>{
                      if(e.keyCode == 13){
                         monp.innerText = newinput.value
                         newinput.remove()
                      }
        })
     });


     
}
 );

monclear.addEventListener("click",() =>{
    masousDiv4.innerHTML = "";
})


















