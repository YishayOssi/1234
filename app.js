import { question } from "readline-sync"
import { nanoid } from 'nanoid'


const name = question("give me name: ")
console.log(`hello ${name} ${nanoid(5)}`);
