const calcularIMC = (event) => {
  event.preventDefault();
  const inputPeso = document.querySelector('#peso');
  const inputAltura = document.querySelector('#altura');

  const peso = inputPeso.value;
  const altura = inputAltura.value;

  const imc = peso / (altura * altura);

  alert(`O seu IMC é: ${imc}`);
}