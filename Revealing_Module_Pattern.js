var mySamplePage=function(){

    var counter=0;

    

    var callBackFunction = function(response)

    {

        //process ajax response here...

    };

    

    var pageLoadAjaxCalls=function(){

        $.ajax({

            type: "POST",

            url: "CTypesHandler.ashx",

            data:"{}",

            success: callBackFunction,

            error: function(){}

        });

    };

    

    var bindEvents=function(){

        $('#submitButton').click(function(){

          //code for submit click event

            counter++;

        });

        

        $('#saveButton').click(function(){

          //code for save click event

        });

    };

    

    var validate=function(){

      $('#FormId').validate(){

          //code for validation

      };

    };

    

    var pageLoadOperations=function(){

        validate();

        pageLoadAjaxCalls();

        bindEvents();

    };

    

    return{

        init:pageLoadOperations

    };   

}

 

$(document).ready(function(){

    vare page= new mySamplePage();

    page.init();

});



//	Module Pattern – jQuery
//	liberary module
function library(module) {
    
	$(function(){
        
		if (module.init) {
            module.init();
        }
		
    });
	
    return module;
}
 
var myLibrary = library(
    
	function(){
        
		return {
            
			init: function() {
                /*implementation*/
            }
			
        };
		
    }()
	
);




/**
 * AMD: define()
 * define a signature with define(id /*optional, [dependencies], /*factory module instantiation of fn);
 */
 //	Better – Asynchronous Module Definition, or AMD
 
define(
    /*module id*/
    'myModule',
 
    /*dependencies*/
    ['foo', 'bar;', 'baz'],
 
    /*definition for the module export*/
    function(foo, bar, baz){
 
        /*module object*/
        var module = {};
 
        /*module methods go here*/
        module.hello = foo.getSomething();
        module.goodbye = bar.getSomething();
 
        /*return the defined module object*/
        return module;
    }
);
 
/**
 * AMD: require()
 * load top-level code for JS files or inside modules for dynamically fetching dependencies
 */
 
/* top-level: the module exports (one, two) are passed as function arguments ot the object */
require(['one', 'two'], function(one, two){
    ...
});
 
/*inside: the complete example*/
define('three', ['one', 'two'], function(one, two){
    /**
     * require('string') can be used inside the function to get the module export
     * of a module that has already been fetched and evaluated
     */
 
    var temp = require('one');
 
    /*this will fail*/
    var four = require('four');
 
    /* return a value to define the module export */
    return function(){ ... };
});




//	Best: CommonJS – Widely adopted server-side format
/**
 * basically contains two parts: an exports object that contains the objects a module wishes to expose
 * and a require function that modules can use to import the exports of other modules
 */
 
/* here we achieve compatibility with AMD and CommonJS using some boilerplate around the CommonJS module format*/
(function(define){
    define(function(require,exports){
         /*module contents*/
         var dep1 = require("foo");
         var dep2 = require("bar");
         exports.hello = function(){...};
         exports.world = function(){...};
    });
})( typeof define=="function" ? define : function(factory){ factory(require, exports) });
 
// Harmonious revelations: ES Harmony, the the successor to ECMAScript 5
 
/**
 * 1. static scoping
 * 2. simple
 * 3. reusable modules
 */
 
// Basic module
module SafeWidget {
    import alert from Widget;
    var _private ="someValue";
 
    // exports
    export var document = {
        write: function(txt) {
            alert('Out of luck, buck');
        },
        ...
    };
}
 
// Remote module
module JSONTest from 'http://json.org/modules/json2.js';
