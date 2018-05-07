
   var myNodelist = document.getElementsByTagName("LI");
   var i;
   for (i = 0; i < myNodelist.length; i++) {
     var button = document.createElement("button");
     var txt = document.createTextNode("\u00D7");
     button.className = "close";
     button.appendChild(txt);
     myNodelist[i].appendChild(button);
   }
   
  
   var close = document.getElementsByClassName("close");
   var i;
   for (i = 0; i < close.length; i++) {
     close[i].onclick = function() {
       var div = this.parentElement;
       div.style.display = "none";
     }
   }
   
   
   function newElement() {
     var li = document.createElement("li");
     var input = document.createElement("input");
     var inputValue = document.getElementById("textarea").value;
     var t = document.createTextNode(inputValue);
     li.appendChild(t);
     if (inputValue === '') {
       alert("You must write something!");
     } else {
       document.getElementById("list").appendChild(li);
     }
     document.getElementById("textarea").value = "";
   
     var button = document.createElement("button");
     var txt = document.createTextNode("\u00D7");
     button.className = "close";
     button.appendChild(txt);
     li.appendChild(button);
   
     var input = document.createElement("input");
     input.type = "checkbox";
     li.appendChild(input);
     
   
     for (i = 0; i < close.length; i++) {
       close[i].onclick = function() {
         var div = this.parentElement;
         div.style.display = "none";
       }
     }
   }