const bcrypt = require('bcrypt');
async function checkPass(password, dbPass) {
    const isSame = await bcrypt.compare(password, dbPass);
    return isSame
}



module.exports = {
    checkPass
}