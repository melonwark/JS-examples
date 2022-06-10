const dnaToRna =(text) => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    switch (text[i]){
      case 'G': 
        result = `${result}C`
        break;
      case 'C':
        result = `${result}G`
        break;
      case 'T':
        result = `${result}A`
        break;
      case 'A':
        result = `${result}U`
        break;
      case '':
        result = ''
        break;
      default:
      return result = null
    }
  }
  return result;
}
console.log(dnaToRna('i'))
