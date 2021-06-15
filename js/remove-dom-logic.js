var remo = document.querySelector("#remove");

function remove() {
    console.log("hey")
    localStorage.removeItem("regNumber");
    var li = document.getElementsByTagName("li")
    for (var i = 0; i < li.length; i++) {
        li[i].remove();
    }
    try {
        li[0].remove();
    } catch {
        console.log("undefined")
    }
}
remo.addEventListener("click", remove);