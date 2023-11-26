document.getElementById('convertToRGB').addEventListener('click', function () {
  convertToRgb();
});

function convertToRgb() {
  let hexInput = document.getElementById('hexInput').value;

  let rgbColor = hexToRgb(hexInput);

  if (rgbColor) {
    document.getElementById('result').innerText = `RGB Color: (${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
    document.getElementById('colorDisplay').style.backgroundColor = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
    document.getElementById('error').innerText = ""; // Clear any previous error messages
  } else {
    document.getElementById('result').innerText = "";
    document.getElementById('colorDisplay').style.backgroundColor = "";
    document.getElementById('error').innerText = "Please enter a valid hex color code.";
  }
}

function hexToRgb(hex) {
  console.log(hex, "hex")
  hex = hex.replace(/^#/, '');

  let value = parseInt(hex, 16);
  console.log(value, "value")

  if (isNaN(value) || value < 0 || value > 0xFFFFFF) {
    return null; // Return null if the hex code is not valid
  }

  let r = (value >> 16) & 255;
  let g = (value >> 8) & 255;
  let b = value & 255;

  return { r, g, b };
}