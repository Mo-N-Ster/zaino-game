

// config.js - Script per gestire la configurazione del gioco
document.getElementById("startGame").addEventListener("click", function() {
    const maxWeight = document.getElementById("maxWeight").value;
    const itemsInput = document.getElementById("items").value;
    const algorithm = document.getElementById("algorithm").value;
    
    const items = itemsInput.split(",").map(item => {
        const [value, weight] = item.split(";").map(Number);
        return { value, weight };
    });
    
    localStorage.setItem("maxWeight", maxWeight);
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("algorithm", algorithm);
    
    window.location.href = "index_game.html";
});