import { parse } from "https://deno.land/std@0.88.0/flags/mod.ts";
import { exists } from "https://deno.land/std@0.88.0/fs/exists.ts";
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
const targetObj = json[key];

if (!targetObj) {
  console.error("Error: No key found.");
  Deno.exit(1);
}

console.log(jsonkeystringify(targetObj));
