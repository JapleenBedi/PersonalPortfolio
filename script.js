let text=document.querySelector(".text p");
const characters = text.textContent.split("").map((char, i) => {
    return `<b style="transform: rotate(${i * 6.7}deg);">${char}</b>`;
});
text.innerHTML = characters.join("");