const button = document.getElementById("button");

function addingEventListener() {
    button.addEventListener("click", addingEventListener);
    return true;
}
