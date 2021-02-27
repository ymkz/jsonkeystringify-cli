dev:
	deno run --allow-read ./src/main.ts ./mock/test.json --key dependencies
test:
	deno test
build:
	deno compile --unstable --allow-read --output jsonkeystringify ./src/main.ts