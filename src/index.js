import answer from "the-answer";
import json from "../package.json";

export default function () {
  console.log("the answer is " + answer);
  const a = 1;
  const b = 2;
  console.log(a, b);
  const ab = () => {
    return a + b;
  };
  console.log(ab);

  const treeShaking = 'treeShaking'

  console.log(json.author);
}