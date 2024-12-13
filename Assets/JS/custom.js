/* getInputValue function */
function inputValueOfId(inputId) {
  const imputValue = parseFloat(document.getElementById(inputId).value);
  return imputValue;
}

/* setInnerText function */
function setInnerTextById(elementId, areaValue, name) {
  const areaDisplay = document.getElementById(elementId);
  const areaDisplayList = document.getElementById("area_calc_list");
  areaDisplay.innerHTML = "Area (A) = " + areaValue + "cm<sup>2</sup>";
  areaDisplayList.innerHTML +=
    "<p>" + name + " Area (A) = " + areaValue + "cm<sup>2</sup></p>";
}

/* Triangle function */
function calculateAreaTriangle() {
  const tri_N = "Triangle";
  const triangleBase = inputValueOfId("triangle_base");
  const triangleHeight = inputValueOfId("triangle_height");
  const triangleArea = 0.5 * triangleBase * triangleHeight;

  setInnerTextById("triangle_area", triangleArea, tri_N);
}

/* Rectangle function */
function calculateAreaRectangle() {
  const re_N = "Rectangle";
  const rectangleWidth = inputValueOfId("rectangle_width");
  const rectangleLength = inputValueOfId("rectangle_length");
  const rectangleArea = rectangleWidth * rectangleLength;

  setInnerTextById("rectangle_area", rectangleArea, re_N);
}

/* Parallelogram function */
function calculateAreaParallelogram() {
  const pa_N = "Parallelogram";
  const parallelogramBase = inputValueOfId("parallelogram_base");
  const parallelogramHeight = inputValueOfId("parallelogram_height");
  const parallelogramArea = parallelogramBase * parallelogramHeight;

  setInnerTextById("parallelogram_area", parallelogramArea, pa_N);
}

/* Rhombus function */
function calculateAreaRhombus() {
  const rh_N = "Rhombus";
  const rhombusD1 = inputValueOfId("rhombus_d1");
  const rhombusD2 = inputValueOfId("rhombus_d2");
  const rhombusArea = 0.5 * rhombusD1 * rhombusD2;

  setInnerTextById("rhombus_area", rhombusArea, rh_N);
}

/* Pentagon function */
function calculateAreaPentagon() {
  const pe_N = "Pentagon";
  const pentagonPerimeter = inputValueOfId("pentagon_perimeter");
  const pentagonApothem = inputValueOfId("pentagon_apothem");
  const pentagonArea = 0.5 * pentagonPerimeter * pentagonApothem;

  setInnerTextById("pentagon_area", pentagonArea, pe_N);
}

/* Ellipse function */
function calculateAreaEllipse() {
  const el_N = "Ellipse";
  const ellipseSr = inputValueOfId("ellipse_sr");
  const ellipseLr = inputValueOfId("ellipse_lr");
  const ellipseArea = 3.14159 * ellipseSr * ellipseLr;

  setInnerTextById("ellipse_area", ellipseArea, el_N);
}

/* console.log("connected"); */
/* i just dont wanna remove it */
