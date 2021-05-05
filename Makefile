dev:
	deno run --allow-read ./src/main.ts ./mock/test.json --key dependencies
lint:
	deno lint --unstable
test:
	deno test
build:
	mkdir -p release
	deno compile --unstable --allow-read --output release/jsonkeystringify ./src/main.ts