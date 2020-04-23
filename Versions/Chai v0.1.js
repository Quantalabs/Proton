var create = function (element,text,src,id,name) {
  var a = document.createElement(element);
  document.body.appendChild(a);
  a.textContent = text;
  a.src = src;
  a.id = id;
  a.name = name;
};
var style = function (PrpName, PrpValue, Id) {
  var b = document.getElementById(id);
  b.style.PrpName = PrpValue;
};
var addText = function (text, id) {
  var c = document.getElementById(id);
  c.textContent += text;
};
var activate = function (eventName,callFunction,name1) {
  var clickerButton = document.getElementById(name1);
  clickerButton.addEventListener(eventName,callFunction);
};
