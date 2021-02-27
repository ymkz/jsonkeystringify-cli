import { parse } from "https://deno.land/std@0.88.0/flags/mod.ts";
import { exists } from "https://deno.land/std@0.88.0/fs/exists.ts";
import { jsonkeystringify } from "./helpers.ts";

const parsedArgs = parse(Deno.args);
const filePath = String(parsedArgs._[0]);
const key = parsedArgs.key;

if (!(await exists(filePath))) {
  console.error("[ERROR] No filepath found.");
  Deno.exit(1);
}

const fileData = await Deno.readFile(filePath);
const decoder = new TextDecoder("utf-8");
const content = decoder.decode(fileData);

const json = JSON.parse(content);
const targetObj = json[key];

if (!targetObj) {
  console.error("[ERROR] No key found.");
  Deno.exit(1);
}

console.log(jsonkeystringify(targetObj));
