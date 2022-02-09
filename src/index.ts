import dotenv from 'dotenv-safe';
import add from '@src/math/addNumber';

dotenv.config();

console.log(add(5, 2));
console.log(add(5, 2));

console.log(process.env.MY_NAME);
