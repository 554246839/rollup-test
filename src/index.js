import answer from "the-answer";
import json from "../package.json";
import Test from "./test.ts"

export default function bundle () {
  console.log("the answer is " + answer);
  const a = 1;
  const b = 2;
  console.log(a, b);
  const ab = () => {
    return a + b;
  };
  console.log(ab);

  const test = new Test()
  const val = test.fn(3)
  console.log(val, 'val')

  const treeShaking = 'treeShaking'

  console.log(json.author);
}