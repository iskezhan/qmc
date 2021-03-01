const firstName = document.getElementById("firstname");
const startingBid = document.getElementById("startingbid");
const brideEducation = document.querySelector(".bride-education");
const familyNet = document.querySelector(".family-net");
const price = document.querySelector(".price");
const submitQuote = document.getElementById("submit-quote");

const calculate = () => {
  let name = firstName.value; // name of the groom/bride
  let price = Number(startingBid.value); // turns your starting bid string into number
  let letter = love_letter.value;
  if (name != "") { 
      price = getNewPrice(price, education);
      // FINISH THE CODE !!!!!!!!!!!!!!!!
      let person = {
          fullName: name,
          finalPrice: price,
          loveLetter: letter
      }
      document.getElementById("result").innerHTML = `The price for ${person.fullName} is ${person.finalPrice}. Your love letter is ${person.loveLetter}`;
  }
  else {
      alert("Name and starting bid cannot be empty");
  }
}


var age_prices = new Array();
age_prices["18"]=1.5;
age_prices["24"]=1.2;
age_prices["28"]=0.95;

submitQuote.addEventListener('click', function(){
  
  
  if (familyNet.options[familyNet.selectedIndex].text == "More than 100,000$") {
    answer = 500 * 2;
  } else if (familyNet.options[familyNet.selectedIndex].text == "Between 50,000$ and 100,000$") {
    answer = 500 * 1.5;
  } else {
    answer = 500 * 1.2;
  }


  if (brideEducation.options[brideEducation.selectedIndex].text == "Undergraduate degree") {
    answer = answer * 1.5;
  } else if (brideEducation.options[brideEducation.selectedIndex].text == "College degree") {
    answer = answer * 1.2;
  } else if (brideEducation.options[brideEducation.selectedIndex].text == "High school degree") {
    answer = answer * 1.05;
  } else 
    answer = answer*0.9;
  
    var skills = document.getElementsByTagName("input");
    for (var i = 0; i < 4; i++)
    {
       if (skills[i].checked)
       {
          answer += (skills[i].value * 1);
       }

    }
 
	var theForm = document.forms["agefound"];
	var agecount = theForm.elements["agecount"] 
	for (var i = 0; i < agecount.length; i++)
	{
		if (agecount[i].checked) 
			{
				answer *= age_prices[agecount[i].value];
			
			}
	}


  
    var selectedRealistic = document.getElementsByClassName("gossip");
    for (var j = 0; j < 3; j++){
    
      if (selectedRealistic[j].checked && j == 0){
      		answer *= 0.85;
      }
      else if (selectedRealistic[j].checked && j == 1){
        answer *= 0.9;     
    }
    else if (selectedRealistic[j].checked && j == 2) {
        answer -= 200;   
    }
    }

  
    price.innerHTML = "$" + answer;


  
});

