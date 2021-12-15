const ipfs = require('./src/services/ipfs.service');
const path = require('path');

(async () => {
    // const result = await ipfs.uploadJsonToIpfs({ fName: "Quintin", lName: "Makwe" })
    // console.log('result ', result)
    console.log('this is the path ', path.join(__dirname, './pic.png'));
    const result = await ipfs.uploadFileToIpfs(path.join(__dirname, './pic.png'))
    console.log('result ', result)
})();