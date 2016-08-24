/*
 * *****
 * WRITTEN BY FLORIAN RAPPL, 2012.
 * florian-rappl.de
 * mail@florian-rappl.de
 * *****
 */

var keys = {
	bind : function() {
		$(document).on('keydown', function(event) {
			return keys.handler(event, true);
		});
		$(document).on('keyup', function(event) {
			return keys.handler(event, false);
		});
	},
	reset : function() {
		keys.left = false;
		keys.right = false;
		keys.accelerate = false;
		keys.up = false;
		keys.down = false;
	},
	unbind : function() {
		$(document).off('keydown');
		$(document).off('keyup');
	},
	handler : function(event, status) {
		switch(event.keyCode) {
			case 57392://CTRL on MAC
			case 17://CTRL
			case 65://A
				keys.accelerate = status;
				break;
			case 40://DOWN ARROW
				keys.down = status;
				break;
			case 39://RIGHT ARROW
				keys.right = status;
				break;
			case 37://LEFT ARROW
				keys.left = status;
				break;
			case 38://UP ARROW
				keys.up = status;
				break;
			default:
				return true;
		}
			
		event.preventDefault();
		return false;
	},
	accelerate : false,
	left : false,
	up : false,
	right : false,
	down : false,
};



function __triggerKeyboardDown(el, keyCode)
{
    var eventObj = document.createEventObject ?
        document.createEventObject() : document.createEvent("Events");
  
    if(eventObj.initEvent){
      eventObj.initEvent("keydown", true, true);
    }
  
    eventObj.keyCode = keyCode;
    eventObj.which = keyCode;
    
    el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent("onkeydown", eventObj); 
  
} 

function __triggerKeyboardUp(el, keyCode)
{
    var eventObj = document.createEventObject ?
        document.createEventObject() : document.createEvent("Events");
  
    if(eventObj.initEvent){
      eventObj.initEvent("keyup", true, true);
    }
  
    eventObj.keyCode = keyCode;
    eventObj.which = keyCode;
    
    el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent("onkeydown", eventObj); 
  
} 


function traceEvent(e){
    $(".logs").prepend(jQuery("<li>").html(
      "Key = " + e.keyCode
    ).fadeIn());
    
    console.log(e);
}



$(document).ready(function(){
  
	c_left.onmousedown = function(){
	__triggerKeyboardDown(document.body, 37);
	}
	c_right.onmousedown = function(){
	__triggerKeyboardDown(document.body, 39);
	}
	c_up.onmousedown = function(){
	__triggerKeyboardDown(document.body, 38);
	}
	c_down.onmousedown = function(){
	__triggerKeyboardDown(document.body, 40);
	}
	c_accelerate.onmousedown = function(){
	__triggerKeyboardDown(document.body, 17);
	}

	c_left.onmouseup = function(){
	__triggerKeyboardUp(document.body, 37);
	}
	c_right.onmouseup = function(){
	__triggerKeyboardUp(document.body, 39);
	}
	c_up.onmouseup = function(){
	__triggerKeyboardUp(document.body, 38);
	}
	c_down.onmouseup = function(){
	__triggerKeyboardUp(document.body, 40);
	}
	c_accelerate.onmouseup = function(){
	__triggerKeyboardUp(document.body, 17);
	}

	
	c_left.onmouseout = function(){
	__triggerKeyboardUp(document.body, 37);
	}
	c_right.onmouseout = function(){
	__triggerKeyboardUp(document.body, 39);
	}
	c_up.onmouseout = function(){
	__triggerKeyboardUp(document.body, 38);
	}
	c_down.onmouseout = function(){
	__triggerKeyboardUp(document.body, 40);
	}
	c_accelerate.onmouseout = function(){
	__triggerKeyboardUp(document.body, 17);
	}


  /*
  setInterval(function(){
    __triggerKeyboardEvent(document.body, 13);
  }, 5000);
  */
}); 
