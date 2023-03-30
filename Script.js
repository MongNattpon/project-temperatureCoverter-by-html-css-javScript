const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const tempinput = document.querySelectorAll("input");

tempinput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let tempValues = parseInt(e.target.value);
    let inputName = e.target.name;

    // * reset value = null *
    if (e.target.value === "") {
      celciusInput.value = null;
      fahrenheitInput.value = null;
      kelvinInput.value = null;
      return;
    }

    if (inputName === "celcius") {
      // ** °C -> °F **
      let fahrenheit = tempValues * 1.8 + 32;
      fahrenheitInput.value = ` ${fahrenheit.toFixed(2)}°F`;

      //* °C -> K
      let kelvin = tempValues + 273;
      kelvinInput.value = `${kelvin.toFixed(2)}K`;
    } else if (inputName === "fahrenheit") {
      // * °F -> °C
      let celcius = (tempValues - 32) / 1.8;
      celciusInput.value = `${celcius.toFixed(2)}°C`;
      //* °F-> K
      let kelvin = (tempValues - 32) / 1.8 + 273;
      kelvinInput.value = `${kelvin.toFixed(2)}K`;
    } else if (inputName === "kelvin") {
      //* K ->  °C
      let celcius = tempValues - 273;
      celciusInput.value = `${celcius.toFixed(2)}°C`;

      //* k -> °F

      let fahrenheit = (tempValues - 273) * 1.8 + 32;
      fahrenheitInput.value = `${fahrenheit.toFixed(2)}°F`;
    }
  });
});

// -- end -- 