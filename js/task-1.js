const elements = document.querySelectorAll(".item");
console.log(`Number of categories: ${elements.length}`);

elements.forEach(element => {
    const textTitle = element.querySelector("h2").textContent;
    const list = element.querySelectorAll("li").length;
    console.log(`Category: ${textTitle}`);
    console.log(`Elements: ${list}`);
});