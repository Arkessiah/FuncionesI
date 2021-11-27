// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Funciones I', () => {
  it('La función saluda existe', () => {
    expect(saluda).to.not.be.an('undefined');
  });

  it('La función saluda funciona correctamente', () => {
    const result = saluda('Upgrade Hub');
    expect(result).to.equal('Te damos al bienvenida, Upgrade Hub');
  });

  it('La variable mensajeSaludo es el resultado de invocar a saluda con el string "Upgrade"', () => {
    expect(mensajeSaludo).to.equal('Te damos al bienvenida, Upgrade');
  });

  it('La función sumaTextos existe', () => {
    expect(sumaTextos).to.not.be.an('undefined');
  });

  it('La función sumaTextos funciona correctamente', () => {
    const result = sumaTextos('Vamos a', 'programar en Upgrade Hub');
    expect(result).to.equal('Vamos a programar en Upgrade Hub');
  });

  it('La variable textoFinal es el resultado de invocar a sumaTextos con los argumentos "Estoy sumando" y "dos cadenas de texto"', () => {
    expect(textoFinal).to.equal('Estoy sumando dos cadenas de texto');
  });
});
