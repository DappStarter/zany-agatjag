require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food biology radar spider equip grunt light army gather'; 
let testAccounts = [
"0x071e9b43961e18351d77dd33d31515a49c8573e18f0f0b4f9c28ef4e591eb614",
"0x9719b09a602d0ba31445a6234dbebe99c7f2751b9b849e7ca1d6ec012190f9a4",
"0x7d9fc95fa28c9ff603632bb65525fb1a3280ace515d0f7d26c1dcf3768f63974",
"0x5ed21b4b66bfe705834ef67ab4dad2737144632bf2cf9db4326fa45a39851a8b",
"0x53ff270232a3b14853d0d800d69a1d743eb6628f7befd56d195cbddcbb559d2a",
"0xc0cd033fccf660c15e3a5577c4b33963856b3eb10d4ae58f906ee44ecf70998f",
"0x4872f2c2d50ef3142f799bd933742e3cf2c38a9c11f534dda47a601b589b0aff",
"0x0dd726898e674620d0ba0224a40ce2e14ec324a24d0c4e6fb217350edc1af986",
"0x92ed65275280eba07eb2bec693f70923eea6eb82b2e96ca6be4791e0cf503734",
"0xaf4738ae95a9631a58febc699ae604d6cab16ed57b71fe630f82bde156a2fa9b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
