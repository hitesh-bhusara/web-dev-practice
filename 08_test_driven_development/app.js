export function normalizeInput(input){
    if(!input) return '';
    let result = input;
    result = input.trim();

    result = result.replace(/\s+/, ' ');

    result = result
        .split(' ')
        .filter(Boolean)
        .map(
           (word) =>
               word.charAt(0) .toUpperCase()+
               word.slice(1).toLowerCase()            
        )
        .join(' ');

    return result;
}