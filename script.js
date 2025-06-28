const mybtn = document.getElementById("mybutton");
const buffer = 50;
    
function moveButton() {
    const buttonwidth = mybtn.offsetWidth;
    const buttonheight = mybtn.offsetHeight;
    
    const maxX = window.innerWidth - buttonwidth - buffer;
    const maxY = window.innerHeight - buttonheight - buffer;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    mybtn.style.position = "absolute";
    mybtn.style.left = `${randomX}px`;
    mybtn.style.top = `${randomY}px`;
}
mybtn.addEventListener("mouseover", moveButton);