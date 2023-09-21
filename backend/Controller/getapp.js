const path = require('path')

exports.getapp = async (req, res)=>{
    res.sendFile(path.resolve('backend/view/afterlogin.html'))
    res.end();
}