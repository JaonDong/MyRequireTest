/**
 * Created by Jack on 6/6/2016.
 */
require.config({
    baseUrl:"js",
   paths:{
       jquery:'jquery',
       test:'test',
       backbone:'backbone',
       underscore:'underscore'
   },
    shim:{
        'underscore': {
            exports: '_'
        },
        jquery:{
            exports:'$'
        },
        backbone:{
            deps:['underscore','jquery'],
            exports:"Backbone"
        }
    }
});

require(['backbone', 'underscore', 'router'], function(){
    Backbone.history.start();   //开始监控url变化
});
