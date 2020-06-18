// Executes once the DOM is loaded but before the images and styles are loaded
document.addEventListener("DOMContentLoaded", function(){
  fnCollapsibleClassListeners();
  SetExternalLinks();
});

function ToggleSubsections(inputId) {
  var currentStyle = document.getElementById(inputId).style.display;
  // Getting the attribute in javascript only get the inline stype, not the class style
  // So this will be 'none' on the first try
  switch(currentStyle.trim().toLowerCase()){
    case 'block': // And if the page is currently the main section of the inputId, or get current file path
      document.getElementById(inputId).style.display = "none";
      break;
    default:
      document.getElementById(inputId).style.display = "block";
  }
}

function SetExternalLinks() {
  var elems = document.getElementsByClassName("external-link");
  for(let elem of elems){
    if(elem.tagName.toLowerCase() == "a"){
      console.log(elem.getAttribute("href"));
      elem.setAttribute("target", "_blank")
    }
  }
}

// Create collapsible sections (h4)
function fnCollapsibleClassListeners() {
  const collapsibleHeaders = document.getElementsByClassName("collapsible");
  for (let collapsibleHeader of collapsibleHeaders){
    if (collapsibleHeader.tagName == "H4"){
      let indicator = document.createElement("div");
      indicator.innerHTML = "⯈"; // ⯈ ⯆
      indicator.style.color = "rgb(200,200,200)";
      indicator.style.float = "left";
      indicator.style.position = "relative";
      indicator.style.top = "3px";

      // function collapseToggle() {
      const collapseToggle = () => {
        let collapsibleContents = collapsibleHeader.nextElementSibling;
        if (collapsibleContents == undefined) {console.log("The element " +  collapsibleHeader.tagName + 
          " (" + collapsibleHeader.innerHTML + " ...)" + " has no sibling elements to follow");}
        else {
          if (collapsibleContents.style.display === "none"){ // check for equality in both type and value
            collapsibleContents.style.display = "block";
            indicator.innerHTML = "⯆";
          } else {
            collapsibleContents.style.display = "none";
            indicator.innerHTML = "⯈";
          }
        }
      }

      // Initial display
      if (collapsibleHeader.nextElementSibling != undefined){
        // Ensure that the floating relative position for the indicator stays put
        collapsibleHeader.nextElementSibling.style.marginBottom = "30px";
        if (collapsibleHeader.getAttribute("data-show") == 1){
          indicator.innerHTML = "⯆";
        } else {
          collapsibleHeader.nextElementSibling.style.display = "none";
        }
      }

      // Add listener for clicks
      collapsibleHeader.addEventListener("click", collapseToggle);

      // Add the indicator to the document as the final step
      collapsibleHeader.parentElement.insertBefore(indicator,collapsibleHeader);
    }
  }
}
