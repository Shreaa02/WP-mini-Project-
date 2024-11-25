

document.addEventListener("DOMContentLoaded", () => {
    const calendarCells = document.querySelectorAll(".calendar td");

    calendarCells.forEach(cell => {
        cell.addEventListener("click", () => {
            const eventName = prompt("Enter the event name:");
            if (eventName) {
                const eventSpan = document.createElement("span");
                eventSpan.classList.add("event");
                eventSpan.textContent = eventName;
                cell.appendChild(document.createElement("br")); 
                cell.appendChild(eventSpan);
            }
        });
    });
});
