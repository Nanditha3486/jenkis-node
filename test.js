const add = require('./index');

if (add(10,20)===30){
    console.log('the result is correct!!');
    process.exit(0);
}else{
    console.log('result is incorrect');
    process.exit(1);
}
