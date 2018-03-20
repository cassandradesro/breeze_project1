"use strict";

// cycle through top-right corner info thingies
var changeCornerThingy = function() {
	var $weatherCorner = document.querySelector(".weather")
	var $timeCorner = document.querySelector(".time")
	var $arrivalCorner = document.querySelector(".arrival")

	if ($weatherCorner.classList.contains("active")) {
		$weatherCorner.classList.remove("active");
		$timeCorner.classList.add("active");
	} else if ($timeCorner.classList.contains("active")) {
		$timeCorner.classList.remove("active");
		$arrivalCorner.classList.add("active");
	} else if ($arrivalCorner.classList.contains("active")) {
		$arrivalCorner.classList.remove("active");
		$weatherCorner.classList.add("active");
	}
}
setInterval(changeCornerThingy, 5*1000);

var updateTimeInTimeCorner = function() {
	var $timeCornerSpan = document.querySelector(".time span");
	$timeCornerSpan.innerHTML = moment().format('LT');
}
setInterval(updateTimeInTimeCorner, 60 * 1000);

updateTimeInTimeCorner();

(function martaWorkflow (){
	var $homepageBreeze = document.querySelector(".home-page h1"),
	    $homepageTicket = document.querySelector(".home-page p"),
	    $startPage = document.querySelector(".start-page"),
	    $startPageDiv = document.querySelector(".start-page div"),
	    $startQuestion = document.querySelector(".start-question"),
	    $yesButton = document.querySelector("#box-yes"),
	    $noButton = document.querySelector("#box-no"),
	    $recommendPage = document.querySelector(".recommend-page"),
	    $recommendation = document.querySelector(".recommendation"),
	    $boxBuy = document.querySelector(".box-buy"),
	    $boxAlternative = document.querySelector(".box-alternative"),
	    $ticketPage = document.querySelector(".ticket-page"),
	    $howmanyPage = document.querySelector(".howmany-page"),
	    $ticketTypeTitle = document.querySelector(".ticketType-title"),
	    $breezeTypeTitle = document.querySelector(".breezeType-title"),
	    $ticketType = document.querySelector(".ticketType"),
	    $addType = document.querySelector(".addType"),
	    $counter = document.querySelector(".counter"), 
	    $total = document.querySelector(".total span"),
	    $payPage = document.querySelector(".pay-page"),
	    $buyingThis = document.querySelector(".this"),
	    $buyingThat = document.querySelector(".that"),
	    $topCornerDisplay = document.querySelector(".topcorner-display"),
	    $breezePage = document.querySelector(".breeze-page"),
	    $homepage = document.querySelector(".home-page");

	    document.querySelector(".question").addEventListener("click", function(){
	    	document.querySelector(".display-text").innerHTML = "";
	    	document.querySelector(".display-text").innerHTML = "Attendant will be over shortly to assist you further.";
	  
	    });

	$homepageTicket.addEventListener("click", function(){ // I don't have a breeze card
		console.log("i see this clicked"); 
		$homepage.classList.remove("active");
		console.log("homepage removed");
		$startPage.classList.add("active"); // show me a question
		console.log("start page active, boxes active");
		$startQuestion.innerHTML = "Will you be riding today only?";
		document.querySelector(".display-text").innerHTML = "";
		document.querySelector(".display-text").innerHTML = "You can tap your Breeze Card at any time if you have one.";
	});	

	$homepageBreeze.addEventListener("click", function(){
		$homepage.classList.remove("active");
		$breezePage.classList.add("active");
	})

	$noButton.addEventListener("click", function(){
		console.log('no');
		$noButton.classList.add("clicked");
		console.log("class called clicked is added to Nobutton"); // if I say no, ask me another question
		$startQuestion.innerHTML = "Will you be traveling with multiple people?";

		if ($noButton.classList.contains("clicked") === true ){ // if you see that I said no, to the first then when I click the second change the page
			console.log("i just read that the noButton was already clicked!");
			$noButton.addEventListener("click", function(){
				$startPage.classList.remove("active");
				$recommendPage.classList.add("active");
				document.querySelector(".display-text").innerHTML = "";
				$recommendation.innerHTML = "Breeze Card ($2)";
				$boxBuy.innerHTML = "Buy Breeze Card";
				$boxAlternative.innerHTML = "No thanks, I'll buy tickets.";
				$boxBuy.addEventListener("click", function(){
					$recommendPage.classList.remove("active");
					$breezePage.classList.add("active");
				});
				$boxAlternative.addEventListener("click", function(){
					$recommendPage.classList.remove("active");
					$ticketPage.classList.add("active");
				});
			});
		}
	}); 

	$yesButton.addEventListener("click", function(){
		document.querySelector(".display-text").innerHTML = "";
		$startPage.classList.remove("active");
		$recommendPage.classList.add("active");
		$recommendation.innerHTML = "non-reloadable ticket ($1 each)";
		$boxBuy.innerHTML = "Buy Ticket(s)";
		$boxAlternative.innerHTML = "No thanks, I'll buy a Breeze Card.";
		$boxBuy.addEventListener("click", function(){
			document.querySelector(".display-text").innerHTML = "";
			$recommendPage.classList.remove("active");
			$ticketPage.classList.add("active");
		});
		$boxAlternative.addEventListener("click", function(){
			document.querySelector(".display-text").innerHTML = "";

			$recommendPage.classList.remove("active");
			$breezePage.classList.add("active");
		});
	}); 

	document.querySelector("#ticket-oneway").addEventListener("click", function(){
		console.log("getting your ONE WAY!");
		$ticketPage.classList.remove("active");
		document.querySelector(".howmany-page").classList.add("active");
		document.querySelector(".breezeType-title").style.display = "none";
		document.querySelector(".ticketType-title span").innerHTML = "One-Way";
		document.querySelector(".language").classList.remove("active");
		document.querySelector(".corner-parallelogram").classList.add("active");
		document.querySelector(".corner-parallelogram p").innerHTML = "Pay Here";
		document.querySelector(".pay-page .that").innerHTML = " One-Way Ticket(s).";


	});
	document.querySelector("#ticket-oneday").addEventListener("click", function(){
		console.log("getting your ONE DAY!");
		$ticketPage.classList.remove("active");
		document.querySelector(".howmany-page").classList.add("active");
		document.querySelector(".breezeType-title").style.display = "none";
		document.querySelector(".ticketType-title span").innerHTML = "One-Day";
		document.querySelector(".language").classList.remove("active");
		document.querySelector(".corner-parallelogram").classList.add("active");
		document.querySelector(".corner-parallelogram p").innerHTML = "Pay Here";
		document.querySelector(".pay-page .that").innerHTML = " One-Day Ticket(s).";

	});
	document.querySelector("#ticket-roundtrip").addEventListener("click", function(){
		console.log("getting your ROUNDTRIP!");
		$ticketPage.classList.remove("active");
		console.log("ticket page removed");
		document.querySelector(".howmany-page").classList.add("active");
		console.log("how many page added");
		document.querySelector(".breezeType-title").style.display = "none";
		document.querySelector(".ticketType-title span").innerHTML = "Roundtrip";
		document.querySelector(".language").classList.remove("active");
		document.querySelector(".corner-parallelogram").classList.add("active");
		document.querySelector(".corner-parallelogram p").innerHTML = "Pay Here";
		document.querySelector(".pay-page .that").innerHTML = " Roundtrip Ticket(s).";
	});


	
	document.querySelector("#breeze-load").addEventListener("click", function(){
		console.log("load card clicked baby!!")
		document.querySelector("#breeze-load").style.backgroundColor = "#D30D41";
		document.querySelector(".second-row").classList.add("active");

		document.querySelector("#add-trips").addEventListener("click", function(){
			console.log("getting your ONE WAY!");
			$breezePage.classList.remove("active");
			document.querySelector(".howmany-page").classList.add("active");
			document.querySelector(".ticketType-title").style.display = "none";
			document.querySelector(".breezeType-title span").innerHTML = "trips";
			document.querySelector(".language").classList.remove("active");
			document.querySelector(".corner-parallelogram").classList.add("active");
			document.querySelector(".corner-parallelogram p").innerHTML = "Pay Here";
			document.querySelector(".pay-page .that").innerHTML = " trip(s)";
			document.querySelector(".pay-page .additional-text").innerHTML = " for your Breeze Card.";
		});
	
		document.querySelector("#add-days").addEventListener("click", function(){
			console.log("getting your ONE DAY!");
			$breezePage.classList.remove("active");
			document.querySelector(".howmany-page").classList.add("active");
			document.querySelector(".ticketType-title").style.display = "none";
			document.querySelector(".breezeType-title span").innerHTML = "days";
			document.querySelector(".language").classList.remove("active");
			document.querySelector(".corner-parallelogram").classList.add("active");
			document.querySelector(".corner-parallelogram p").innerHTML = "Pay Here";
			document.querySelector(".pay-page .that").innerHTML = " day(s)";
			document.querySelector(".pay-page .additional-text").innerHTML = " for your Breeze Card.";
		});
		document.querySelector("#add-money").addEventListener("click", function(){
			console.log("we're gonna add some money yall!")
			$breezePage.classList.remove("active");
			document.querySelector(".addmoney-page").classList.add("active");
			document.querySelector(".language").classList.remove("active");
			document.querySelector(".corner-parallelogram").classList.add("active");
			document.querySelector(".corner-parallelogram p").innerHTML = "Pay Here";
			document.querySelector(".calc-pay-page .that").innerHTML = " money";
			document.querySelector(".calc-pay-page .additional-text").innerHTML = " to your Breeze Card.";
		});
	});
		
	document.querySelector(".corner-parallelogram").addEventListener("click", function(){
		if (document.querySelector(".addmoney-page").classList.contains("active") === true){
			document.querySelector(".addmoney-page").classList.remove("active");
			document.querySelector(".pay-page").classList.remove("active");
			document.querySelector(".calc-pay-page").classList.add("active");
			document.querySelector(".corner-parallelogram p").innerHTML = "";
			document.querySelector(".corner-parallelogram p").innerHTML = "Edit";
			document.querySelector(".corner-parallelogram").addEventListener("click", function(){
				document.querySelector(".calc-pay-page").classList.remove("active");
				document.querySelector(".addmoney-page").classList.add("active");
				document.querySelector(".corner-parallelogram p").innerHTML = "";
				document.querySelector(".corner-parallelogram p").innerHTML = "Pay Here";
			});
		}
		if(document.querySelector(".howmany-page").classList.contains("active") === true){
			document.querySelector(".howmany-page").classList.remove("active");
			document.querySelector(".calc-pay-page").classList.remove("active");
			document.querySelector(".pay-page").classList.add("active");
			document.querySelector(".corner-parallelogram p").innerHTML = "";
			document.querySelector(".corner-parallelogram p").innerHTML = "Edit";
			document.querySelector(".corner-parallelogram").addEventListener("click", function(){
				document.querySelector(".pay-page").classList.remove("active");
				document.querySelector(".howmany-page").classList.add("active");
				document.querySelector(".corner-parallelogram p").innerHTML = "";
				document.querySelector(".corner-parallelogram p").innerHTML = "Pay Here";
			});
		}
	});
	
})();

var app = new Vue({
  el: '#vueapp',
  data: {
    counter: 1,
    price: 2.50,
  },
  methods: {

    incrementValue() {
    	console.log("I'm increasing!");
      	this.counter++;
    },
    decrementValue() {
      	console.log("I'm decreasing!");
      	this.counter--;
      	if (this.counter < 0) this.counter = 0;

    },
  
  },
  computed: {
 	totalPrice: function(){
 		console.log("calculating total!!");
 		return this.counter * this.price;
 	}

  }
});

var appCalulator = new Vue({
  el: '#vuecalculator',
  data: {
    counter: 1,
    price: 2.50,
    message: "Hey girl hey!",
    totalPrice: 0,
    cashAdd: ""
  },
  methods: {
  	calcButtonPressed: function(e) {
  		console.log("calcButtonPressed", e.target.innerHTML)
  		this.cashAdd += e.target.innerHTML;
  	},
  	emptyCashAdd: function() {
  		this.cashAdd = "";
  	}
  },
  computed: {
  	formattedCashAdd: function() {
  		var padded = this.cashAdd.padStart(3, "0");
  		var start = padded.substr(0, padded.length - 2);
  		var end = padded.substr(-2, 2);
  		return start + "." + end;

  	}
  }

});
