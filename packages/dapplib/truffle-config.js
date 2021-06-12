require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind around inner process bridge torch'; 
let testAccounts = [
"0x236a69055254caf254d22a164773f24ceeb737aedc876086361ffa44d96eb020",
"0x01418576349583f0090b66617e81402327cec4880fbb2982aa9ceb193cd4df32",
"0xaa90747e28461de57b5dd135d0a28cd1a6f5c715bb6f319b37b4d7d1ec269f26",
"0xe972d7ff720638f4211eb4b86ee1b30241174751b9d3e2bac8b8a5eecd43f26b",
"0x7002971665b8cf60cbae921d6b48b25f2393eb088664829ccd99ac7925355aa8",
"0xd7b9614df9bf9134f76caa081723af36b69ca8e02cb715b5a37674027a06e2b8",
"0x789ae4b90c1420cc0503ff16c102948d07fa2b048eab90c86965a6bc2437cc39",
"0x583994325fe66ea8aec7fe41f3234f62fb59fed07170c4559d955ef33ae12f88",
"0x7b4443bf229cdafc1e05ec3ab891ec3f620207f48b9442904931d07c78f3f26e",
"0x1a01222bebdea724d1a863c184172901f527b25d1d5df11cc5694df80ef59372"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

