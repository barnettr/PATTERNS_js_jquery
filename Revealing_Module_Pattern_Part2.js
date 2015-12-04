// revealing module pattern
var anchorChange4 = function () {
    
    // this will be a private property
    var config = {
        colors: [ "#F63", "#CC0", "#CFF" ]
    }
    
    // this will be a public method
    var init = function () {
        var self = this; // assign reference to current object to "self"
    
        // get all links on the page
        var anchors = document.getElementsByTagName("a");
        var size = anchors.length;
        
        for (var i = 0; i &lt; size; i++) {
            anchors[i].color = config.colors[i];
            
            anchors[i].onclick = function () {
                self.changeColor(this, this.color); // this is bound to the anchor object
                return false;
            };
        }
    }
    
    // this will be a public method
    var changeColor = function (linkObj, newColor) {
        linkObj.style.backgroundColor = newColor;
    }
    
    return {
        // declare which properties and methods are supposed to be public
        init: init,
        changeColor: changeColor
    }
}();

//	As with all the other patterns, you need to call the respective function in a script block in your page:
<script type="text/javascript">
anchorChange4.init();
</script>

//	calculator with the ability to store results in its memory. 
//	To do so we add a private variable ‘mem‘ and expose a function to retrieve data. 
//	Any declared function or variable will be private unless we add it as a property to the returned public object.

CalcModule = (function(){
        var pub = {};
        var mem = new Array(); //private variable
                 
        var storeInMemory = function(val) {  //private function
                            mem.push(val);
                    };
             
        pub.add = function(a, b) {
                     var result = a + b;
                     storeInMemory(result); //call to private function
                     return result;
                  };
 
         pub.sub = function(a, b) {
                     var result = a - b;
                     storeInMemory(result); //call to private function
                     return result;
                  };
 
         pub.retrieveFromMemory = function() {
                     return mem.pop();
                 };
 
               return pub;
})();

//	Usage:

CalcModule.add(2,10);
CalcModule.add(5,15);
console.log(CalcModule.retrieveFromMemory()); //outputs 20
console.log(CalcModule.retrieveFromMemory()); //outputs 12


//	Pass jQuery variable into our module so that resolving jQuery variable 
//	inside of module don’t have to search entire scope chain but is available locally. 
//	To do so we simply pass the ‘jQuery’ in the parenthesis used to execute the 
//	function expression. In this example, we use jQuery’s isNumeric() function 
//	to check whether input provided is a number.

CalcModule = (function($){
    var pub = {};
    var INVALID = 'invalid input';
    pub.add = function(a,b){
                  if($.isNumeric(a) && $.isNumeric(b)){
                      return a+b;
                  }
                  else{
                      return INVALID;
                  }
    };
     
    pub.sub = function(a,b){
                  if($.isNumeric(a) && $.isNumeric(b)){
                       return a-b;
                  }
                  else{
                      return INVALID;
                  }
    };
     
    return pub;
})(jQuery); //passed 'jQuery' global variable into local parameter '$'


//	Revealing Module Pattern

CalcModule = (function() {
            var mem = new Array(); //private variable
 
            var storeInMemory = function(val) {  //private function
                mem.push(val);
            };
 
            var add = function(a, b) {
                        var result = a + b;
                        storeInMemory(result); //call to private function
                        return result;
                    };
 
            var sub = function(a, b) {
                        var result = a - b;
                        storeInMemory(result); //call to private function
                        return result;
                    };
 
            var retrieveFromMemory = function() {
                        return mem.pop();
                    };
 
            return {
                add: add,
                sub: sub,
                popMemory: retrieveFromMemory
            };
})();



//	Here is Stoyan’s Pub/Sub implementation.

var publisher = {
    subscribers: {
        any: [] // event type: subscribers
    },
    on: function(type, fn, context) {
        type = type || 'any';
        fn = typeof fn === 'function' ? fn : context[fn];
        if (typeof this.subscribers[type] === "undefined") {
            this.subscribers[type] = [];
        }
        this.subscribers[type].push({ fn: fn, context: context || this });
    },
    remove: function(type, fn, context) {
        this.visitSubscribers('unsubscribe', type, fn, context);
    },
    fire: function(type, publication) {
        this.visitSubscribers('publish', type, publication);
    },
    visitSubscribers: function(action, type, arg, context) {
        var pubtype = type || 'any',
            subscribers = this.subscribers[pubtype],
            i,
            max = subscribers ? subscribers.length : 0;

        for (i = 0; i < max; i += 1) {
            if (action === 'publish') {
                // Call our observers, passing along arguments
                 subscribers[i].fn.call(subscribers[i].context, arg);
            } else {
                if (subscribers[i].fn === arg && subscribers[i].context === context) {
                    subscribers.splice(i, 1);
                }
            }
        }
    }
};




<script type="text/javascript">
jQuery(document).ready(function() {
(function (jQuery) {        

    jQuery.fn.extend({
        cmCreateElementTag: function (options) {

            var defaults = {
                productViewer: jQuery('.tab-content .tab-content-container a.viewer')
            };
            var options = jQuery.extend({}, defaults, options);
			
			return this.each(function () {

                if (options.productViewer.hasClass('viewer')) {
					var style = document.createElement("style");
                    style.type = "text/css";
                    style.innerHTML = "#fbBox #fbContent {width: 850px;}";
                    document.body.appendChild(style);
				};
			});
			
			jQuery('a[href*="youtu.be"]').each(function() {
			    jQuery('#fbBox #fbContent').removeAttr('width');
				jQuery('#fbBox #fbContent').css('cssText', 'width: 664px !important');
			});
		}	
	});
		
})(jQuery);
});

<script type="text/javascript">

jQuery(document).ready(function () {
    if (jQuery('body.pdp').length > 0) {

        var $activeButton = "";
        jQuery("#detailsModule #pdpTabHolder .tab-content a.viewer").attr("data-selected", "viewer");
        jQuery('a[href*="youtu.be"]').attr("data-selected", "youtube");
        
		jQuery("#detailsModule #pdpTabHolder .tab-content a.viewer").on('click', function () {
            $activeButton = jQuery(this).data("selected");
            eventClick($activeButton);
        });
        jQuery('a[href*="youtu.be"]').on('click', function () {
            $activeButton = jQuery(this).data("selected");
            eventClick($activeButton);
        });
        
		function eventClick(a) {
            switch (a) {
                case "viewer":
                    jQuery("#youtube").remove();
                    var style = document.createElement("style");
                    style.type = "text/css";
                    style.id = "viewer";
                    style.innerHTML = "#fbBox #fbContent {width: 850px !important;}";
                    document.body.appendChild(style);
                    break;
                case "youtube":
                    jQuery("#viewer").remove();
                    var style = document.createElement("style");
                    style.type = "text/css";
                    style.id = "youtube";
                    style.innerHTML = "#fbBox #fbContent {width: 664px !important;}";
                    document.body.appendChild(style);
                    break;
            }
        }

    }
});

</script>










