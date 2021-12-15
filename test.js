const ipfs = require('./src/services/ipfs.service');

(async () => {
    const result = await ipfs.uploadJsonToIpfs({ fName: "Quintin", lName: "Makwe" })
    console.log('result ', result)
})();