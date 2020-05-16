    var create = function (element,text,src,id,class1) {
      var a = document.createElement(element)
      document.body.appendChild(a)
      a.textContent = text
      a.src = src
      a.id = id
      a.class = class1
    }
    var style = function (property,value,id) {
        document.getElementById(id).style[property] = value
    }
    var addText = function (text, id) {
      var c = document.getElementById(id)
      c.textContent += text
    }
    var activate = function (eventName,callFunction,name1) {
      var clickerButton = document.getElementById(name1)
      clickerButton.addEventListener(eventName,callFunction)
    }
    var changeText = function (text,id) {
      var a = document.getElementById(id)
      a.textContent = text;
    }
    var addIn = function (element, text, src, id, class1, appendId) {
        var a = document.createElement(element)
        var b = document.createTextNode(text)
        a.appendChild(b)
        document.getElementById(appendId).appendChild(a)
        a.src = src
        a.id = id
        a.class = class1
    }
