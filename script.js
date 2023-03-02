const new1 = document.querySelector("#input1");
const btn = document.querySelector("#btn");
const list = document.querySelector("#ul1");
function removeItem(){
  this.parentElement.remove()
}
function addItem() {
  if(new1.value.trim() !== ""); {
  const ulLi = document.createElement("li");
  list.append(ulLi);
  ulLi.textContent = new1.value;

  

  const rmw = document.createElement("button");
  ulLi.append(rmw)
  rmw.textContent= "Remove";
  rmw.addEventListener("click", removeItem);
  }
  new1.textContent = " " 
}
btn.addEventListener("click", addItem);
new1.addEventListener("keydown", function(event){
  if (event.code === "Enter") {
    addItem()
  }
})

const exampleList = ["apple", "pears", "orange"];
for( let i =0; i < exampleList.length; i ++) {
  const element = list [i]
}
const result = [];
const exampleLiArray= document.querySelectorAll("#example1 li");
for( let i =0; i < exampleLiArray.length; i ++) {
  result.push(exampleLiArray[i].textContent);
}
console.log(result)

const example2 = [
  {name: "Bakyt", age: 18},
  {name: "Nagima", age:21}
]
const exampleList2 = [
  { name: "bakyt", age: 18 },
  { name: "dosbol", age: 32 },
];
const ul1 = document.createElement("ul");
document.body.append(ul1);
for (i = 0; i < exampleList2.length; i++) {
  const list1 = document.createElement("li");
  ul1.append(list1);
  list1.textContent = exampleList2[i].name + " - " + exampleList2[i].age;
}

//

const h1 = document.querySelector("h1");
document.querySelector("#display-text").addEventListener("input",function() {
  h1.textContent = this.value;
})