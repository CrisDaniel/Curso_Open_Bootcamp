import chalk from "chalk";
import {suma, multiplica} from "./controller.js";

let sum = suma(1, 2);
console.log(sum);

let sum2 = suma(4, 5);
console.log(sum2);

console.log(multiplica(sum, sum2));

console.log(chalk.green('Hola mundo!'));