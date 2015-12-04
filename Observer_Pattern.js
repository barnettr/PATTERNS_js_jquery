//	example of the push method:
//	First off, all the functions related to the observer pattern are implemented within Observable.


var Observable = function() {
    this.subscribers = [];
}
 
Observable.prototype = {
    subscribe: function(callback) {
        // In most situations, you would check to see if the
        // callback already exists within the subscribers array,
        // but for the sake of keeping us on track and because
        // this isn't necessarily included, we'll leave it out.
        // Just add the callback to the subscribers list
        this.subscribers.push(callback);
    },
    unsubscribe: function(callback) {
        var i = 0,
            len = this.subscribers.length;
         
        // Iterate through the array and if the callback is
        // found, remove it.
        for (; i < len; i++) {
            if (this.subscribers[i] === callback) {
                this.subscribers.splice(i, 1);
                // Once we've found it, we don't need to
                // continue, so just return.
                return;
            }
        }
    },
    publish: function(data) {
        var i = 0,
            len = this.subscribers.length;
         
        // Iterate over the subscribers array and call each of
        // the callback functions.
        for (; i < len; i++) {
            this.subscribers[i](data);
        }       
    }
};
 
var Observer = function (data) {
    console.log(data);
}
 
// Here's where it gets used.
observable = new Observable();
observable.subscribe(Observer);
observable.publish('We published!');



//	 implement pull method of the observer pattern. When you're using the pull method, 
//	it makes more sense to swap things around a bit:

// 	it will check on the status of the observable(s) it is subscribed to. Normally this 
//	would be on a timer or something, but I decided to keep it simple and just call it manually. 
//	Once again Observable in this code shouldn't technically be used by itself. 
//	Instead it should be subclassed so that there are built in mechanisms that change the status, 
//	rather than manually changing it like the example.

Observable = function() {
    this.status = "constructed";
}
Observable.prototype.getStatus = function() {
    return this.status;
}
 
Observer = function() {
    this.subscriptions = [];
}
Observer.prototype = {
    subscribeTo: function(observable) {
        this.subscriptions.push(observable);
    },
    unsubscribeFrom: function(observable) {
        var i = 0,
            len = this.subscriptions.length;
         
        // Iterate through the array and if the observable is
        // found, remove it.
        for (; i < len; i++) {
            if (this.subscriptions[i] === observable) {
                this.subscriptions.splice(i, 1);
                // Once we've found it and removed it, we
                // don't need to continue, so just return.
                return;
            }
        }       
    }
    doSomethingIfOk: function() {
        var i = 0;
            len = this.subscriptions.length;
         
        // Iterate through the subscriptions and determine
        // whether the status has changed to ok on each of them,
        // and do something for each subscription that has
        for (; i < len; i++) {
            if (this.subscriptions[i].getStatus() === "ok") {
                // Do something because the status of the
                // observable is what we want it to be
            }
        }
    }
}
 
var observer = new Observer(),
    observable = new Observable();
observer.subscribeTo(observable);
 
// Nothing will happen because the status hasn't changed
observer.doSomethingIfOk();
 
// Change the status to "ok" so now something will happen
observable.status = "ok";
observer.doSomethingIfOk();
