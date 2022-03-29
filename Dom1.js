// function foo(tagname,classname1){
//     let ELE=document.createElement(tagname);
//     ELE.className =classname1;
//     return ELE;
// }
// let container=foo('div','container');
// let row=foo('div','row');
// let col=foo('div','col');

// row.append(col);
// container.append(row);
// document.body.append(container);


 // sir gives code


// let container = document.createElement("div");
// container.setAttribute("class", "container");
 //<div class="container"></div>
// let row = document.createElement("div");
// row.setAttribute("class", "row");

// let col = document.createElement("div");
// col.setAttribute("class", "col");

// row.append(col);
// container.append(row);
// document.body.append(container);

// let container=foo("div","container");
// let row=foo("div","row");
// let col=foo("div","col");

// row.append(col);
// container.append(row);
// document.body.append(container);

// function foo(elementname,attrname){

//     let ele=document.createElement(elementname);
     //an alternative for setAttribute in classname
//     ele.className=attrname;
//     return ele;
    
//     }

 //creating tables using DOM
// var table=document.createElement("table");
// table.className="table";
 //head code
// var thead=document.createElement("thead");
// thead.className="thead-dark";

// var tr=document.createElement("tr");

// var th1=createtrth("th","firstname");
// var th2=createtrth("th","lastname");

// tr.append(th1,th2);
// thead.append(tr);

 //body of the table code
// var tbody=document.createElement("tbody");
// var tr=document.createElement("tr");

// var td1=createtrth("td","mak");
// var td2=createtrth("td","otto");

// tr.append(td1,td2);
// tbody.append(tr);

// table.append(thead,tbody);
// document.body.append(table);


 //document.createElemenet();ele.innerHTML=ele;
// function createtrth(element,values){
//     var ele=document.createElement(element);
//     ele.innerHTML=values;
//     return ele;

// }




// function foo1(){
//     let res =document.getElementById('firstname').value;
//     let res1=document.getElementById("midname").value;
//     let res2=document.getElementById("Lastname").value;
//     let res3=document.getElementById("password").value;
//     console.log(res,res1,res2,res3);
// }
// var table= document.createElement("table");
// table.className="table";
// var thead = document.createElement("thead");
// thead.className="thead-dark";
// var tr=document.createElement('tr');
// var th1=document.createElement("th");
// th1.innerHTML="ajith";
// var th2=creat('th','lastname');

// tr.append(th1,th2);
// thead.append(tr);

// var tbody=document.createElement("tbody");
// var tr1=document.createElement('tr');
// var td=creat("td",'mohan')
// var td1=creat("td","mustak");
// tr1.append(td,td1);
// tbody.append(tr1);
// table.append(thead,tbody);
// document.body.append(table);



// function creat(tagname,value){
//     let name=document.createElement(tagname);
//     name.innerHTML=value;
//     return name;
// }



let lable=document.createElement("label");
lable.setAttribute("for",'fname');
lable.innerHTML="FirstName"
let input = document.createElement("input");
input.setAttribute("id",'fname');
input.setAttribute("type","Text");
let br=document.createElement("br");
let lable1=document.createElement("label");
lable1.setAttribute("for",'secname');
lable1.innerHTML="SecondName"

let input1 = document.createElement("input");
input1.setAttribute("id",'secname');
input1.setAttribute("type","Text");
let br1=document.createElement("br");
let lable2=document.createElement("label");
lable2.setAttribute("for",'email');
lable2.innerHTML="E-mail";
let input2 = document.createElement("input");
input2.setAttribute("id",'email');
input2.setAttribute("type","email");
let br2=document.createElement("br");
let lable3=document.createElement("label");
lable3.setAttribute("for",'pass');
lable3.innerHTML="Password";
let input3 = document.createElement("input");
input3.setAttribute("id",'password');
input3.setAttribute("type","password");

let button=document.createElement("button");
button.className="btn btn-primary";
button.setAttribute("type","button");
button.innerHTML="submit";
button.addEventListener("click",()=>console.log(input.value,input1.value,input2.value,input3.value))

document.body.append(lable,input,br,lable1,input1,br1,lable2,input2,br2,lable3,input3,button);
