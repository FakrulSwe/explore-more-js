const names = ['abul', 'kabul', 'dabul', 'abul', 'kabul', 'cabul', 'ebul', 'abul', 'cabul', 'kabul', 'sabul', 'sabul'];

function removeDublicate(names){
    const unique = [];

    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if(unique.includes(element) == false){
            unique.push(element);
        }
        
    }
    return unique;
}

const dublicate = removeDublicate(names);
console.log(dublicate);
