const objetoA: {
    readonly chaveA: string
    chaveB: string
    chaveC?: string
    [key: string]: unknown

} = {

    chaveA: 'valorA',
    chaveB: 'valorB',
}
objetoA.chaveA = 'Outro Valor'
objetoA.chaveC = 'Outro Objeto'
objetoA.chaveD = 'Outro Novo'