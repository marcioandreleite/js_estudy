type MapSringCallback = (item: string) => string

export function mapStrings(array: string[], callBackfn: MapSringCallback): string[] {
    const newArray: string[] = []
    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        newArray.push(callBackfn(item))
    }
    return newArray
}

const abc = ['a', 'b', 'C']
const abcMapped = mapStrings(abc, item => item.toUpperCase())
console.log(abc)
console.log(abcMapped)
