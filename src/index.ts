import dotenv from 'dotenv-safe';
import add from '@src/math/addNumber';

dotenv.config();

console.log(add(5, 2));
console.log(add(5, 2));

const array = [1, 2, 3, 4];

const testForEach = () => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
  }
  return true;
};

testForEach();
console.log(add(5, 2));

console.log(process.env.MY_NAME);
