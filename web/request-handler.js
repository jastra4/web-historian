var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpHelpers = require('./http-helpers.js');
var url = require('url');

// require more modules/folders here!

exports.handleRequest = function (req, res) {

};



// var path = url.parse(req.url).pathname;
// var asset;
// if (path === '/' && req.method === 'GET') {
//   asset = archive.paths.siteAssets + '/index.html';
//   httpHelpers.serveAssets(res, asset);
// } else if (req.method === 'GET') {
//   var publicFile = archive.paths.siteAssets + path;
//   fs.exists(publicFile, function(inPublic) {
//     if (inPublic) {
//       httpHelpers.serveAssets(res, publicFile);
//     } else {
//       fs.exists(archive.paths.archivedSites + path, function(inArchive) {
//         if (inArchive) {
//           httpHelpers.serveAssets(res, archive.paths.archivedSites + path);
//         } else {
//           res.writeHead(404);
//           res.end();
//         }
//       });      
//     }
//   }); 
// } else if (req.method === 'POST') {
//   archive.isUrlArchived(req.url, function(exists) {//if exists is false, append site}); 
// }