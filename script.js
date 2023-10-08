// funciton create for calculate the BMI
calculateBMI = () => {
  // get height and weight input values
  const height = document.getElementById("heightInput").value;
  const weight = document.getElementById("weightInput").value;

  // validate input
  if (height === "" || weight === "") {
    alert("Silahkan Masukkan Tinggi dan Berat Badan Anda");
    return;
  }

  // calculate BMI
  let bmi = weight / (height / 100) ** 2;
  let result = "BMI Anda " + bmi.toFixed(2);

  let category = "";

  // determine BMI category
  if (bmi < 18.5) {
    category = "Berat Badan Kurang";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Berat Badan Normal";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Berat Badan Lebih";
  } else {
    category = "Obesitas";
  }

  result += "<br> Kategori: " + category;

  // display result
  document.getElementById("result").innerHTML = result;
};
