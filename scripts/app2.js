const edad= prompt ('Dime tu edad');

if (edad <= 13){
    console.log('Eres un niño');

} else if (edad > 13 && edad < 22) {
    console.log('Eres un adolescente');
} else {
    console.log('Eres un adulto');
}