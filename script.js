//leyendo HTML desde  Js

const h1 = document.querySelector("h1")
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn= document.querySelector('#btncalcular')
const presult = document.getElementById('result')
const formu = document.getElementById('formulario')



function btnClick(event){
    /* console.log(event)
    event.preventDefault() */
  const sumaResult = parseInt(input1.value ) + Number(input2.value) 
  presult.innerText = ' resultado: ' + sumaResult
  h1.classList.add('rojo')
   
}

btn.addEventListener('click', btnClick)


/* formu.addEventListener('submit', btnClick)


function btnClick(event){
    console.log(event)
    event.preventDefault()
   const sumaResult = parseInt(input1.value ) + Number(input2.value) 
   presult.innerText = ' resultado: ' + sumaResult
   
}
 */



/* 
const p =  document.querySelectorAll("p"); //selecciona todo los elementos 
const parrafito = document.getElementsByClassName(".parrafito"); // selecciona por clases
const pid = document.getElementById('pid')
const input = document.querySelector("input")
const img = document.createElement('img')
const figure = document.querySelector('figure')

// escribiendo HTML desde Js

input.maxLength = 4
h1.innerText = "hola esto es una modificacion "

h1.getAttribute('class') selleciona los atributos del HTMl
h1.setAttribute('class', 'rojo') modifica los atributos
h1.classList.add('rojo') agrega clases 
h1.classList.remove('verde')
h1.classList.toggle('rojo') depende si la tiene o no se agrega o se quita 
h1.classList.contains('rojo')es como una condicional 
img.setAttribute('src', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
console.log(img)
figure.appendChild(img)
console.log(input.value)
console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})
*/


/* const input = document.querySelector('input');

input.addEventListener('keyup', () => {
  console.log('El usuario ha soltado una tecla!');
});


const element = document.querySelector('#mi-elemento');
const newSpan = document.createElement('span')



element.addEventListener('mouseover', () => {
  console.log('El cursor del mouse está sobre el elemento!');
  h1.classList.remove('verde')
  
    

  
}); 
const elemento = document.querySelector('#mi-elemento');

elemento.addEventListener('copy', () => {
  console.log('El elemento se ha copiado al portapapeles!');
});

const selectElement = document.querySelector('#mi-select');

selectElement.addEventListener('change', (event) => {
  console.log(`El valor seleccionado es: ${event.target.value}`);
});

*/



