calculateBMI = () => {
  const height = document.getElementById("heightInput").value;
  const weight = document.getElementById("weightInput").value;

  // Validasi Input
  if (height === "" || weight === "") {
    alert("Please Enter Your Height and Weight");
    return;
  }

  let bmi = weight / (height / 100) ** 2;
  let result = "Your BMI is " + bmi.toFixed(2) + " which means you are";

  let category = "";

  // Kategori BMI
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal Weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  result += "<br> Category: " + category;

  // Menampilkan Hasil
  document.getElementById("result").innerHTML = result;
};
