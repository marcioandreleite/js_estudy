//recomendado
//condicional
const body1 = document.querySelector('body')
if (body1) body1.style.background = 'red'


//type assertion
const body3 = document.querySelector('body') as HTMLBodyElement
body3.style.background = 'red'

//HTMLElement
const input = document.querySelector('.intut') as HTMLInputElement
input.value = 'qualquer coisa'
input.focus()

//nao recomendado
//type assertion
const body4 = (document.querySelector('body') as unknown) as number

//Non-null assertion (!)
const body2 = document.querySelector('body')
body2.style.background = 'red'