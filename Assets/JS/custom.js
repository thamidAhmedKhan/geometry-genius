/* getInputValue function */
function inputValueOfId(inputId) {
  const imputValue = parseFloat(document.getElementById(inputId).value);
  return imputValue;
}

/* setInnerText function */
function setInnerTextById(elementId, areaValue) {
  const areaDisplay = document.getElementById(elementId);
  areaDisplay.innerHTML = "Area (A) = " + areaValue + "cm<sup>2</sup>";
}

/* Triangle function */
function calculateAreaTriangle() {
  const triangleBase = inputValueOfId("triangle_base");
  const triangleHeight = inputValueOfId("triangle_height");
  const triangleArea = 0.5 * triangleBase * triangleHeight;

  setInnerTextById("triangle_area", triangleArea);
}

/* Rectangle function */
function calculateAreaRectangle() {
  const rectangleWidth = inputValueOfId("rectangle_width");
  const rectangleLength = inputValueOfId("rectangle_length");
  const rectangleArea = rectangleWidth * rectangleLength;

  setInnerTextById("rectangle_area", rectangleArea);
}

/* Parallelogram function */
function calculateAreaParallelogram() {
  const parallelogramBase = inputValueOfId("parallelogram_base");
  const parallelogramHeight = inputValueOfId("parallelogram_height");
  const parallelogramArea = parallelogramBase * parallelogramHeight;

  setInnerTextById("parallelogram_area", parallelogramArea);
}

/* Rhombus function */
function calculateAreaRhombus() {
  const rhombusD1 = inputValueOfId("rhombus_d1");
  const rhombusD2 = inputValueOfId("rhombus_d2");
  const rhombusArea = 0.5 * rhombusD1 * rhombusD2;

  setInnerTextById("rhombus_area", rhombusArea);
}

/* Pentagon function */
function calculateAreaPentagon() {
  const pentagonPerimeter = inputValueOfId("pentagon_perimeter");
  const pentagonApothem = inputValueOfId("pentagon_apothem");
  const pentagonArea = 0.5 * pentagonPerimeter * pentagonApothem;

  setInnerTextById("pentagon_area", pentagonArea);
}

/* Ellipse function */
function calculateAreaEllipse() {
  const ellipseSr = inputValueOfId("ellipse_sr");
  const ellipseLr = inputValueOfId("ellipse_lr");
  const ellipseArea = 3.14159 * ellipseSr * ellipseLr;

  setInnerTextById("ellipse_area", ellipseArea);
}

console.log("connected");
