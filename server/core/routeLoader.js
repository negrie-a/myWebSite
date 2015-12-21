var fs = require('fs');
var root = $path.server;

function loadAll(app, path)
{
    fs.readdirSync(root + path).forEach(function(file) {
        if (file.indexOf('.js') == -1)
            loadAll(app, path + '/' + file);
        else
        {
            var route = file.substr(0, file.length - 3);
            var controller = require(root + path + '/' + route);
            for (action in controller)
            {
                for (index in controller[action]){
                    app[controller[action][index].verb](path + action, controller[action][index].action);
                    console.log(controller[action][index].acl.level + '\t [' + controller[action][index].verb + ']' + (controller[action][index].verb == 'delete' ? '\t' : '\t\t') + path + action);
                }
            }
        }
    });
}

exports.load = function(app, location){
    root += location;
    console.log('======== ROUTES ========\n');
    loadAll(app, '');
    console.log('\n========================');
}
