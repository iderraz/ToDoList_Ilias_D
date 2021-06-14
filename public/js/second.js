let maDiv = document.createElement("div");
document.body.appendChild(maDiv);
console.log(maDiv);
maDiv.setAttribute("class","madivStyle");
maDiv.style.borderRadius = "1%";


//mes sous-div

let masousDiv1 = document.createElement("div");
maDiv.appendChild(masousDiv1);
//style
masousDiv1.style.height = "10%";
masousDiv1.style.width = "80%";
masousDiv1.style.marginLeft = "10%";

//style


let masousDiv2 = document.createElement("div");
maDiv.appendChild(masousDiv2);
//style
masousDiv2.style.height = "10%";
masousDiv2.style.width = "80%";

masousDiv2.style.marginLeft = "10%";
masousDiv2.style.marginTop = "3%"
masousDiv2.style.display = "flex";
masousDiv2.style.justifyContent = "center"
masousDiv2.style.alignItems = "center"
//style

let masousDiv3 = document.createElement("div");
maDiv.appendChild(masousDiv3);
//style
masousDiv3.style.height = "10%";
masousDiv3.style.width = "80%";
masousDiv3.style.border = "grey 1px solid"
masousDiv3.style.marginLeft = "10%";
masousDiv3.style.marginTop = "3%"

//style
let masousDiv4 = document.createElement("div");
maDiv.appendChild(masousDiv4);
//style
masousDiv4.style.marginLeft = "10%";
masousDiv4.style.marginTop = "3%"
//style

let masousDiv5 = document.createElement("div");
maDiv.appendChild(masousDiv5);
//style
masousDiv5.style.height = "10%";
masousDiv5.style.width = "80%";
masousDiv5.style.border = "grey 1px solid"
masousDiv5.style.marginLeft = "10%";
masousDiv5.style.marginTop = "3%";
masousDiv5.style.display = "flex";
masousDiv5.style.justifyContent = "center"
masousDiv5.style.alignItems = "center"
//style



//mes sous-div



//mon titre todo List
let monh1 = document.createElement("h1");
monh1.textContent = "Todo list";
masousDiv1.appendChild(monh1);
monh1.style.marginLeft = "45%";
monh1.style.paddingTop = "-1%";
monh1.style.color = "lightblue"
monh1.style.textDecoration = "underline";
//mon titre todo List










//ma barre ou taper et son boutton
let mabarre = document.createElement("input");
masousDiv2.appendChild(mabarre);
mabarre.style.width = "20%";
mabarre.style.height = "40px";
let monAdd = document.createElement("button");
monAdd.textContent = "+ ajouter";
monAdd.style.color = "green";
monAdd.style.height = "40px";
monAdd.style.width = "100px"
monAdd.style.borderRadius = "1%";
masousDiv2.appendChild(monAdd);
//style

//style
//ma barre ou taper


//Mes bouttons todo/done/all
let toDo = document.createElement("button");
toDo.textContent = "à faire";
let done = document.createElement("button");
done.textContent = "terminé";
let monall = document.createElement("button");
monall.textContent = "tout";

masousDiv3.appendChild(toDo);
masousDiv3.appendChild(done);
masousDiv3.appendChild(monall);
masousDiv3.style.display = "flex";
masousDiv3.style.justifyContent = "space-around"
masousDiv3.style.alignItems = "center"

//style toDo
toDo.style.backgroundColor = "#00A0DE";
toDo.style.height = "40px";
toDo.style.width = "100px";
//style toDo

//style done
done.style.backgroundColor = "#00A0DE";
done.style.height = "40px";
done.style.width = "100px";
//style done

//style monall
monall.style.backgroundColor = "#00A0DE";
monall.style.height = "40px";
monall.style.width = "100px";
//style monall

//Mes bouttons todo/done/all



//Mon boutton clear
let monclear = document.createElement("button")
monclear.textContent = "Clear List";
masousDiv5.appendChild(monclear);
//style
monclear.style.backgroundColor = "#F61E1F"
monclear.style.height = "40px";
monclear.style.width = "100px";
//style
//Mon boutton clear






export {maDiv,masousDiv1,masousDiv2,masousDiv3,masousDiv4,masousDiv5,monh1,mabarre,monAdd,toDo,done,monall,monclear};

