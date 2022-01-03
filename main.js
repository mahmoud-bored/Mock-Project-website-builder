// """Root"""
function select(pointer) {
  return document.querySelector(`${pointer}`)
}
function addClass(pointerClass, className){
  document.querySelector(`${pointerClass}`).classList.add(`${className}`)
}
function removeClass(pointerClass, className){
  document.querySelector(`${pointerClass}`).classList.remove(`${className}`)
}
// """Root End"""


function aside_list_open(){
  document.querySelector(".right-arrow").style.display = "block"
  document.querySelector(".left-arrow").style.display = "none"
  removeClass("aside", "aside-list-close")
  addClass("aside", "aside-list-open")
}
function aside_list_close() {
  document.querySelector(".right-arrow").style.display = "none"
  document.querySelector(".left-arrow").style.display = "block"
  addClass("aside", "aside-list-close")
  removeClass("aside", "aside-list-open")
}
function show_list(listPointer) {
    switch (listPointer) {
        case "html-list":
            addClass(".html-list", "aside-list-activate")
            removeClass(".html-list", "aside-list-disable")
            addClass(".css-list", "aside-list-disable")
            removeClass(".css-list", "aside-list-activeate")
            break;
        case "css-list":
            addClass(".css-list", "aside-list-activate")
            removeClass(".css-list", "aside-list-disable")
            addClass(".html-list", "aside-list-disable")
            removeClass(".html-list", "aside-list-activeate")

            break;

    }
}









// DRAG WORKSPACE

dragElement(document.querySelector(".workspace"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.querySelector(elmnt.class)) {
    /*: if present, the workspace :*/
    document.querySelector(elmnt.class).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the workspace from anywhere inside the workspace:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    // change the cursor
    select('.workspace').style.cursor = 'grabbing';
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // set the cursor back to normal
    select('.workspace').style.cursor = 'grab';
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}