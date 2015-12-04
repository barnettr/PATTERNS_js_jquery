myscript={
  current:1,
  init:function(){
    // code
  },
  validate:function(){
    // code 
 
  },
 
  send:function(){
    // code 
  }
}


siblingObject = function() {
     return {
         vars: {
             siblings: null
         },
         init: function () {
             this.vars.siblings = ["John", "Liza", "Peter", "Ralph", "Ginger", "Katherine", "Bill"];
         },
         siblingCount: function () {
             var siblingLength = this.vars.siblings.length;
             return siblingLength;
         },
         joinSiblingNames: function () {
             return alert("I have " + siblingObject.siblingCount() + " siblings:\n\n" + this.vars.siblings.join("\n"));
         } 
     };
 } ();
 siblingObject.init();
 siblingObject.joinSiblingNames();   //  Outputs  I have 7 siblings: John, Liza, Peter, Ralph, Ginger, Katherine, Bill"
 
 
 
 var myObject = function() {

     var privateVar = 'privateVar: this variable is a private variable named privateVar!';

     var privateMethod = function() {
         return alert('privateMethod: this is a private method, it is named privateMethod!');
     }

     return {
         vars: {
             message: null,
             publicVar: null
         },
         init: function() {
             this.vars.message = "message: this is a public variable called 'message' made from a vars:, and an init function (this.vars.message). It is named message.";
             this.vars.publicVar = "publicVar: this variable is public and named publicVar!";
         },
         showMessage: function() {
             alert(this.vars.message);
         },
         showPublicVar: function() {
             alert(this.vars.publicVar);
         },

         changePublicVar: function(val) {
             this.vars.publicVar = val;
         },

         callPrivateMethod: function() {
             privateMethod();
         },
         callPrivateVar: function() {
             alert(privateVar);
         }
     };
 } ();
 myObject.init();
 myObject.showMessage();
 myObject.showPublicVar();
 myObject.callPrivateMethod();
 myObject.changePublicVar('changePublicVar: this is the changed string value for PublicVar using the changePublicVar Method. Similar to a Get Method.');
 myObject.showPublicVar();
 myObject.callPrivateVar();
 
 
 
 
 //  Object Constructor with Get & Set
        
function objectConstructor(properties) {
    var instance = this; // <-- store reference to instance

    for (var i in properties) {
        (function (i) { // <-- capture looping variable
            instance["get" + i] = function () {
                return alert(properties[i]);
            };

            instance["set" + i] = function (val) {
                properties[i] = val;
            };
        })(i); // <-- pass the variable
    }
}

var userRob = new objectConstructor({
    firstName:  "Robert",
    lastName:   "Barnett",
    firstJob:   "Golfer",
    secondJob:  "Developer",
    age:        61
});

userRob.getfirstName(); // "Robert"
userRob.getlastName();  // "Barnett"
userRob.getfirstJob();  //  "Golfer"
userRob.getsecondJob(); //  "Developer"
userRob.getage();  // 35




employees = {

    "accounting": [
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 23
    },

    {
        "firstName": "Mary",
        "lastName": "Smith",
        "age": 32
    }
    ],
    
    "sales": [
    {
        "firstName": "Sally",
        "lastName": "Green",
        "age": 27
    },

    {
        "firstName": "Jim",
        "lastName": "Galley",
        "age": 41
    }
    ]
};

//var toServer = employees.toJSONString();
//alert(toServer);
alert(employees.toJSONString());





