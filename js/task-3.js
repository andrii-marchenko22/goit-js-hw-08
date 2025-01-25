function getElementWidth(content, padding, border) {
    content = Number.parseInt(content);
    padding = Number.parseInt(padding);
    border = Number.parseFloat(border);

    const totalWidth = content + 2 * (padding + border);

    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200