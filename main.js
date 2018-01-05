// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
let i;

Array.from(myNodelist).forEach((element)=>{
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  element.appendChild(span);
})

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");

Array.from(close).forEach((element)=>{
element.onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
}
})


// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {

  let data = ev.target.firstChild.nodeValue;
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }

  ev.target.parentElement.removeChild(ev.target);
  if (data === "\u00D7") {
    return false
  }
  moveItem('myUL2',data);

}, false)

// Transfer the item to done table

const moveItem = (listName, data)=>{
//create the li and append to the list
  const list = document.getElementById(listName);
  const li = document.createElement("li");
  const t = document.createTextNode(data);
  if (listName === "myUL2") {

    li.className = "checked";
  } else {
      li.className = "";
  }
  li.appendChild(t);

//Add close button into li
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  list.appendChild(li);

  Array.from(close).forEach(element=>{
    element.onclick = function() {
      var div = this.parentElement;
      div.parentElement.removeChild(div)
    }
  })




}

//Click again and it will be Transfered to un-done list

const list2 = document.getElementById('myUL2');
  list2.addEventListener('click', (ev) => {
    let data = ev.target.firstChild.nodeValue;



    ev.target.parentElement.removeChild(ev.target);
    if (data === "\u00D7") {
      return false
    }
    moveItem('myUL',data);

})

// moveItem in the done table when click again






// Create a new list item when clicking on the "Add" button

const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', (e)=>{
  console.log('e.target', e.target);
  e.preventDefault();
  newElement();
})

const addBtn = document.getElementById('btn-add');
addBtn.addEventListener('click', ()=>{

  newElement();
})

function newElement() {

  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
