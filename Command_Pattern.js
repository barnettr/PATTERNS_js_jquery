//	specific methods that this implements: enable, disable, reset, and set.
//	For each one of these methods, we'll create a command object to encapsulate it:

var EnableAlarm = function(alarm) {
    this.alarm = alarm;
}
EnableAlarm.prototype.execute = function () {
    this.alarm.enable();
}
 
var DisableAlarm = function(alarm) {
    this.alarm = alarm;
}
DisableAlarm.prototype.execute = function () {
    this.alarm.disable();
}
 
var ResetAlarm = function(alarm) {
    this.alarm = alarm;
}
ResetAlarm.prototype.execute = function () {
    this.alarm.reset();
}
 
var SetAlarm = function(alarm) {
    this.alarm = alarm;
}
SetAlarm.prototype.execute = function () {
    this.alarm.set();
}



//	Now we'll need to use the command objects. We'll be giving them over to a 
//	UI object that adds a button to the screen and when the button is clicked 
//	it runs the execute method on the command object that was passed into it. 
//	Of course, it knows which method to invoke because all of the commands use the same interface.

var alarms = [/* array of alarms */],
    i = 0, len = alarms.length;
 
for (; i < len; i++) {
    var enable_alarm = new EnableAlarm(alarms[i]),
        disable_alarm = new DisableAlarm(alarms[i]),
        reset_alarm = new ResetAlarm(alarms[i]),
        set_alarm = new SetAlarm(alarms[i]);
     
    new Button('enable', enable_alarm);
    new Button('disable', disable_alarm);
    new Button('reset', reset_alarm);
    new Button('set', set_alarm);
}

//	Not much to it. Instead of creating an object that has a method to be called, 
//	we just create a function that is used as a callback. It's mostly useless 
//	unless it'll actually do more than just call the one specific function. 
//	It also can be used as a means to make your code a bit more secure. Assuming 
//	that the invoker is third party code, it could possibly make alterations to the 
//	receiver's method by adding, changing, or nullifying its properties. This is extremely unlikely though

var makeEnableCommand = function (alarm) {
    return function() {
        alarm.enable();
    }
}
 
var makeDisableCommand = function (alarm) {
    return function() {
        alarm.disable();
    }
}
 
var makeResetCommand = function (alarm) {
    return function() {
        alarm.reset();
    }
}
 
var makeSetCommand = function (alarm) {
    return function() {
        alarm.set();
    }
}
