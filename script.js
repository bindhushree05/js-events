window.onload = function() {
  document.getElementById("user").innerHTML = "Bindhu Shree";
};

document.getElementById("btn-click").onclick = function() {
  this.style.backgroundColor = "yellow";
};

document.getElementById("build-button").addEventListener("click", function() {
  var noun = document.getElementById("noun").value;
  var verb = document.getElementById("verb").value;
  var adverb = document.getElementById("adverb").value;
  var sentence = noun + " " + verb + " " + adverb;
  document.getElementById("statement").innerHTML = sentence;
});

document.getElementById("child").addEventListener("click", function() {
  alert("Child clicked");
});

document.getElementById("parent").addEventListener("click", function() {
  alert("Parent clicked");
});

document.getElementById("grandparent").addEventListener("click", function() {
  alert("Grandparent clicked");
});

document.getElementById("grandparent").addEventListener("click", function() {
  alert("Grandparent clicked");
}, true);

document.getElementById("parent").addEventListener("click", function() {
  alert("Parent clicked");
}, true);

document.getElementById("child").addEventListener("click", function() {
  alert("Child clicked");
}, true);

document.getElementById("category").addEventListener("click", function(event) {
  if(event.target.id === "blazers") {
      alert("blazers");
  }
});

