function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('X e Y precisam ser números.');
    }
    return x + y;     
}

try {
    console.log(soma('2',3));
} catch(error) {
    console.log(error);
}