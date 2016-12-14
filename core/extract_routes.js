var _ = require('underscore');
var path = require('path');
var glob = require('glob');
var fs = require('fs');

module.exports = _.map(
  glob.sync(path.join(__dirname, '../app/routes/**/*.js')), function(file) {
    let appName = path.join(
      path.relative(
        path.join(__dirname, '..', 'app', 'routes'),
        path.dirname(file)
      ),
      path.basename(file)
    );
    let contents = fs
      .readFileSync(file)
      .toString()
      .match(/\/\/BEGIN\ ROUTES\nvar\ routes\ =\ ([\s\S]*)\n\/\/END\ ROUTES/m)
    return {
      appName,
      routes: JSON.parse(contents[1].replace(/\'/g,'\"'))
    }
  }
)
