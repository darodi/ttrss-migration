tt-rss:17.4 (af13f30)
var PluginHost={HOOK_ARTICLE_RENDERED:1,HOOK_ARTICLE_RENDERED_CDM:2,HOOK_ARTICLE_SET_ACTIVE:3,HOOK_FEED_SET_ACTIVE:4,HOOK_FEED_LOADED:5,HOOK_ARTICLE_EXPANDED:6,HOOK_ARTICLE_COLLAPSED:7,HOOK_PARAMS_LOADED:8,HOOK_RUNTIME_INFO_LOADED:9,HOOK_FLOATING_TITLE:10,hooks:[],register:function(name,callback){if(typeof(this.hooks[name])=='undefined')
this.hooks[name]=[];this.hooks[name].push(callback);},run:function(name,args){console.warn('PluginHost::run '+name);if(typeof(this.hooks[name])!='undefined')
for(i=0;i<this.hooks[name].length;i++)
if(!this.hooks[name][i](args))break;}};