const mybtn = document.getElementById("mybutton");
const buffer = 50;
const moveDistance = 60;

function buttonClicked(){
    alert("You are GAY!!!");
    document.body.style.backgroundImage = "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)";
    let heading = document.createElement("H1");
    heading.innerText = "You are GAY!!!";
    document.body.appendChild(heading);
    heading.style.color = "black";
    heading.style.borderRadius = "10px";
}


function moveButtonAway(e) {
    const rect = mybtn.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    // Direction vector from mouse to button center
    const dx = btnCenterX - e.clientX;
    const dy = btnCenterY - e.clientY;
    const length = Math.sqrt(dx * dx + dy * dy) || 1;

    // Normalize and scale
    const moveX = (dx / length) * moveDistance;
    const moveY = (dy / length) * moveDistance;

    // Current position
    let newLeft = rect.left + moveX;
    let newTop = rect.top + moveY;

    // Clamp within window
    newLeft = Math.max(buffer, Math.min(window.innerWidth - rect.width - buffer, newLeft));
    newTop = Math.max(buffer, Math.min(window.innerHeight - rect.height - buffer, newTop));

    mybtn.style.position = "absolute";
    mybtn.style.left = `${newLeft}px`;
    mybtn.style.top = `${newTop}px`;
}

mybtn.addEventListener("mousemove", moveButtonAway);
mybtn.addEventListener("click", buttonClicked);