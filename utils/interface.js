import readline from 'readline';


const inter = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

const question = (test)=> new Promise ((resolve)=>
    inter.question(test, resolve)
);


const close = ()=>inter.close();

export {question, close}