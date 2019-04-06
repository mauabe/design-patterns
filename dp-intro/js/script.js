//MODULE DESIGN PATTERN
//create an immediate executed function inside a variable to protect the variables and methodos from the global scope

//MODULE REVEAL PATTERN
//move returned functions from module pattern out and
//use _undescore before each private variable and method.

(function(win, doc, $){
var chatModule = (function(){
	var _loadself = 'Me: ';
	var	_leadcomputer= "PC: ";
	var	_aSaid = ["This is a Cyber Chat"];
	var	_msgYes = "Yes, that's a great idea.";
	var	_msgNo= "No, that must be a mistake.";
	var	_aSassyStuff = ["Like mold on books, grow myths on history.",
									"She moved like a poem and smiled like a sphinx.",
									"As long as we don’t die, this is gonna be one hell of a story.",
									"She laughed, and the desert sang.",
									"You’ve got about as much charm as a dead slug.", 
									"Extended didactic emulation",
									"Re-contextualized web-enabled circuit",
									"Right-sized attitude-oriented process improvement",
									"Persevering didactic strategy",
									"Innovative dynamic emulation",
									"Optional hybrid leverage",
									"De-engineered maximized concept",
									"Configurable 24/7 functionalities"
								];

	function _echo(msg){
		_aSaid.push('<div>' + msg + '</div>');

		var aSaidLength = _aSaid.length;
		var start = Math.max(aSaidLength - 6, 0)
		var out = '';

		for(let i = start; i < aSaidLength; i++){
			out += _aSaid[i]
		}
		$('.advert').html(out);
		$('#talk span').text(msg);
	}

	
		function talk(msg) {
			_echo(_loadself + msg);
		};
		function replyYesNo(){
			var msg = Math.random() > .5 ? _msgYes : _msgNo;
			_echo(_leadcomputer + msg)
		};
		function saySassyStuff() {
			var msg = _aSassyStuff[Math.floor(Math.random() * _aSassyStuff.length)];
			_echo(_leadcomputer + msg);
		}
		return {
			talk: talk,
			replyYesNo: replyYesNo,
			saySassyStuff: saySassyStuff
		};
	
})();

$(document).ready(function(){
	chatModule.talk('this is great');
	chatModule.replyYesNo();
	chatModule.saySassyStuff();
});
if(!win.chatModule) win.chatModule = chatModule
})(window, document, jQuery)


console.log(window.chatModule)

// NAME-SPACE DESGIN PATTERN 
// create long names and initialize folders to make sure they are unique
/*
var io = io || {};
io.spepy = io.spepy || {};
io.spepy.jsdp = io.spepy.jsdp || {};
io.spepy.jsdp.sudoChat = io.spepy.jsdp.sudoChat || {};
*/

//OBJECT LITERAL DESIGN PATTERN
// place all variables and methods inside an object literal, to protect them from the global scope.
//const Obj = { all variables and methods in an object to get variables out of global scope}

/*
io.spepy.jsdp.sudoChat = {
	leadself: 'Me: ',
	leadcomputer: "PC: ",
	aSaid: ["This is a Cyber Chat"],
	msgYes: "Yes, that's a great idea.",
	msgNo: "No, that must be a mistake.",
	aSassyStuff : ["Like mold on books, grow myths on history.",
							"She moved like a poem and smiled like a sphinx.",
							"As long as we don’t die, this is gonna be one hell of a story.",
							"She laughed, and the desert sang.",
							"You’ve got about as much charm as a dead slug.", 
							"Extended didactic emulation",
							"Re-contextualized web-enabled circuit",
							"Right-sized attitude-oriented process improvement",
							"Persevering didactic strategy",
							"Innovative dynamic emulation",
							"Optional hybrid leverage",
							"De-engineered maximized concept",
							"Configurable 24/7 functionalities"
						],
	talk: function(msg) {
		this.echo(this.loadself + msg);
	},
  replyYesNo: () => {
		let msg = Math.random() > .5 ? this.msgYes : this.msgNo;
		this.echo(this.leadcomputer + msg)
	},
	saySassyStuff: () => {
		let msg = this.aSassyStuff[Math.floor(Math.random() * this.aSassyStuff.length)];
		this.echo(this.leadcomputer + msg);
	},

  echo: function(msg) {
		this.aSaid.push('<div>' + msg + '</div>');

		let aSaidLength = this.aSaid.length;
		let start = Math.max(aSaidLength - 6, 0)
		let out = '';
		
		for(let i = start; i < aSaidLength; i++){
			out += this.aSaid[i]
		}

		$('.advert').html(out);
		$('#talk span').text(msg);
	}
};
*/




