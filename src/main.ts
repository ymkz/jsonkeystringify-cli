import { parse, exists } from "./deps.ts";
import { jsonkeystringify } from "./helpers.ts";

const parsedArgs = parse(Deno.args);
const file = String(parsedArgs._[0]);
const key = parsedArgs.key;

if (!file || !(await exists(file))) {
  console.error("Error: No file found.");
  Deno.exit(1);
}

const content = await Deno.readTextFile(file);
const json = JSON.parse(content);
const target = json[key];

if (!target) {
  console.error("Error: No key found.");
  Deno.exit(1);
}

console.log(jsonkeystringify(target));
