/**
 * Created by Jack on 6/6/2016.
 */
define(['backbone'],function(){
    var Router=Backbone.Router.extend({
        routers:{
            'user':'user',
            'pageNotFind':'pageNotFind'
        },
        //initialize
        initialize:function(){
          console.log("初始化路由");
        },
        user:function(){
            var url="user/controller1.js";
            require([url],function(controller){
                controller();
            });
        },
        pageNotFind:function(){
            console.log("404");
        }
    });
    var router=new Router();
    router.on('route', function (route, params) {
        console.log('hash change', arguments);  //这里route是路由对应的方法名
    });
    return router;
});