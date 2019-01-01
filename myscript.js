var isActive = false;
var btn, div, ms;

function createButton() {
    div = document.createElement("div");
    btn = document.createElement("button");
    ms = document.createElement("input");
    lbl = document.createElement("label");
    lbl.textContent = "Speed(ms)";
    div.style.position = "fixed";
    div.style.right = "50%";
    div.style.top = "10px";
    div.style.zIndex = "999999";
    ms.style.width = "30px"
    btn.textContent = "Activate auto-unmute";
    btn.onclick = toggleActive;
    div.appendChild(btn);
    div.appendChild(lbl);
    div.appendChild(ms);
    document.querySelector("body").appendChild(div);
}

function toggleActive() {
    isActive = !isActive;
    btn.textContent = getText();
}

function getText() {
    if (isActive){
      return "Deactivate auto-unmute"
    }
    return "Activate auto-unmute"
}

$(document).ready(function () {
    createButton();
    setTimeout(callback, ms.value || 1000);
});

var simulateClick = function (element) {
    var initEvent = function (elt, str) {
        var clickEvent = document.createEvent("MouseEvents");
        clickEvent.initEvent(str, true, true);
        elt.dispatchEvent(clickEvent)
    };
    initEvent(element, "mousedown");
    initEvent(element, "click");
    initEvent(element, "mouseup");
};

var cachedBtn;

function callback() {
    button = document.querySelector(".c-N-K.a-b.a-b-G.Ha-ha-Sb-b.IQ");
    if (button){
      cachedBtn = button;
    }
    if (isActive && cachedBtn && cachedBtn.parentNode && document.querySelector(".c-N-K.a-b.a-b-G.Ha-ha-Sb-b.IQ").attributes.getNamedItem("aria-pressed").value == "true") {
        simulateClick(button);
    }
    setTimeout(callback, ms.value || 1000);
}
