var nodeList = document.getElementsByTagName("LI");
var a;
for (a = 0; a < nodeList.length; a++) {
  var pen = document.createElement("PEN");
 var txt = document.createTextNode("\u00D7");
  pen.className = "close";
 pen.appendChild(txt);
  nodeList[a].appendChild(pen);
}


var close = document.getElementsByClassName("close");
var a;
for (a = 0; a < close.length; a++) {
  close[a].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
 }
}, false);


function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("fun").value;
 const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    li = ""
  } else {
   document.getElementById("dad").appendChild(li);
  }
 document.getElementById("fun").value = "";

  var pen = document.createElement("PEN");
  var txt = document.createTextNode("\u00D7");
 pen.className = "close";
  pen.appendChild(txt);
  li.appendChild(pen);

  for (a = 0; a < close.length; a++) {
    close[a].onclick = function() {
     var div = this.parentElement;
      div.style.display = "none";
    }
  }
}