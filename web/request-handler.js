var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  console.log(req.url);
  const src = fs.createReadStream(archive.paths.siteAssets + req.url);
  src.pipe(res);

  src.on('end', function() {
    res.end();
  });
};
