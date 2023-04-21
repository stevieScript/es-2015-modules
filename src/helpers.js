const choice = (items) => {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

const remove = (items, item) => {
    let idx = items.indexOf(item);
    if (idx !== -1) {
        items.splice(idx, 1);
        return items;
    }
}

export { choice, remove };