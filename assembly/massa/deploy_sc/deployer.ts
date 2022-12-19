import { generateEvent, Args, getOpKeys, getOpData, createSC, call, functionExists } from "@massalabs/massa-as-sdk";

export function main(): void {
    const keys = getOpKeys();

    keys.forEach(function (key) {
        const bytecode = getOpData(key);
        const address = createSC(bytecode);
        generateEvent("sc created");

        if (functionExists(address, "constructor")) {
            generateEvent("constructor exists and will be called");
            call(address, "constructor", new Args(), 0);
        }
    });
}
