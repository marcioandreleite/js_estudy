//Encadeamento opcional e operador de coalescência nula

type Documento = {
    titulo: string
    texto: string
    data?: Date
}

const documento: Documento = {
    titulo: 'O titulo',
    texto: 'O texto',
    // data: new Date()
}
console.log(documento.data?.toDateString() ?? '1- Não existe Data.')
console.log(undefined ?? '2- Não existe Data.')
console.log(null ?? '3- Não existe Data.')
console.log(false ?? '4- Não existe Data.')
console.log(0 ?? '5- Não existe Data.')
console.log('' ?? '6- Não existe Data.')