var list = {}

function add(){
    var a = document.getElementById("tin").value;
    document.getElementById("tin").value = "";
    if (a){
    var myDiv = document.getElementById("items");
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = a;
    checkbox.className = "item"
    checkbox.onclick = function() {clicked(checkbox.id)};

    var label = document.createElement('label');
    label.id = a + "_lb"
    label.appendChild(document.createTextNode(a));
    checkbox.appendChild(label)
              
    myDiv.appendChild(checkbox);
    myDiv.appendChild(label);
    myDiv.appendChild(document.createElement('br'));
    }
}

function del(){

// console.log(list);

  for (let key in list){
    if(list.hasOwnProperty(key)){
      var c = document.getElementById(key);
      var l = document.getElementById(list[key]);
      l.remove();
      c.remove();
      delete list[key]
    }
  }


}

function clicked(id){
    var checkbox = document.getElementById(id);
    var lb_text = document.getElementById(id+"_lb");
    if (checkbox.checked === true){
        list[id] = id + "_lb"
        lb_text.style.textDecoration = "line-through";
      } else {
        lb_text.style.textDecoration = "none";
        delete list[id] 
      }
}
