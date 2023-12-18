export function handleEmptyColumn(context) {
    if (!context.emptyCollumnAdded) {
        const separatorContainer = document.createElement("div");
        separatorContainer.setAttribute("class", "empty-column");
        separatorContainer.innerHTML = `
            <div style="display: flex; width: 100%;"></div>
        `
        context.content.appendChild(separatorContainer);
        context.emptyColumnAdded = true;
    }
}