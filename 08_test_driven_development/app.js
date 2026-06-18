export function normalizeInput(input){

    // return empty string if input does not exists
    if(!input) return '';

    let result = input;

    // trims the spaces
    result = input.trim();

    // removes extra whitespaces
    result = result.replace(/\s+/, ' ');
    
    // capatalizes the input
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