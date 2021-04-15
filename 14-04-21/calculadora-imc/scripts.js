const calcularIMC = (event) => {
  event.preventDefault();
  const inputPeso = document.querySelector('#peso');
  const inputAltura = document.querySelector('#altura');

  const resposta = document.querySelector('#resposta');

  const peso = inputPeso.value;
  console.log(`Peso: ${peso}`);
  const altura = inputAltura.value;
  console.log(`Altura: ${altura}`);

  inputPeso.classList.remove('error');
  inputAltura.classList.remove('error');
  resposta.classList.remove('resposta-error');

  let error = false;

  if (!peso) {
    inputPeso.classList.add('error');
    error = true;
  }

  if (!altura) {
    inputAltura.classList.add('error');
    error = true;
  }

  if (error) {
    resposta.classList.add('resposta-error');
    resposta.innerHTML = 'Por favor, preencha todos os campos!'
    return;
  }

  const imc = peso / (altura * altura);
  console.log(`IMC: ${imc}`);

  resposta.innerHTML = `O seu IMC é: ${imc.toFixed(2)}`;
}