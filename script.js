const passScreen = document.querySelector("#passScreen");
const rangeLevel = document.querySelector("#rangeLevel");
const rangeNum = document.querySelector("#rangeNum");
const lowerCase = document.querySelector("#lowerCase");
const upperCase = document.querySelector("#upperCase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const btn = document.querySelector("#btn");
const copy = document.querySelector("#copy");

rangeNum.textContent = rangeLevel.value;

rangeLevel.addEventListener("input", () => {
  rangeNum.textContent = rangeLevel.value;
});

btn.addEventListener("click", () => {
  passScreen.classList.remove("text-blue-400");
  passScreen.classList.add("font-semibold");
  passScreen.value = generatePassword();
});

function generatePassword() {
  let pass = "";
  let tempPass = "";
  tempPass += lowerCase.checked ? "abcdefghijklmnopqrstuvwxyz" : "";
  tempPass += upperCase.checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  tempPass += numbers.checked ? "0123456789" : "";
  tempPass += symbols.checked ? "!@#$%^&*" : "";

  for (let i = 0; i < rangeLevel.value; i++) {
    pass += tempPass.charAt(Math.floor(Math.random() * tempPass.length));
  }

  return pass;
}

copy.addEventListener("click", () => {
  passScreen.classList.add("text-blue-400");
  passScreen.classList.add("font-semibold");
  
 
  
    navigator.clipboard.writeText(passScreen.value);
    passScreen.value = "";
    passScreen.value = "password has been copied";
  
});
