#!/bin/sh

echo ">> Building contract"

near-sdk-js build src/candy_machine.js build/candy_machine.wasm
