
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("dashboard-container");
    const data = [
        { name: "Bitcoin (BTC)", price: "$115654.00", change: "1.38% 24h", note: "Expect volatility." },
        { name: "Ethereum (ETH)", price: "$3713.92", change: "6.38% 24h", note: "Caution advised." },
        { name: "Solana (SOL)", price: "$169.76", change: "4.60% 24h", note: "Room to grow." },
        { name: "PAX Gold (PAXG)", price: "$3375.14", change: "0.39% 24h", note: "Expect volatility." }
    ];
    data.forEach(asset => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<h2>${asset.name}</h2><p>${asset.price}</p><p class="green">${asset.change}</p><p>${asset.note}</p>`;
        container.appendChild(div);
    });
});
