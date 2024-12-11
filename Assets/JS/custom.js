function calculateAreaTriangle() {

    console.log("Button clicked!");

    const triangleBase = parseFloat(document.getElementById("triangle_base").value);
    const triangleHeight = parseFloat(document.getElementById("triangle_height").value);
    const triangleArea = 0.5 * triangleBase * triangleHeight;

    console.log("Triangle area:", triangleArea);
    const triangleAreaDisplay = document.getElementById("triangle_area");
    triangleAreaDisplay.innerHTML = "Area (A) = <span>" + triangleArea + "</span>cm<sup>2</sup>";

}


console.log("connected");
