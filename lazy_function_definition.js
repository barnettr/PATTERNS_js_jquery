// lazy function definition
var anchorChange5 = function () {
    // define configuration
    var config = {
        colors: [ "#F63", "#CC0", "#CFF" ]
    };
    
    // get all links
    var anchors = document.getElementsByTagName("a");
    var size = anchors.length;
    
    // loop through anchors and attach events
    for (var i = 0; i &lt; size; i++) {            
        anchors[i].color = config.colors[i];
        
        anchors[i].onclick = function () {
            anchorChange5().changeColor(this, this.color);
            return false;
        };
    }
    
    // redefine function so that it only holds the changeColor function 
    anchorChange5 = function () {
        return {
            changeColor: function (linkObj, newColor) {
                linkObj.style.backgroundColor = newColor;
            }
        };
    };
};

<script type="text/javascript"> 
	anchorChange5(); 
</script> - See more at: http://www.klauskomenda.com/code/javascript-programming-patterns/#module

