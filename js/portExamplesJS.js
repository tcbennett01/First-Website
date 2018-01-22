
/********************************************
* String Methods                            *
********************************************/

//String Method chartAt()
function charLocation(){
  var inputString = document.getElementById('charUserInput1').value;
  var charIndex = Number(document.getElementById('charUserInput2').value);

  //Check for bad user input
  if (isNaN(charIndex)
              || charIndex % 1 !== 0
              || charIndex < 0
              || charIndex.length < 1
              || charIndex > inputString.length-1){
    alert("Please enter a valid index ");
  } else {
      var result = inputString.charAt(charIndex);
      document.getElementById('charResult').value=result;
  }
}


//String Method concat()
function concatenate(){
  var inputString1 = document.getElementById('userInput1').value;
  var inputString2 = document.getElementById('userInput2').value;
  var result = inputString1.concat(inputString2);

  document.getElementById('concatResult').value=result;

}


//String Method includes()
function includesMethod(){
  //Simplified var naming convention
  var includeInput1 = document.getElementById('includeInput1').value;
  var includeInput2 = document.getElementById('includeInput2').value;
  var includeResult;
  if (includeInput1.includes(includeInput2)){
      includeResult = true;
  } else {
      includeResult = false;
  }
  document.getElementById('includeResult').value=includeResult;
}


//String Method indexOf()
function indexOfMethod(){
  //Simplified var naming convention
  var indexString = "Learning JavaScript is Fun!";
  var indexInput = document.getElementById('indexInput').value;
  var indexLocation = indexString.indexOf(indexInput);

  document.getElementById('indexResult').value=indexLocation;
}


//String Method toUpperCase()
function toUpperMethod(){
  var toUpperInput = document.getElementById('toUpperInput').value;
  var convertInput = toUpperInput.toUpperCase();

  document.getElementById('toUpperResult').value=convertInput;
}


/********************************************
* ARRAY METHODS                             *
********************************************/

//Array Method concat()
function concatArray(){
  var concatArray1 = ["Bill", "Jan"];
  var concatArray2 = ["Sue", "Tim"];
  var combined = concatArray1.concat(concatArray2);

  document.getElementById('combinedArray').value=combined;
}


//Various array methods using random number array
function randomArray(){
    var numArray = [];
    var firstNumTemp;
    var lastNumTemp;

    //Initialize array - random numbers 1 to 100
    for (var i=0; i<5; i++){
       numArray[i] = Math.floor((Math.random() * 100)+1);
    }

    //Write initial array to page
    document.getElementById('randomNumArray').value=numArray;

    //Peel off first and last array elements
    firstNumTemp = numArray.shift();
    lastNumTemp = numArray.pop();

    //Write elements and subset to page
    document.getElementById('firstArrayNum').value=firstNumTemp;
    document.getElementById('lastArrayNum').value=lastNumTemp;
    document.getElementById('subsetArray').value=numArray;

    //Add first and last elements back - reverse order
    numArray.unshift(lastNumTemp);
    numArray.push(firstNumTemp);

    //Write updated array
    document.getElementById('updatedArray').value=numArray;
}

//Disable "Mouse Over" on "Mouse Out"
function disableButton(){
    document.getElementById('arrayMouseOverButton').disabled=true;
    document.getElementById('arrayReset').focus();  //Assign focus to resetElements
}

//Reset elements on "r" press
function resetElements(event){
    if (event.which == 82){
      document.getElementById('randomNumArray').value="";
      document.getElementById('firstArrayNum').value="";
      document.getElementById('lastArrayNum').value="";
      document.getElementById('subsetArray').value="";
      document.getElementById('updatedArray').value="";
      document.getElementById('arrayMouseOverButton').disabled=false;
    }
}


/********************************************
* Objects                                   *
********************************************/

//Search friends object
function findAvailableFriends(){
    var available="";  //empty string to store friend names


    //Create objects
    var friends = {};

    friends.bill = {
        firstName: "Bill",
        lastName: "Williams",
        number: "(555) 555-5555",
        street: "123 Anywhere St",
        city: "SomeCity",
        state: "WA",
        zip: "11111"
    };
        friends.john = {
        firstName: "John",
        lastName: "Doe",
        number: "(222) 222-2222",
        street: "456 Lost Rd",
        city: "Somewhere",
        state: "CA",
        zip: "222222"
    };
        friends.sue = {
        firstName: "Sue",
        lastName: "Jones",
        number: "(333) 333-3333",
        street: "Under The Bridge",
        city: "Poor Town",
        state: "FL",
        zip: "33333"
    };

    //Iterate friends object building 'available' string
    var commaCount = 0;
    for(var friend in friends) {
        available += friends[friend].firstName;

        //Add comma delimiters to 'avaiable' string
        //Cannot use 'length' on object - undefined
        if (commaCount < 2){
            available += ", ";
            commaCount++;
        }
    }
    //Write 'available' friend string to page
    document.getElementById('availableFriends').value=available;
}

//Reset friends search
function resetAvailableFriends(){
    document.getElementById('availableFriends').value="";
}


//Search friends object
function searchFriendsAddress(){
    //Create objects
    var friends = {};

    friends.bill = {
        firstName: "Bill",
        lastName: "Williams",
        number: "(555) 555-5555",
        street: "123 Anywhere St",
        city: "SomeCity",
        state: "WA",
        zip: "11111"
    };
        friends.john = {
        firstName: "John",
        lastName: "Doe",
        number: "(222) 222-2222",
        street: "456 Lost Rd",
        city: "Somewhere",
        state: "CA",
        zip: "222222"
    };
        friends.sue = {
        firstName: "Sue",
        lastName: "Jones",
        number: "(333) 333-3333",
        street: "Under The Bridge",
        city: "Poor Town",
        state: "FL",
        zip: "33333"
    };

    //Retrieve input and convert to lower case
    var name = document.getElementById('inviteFriend').value.toLowerCase();

    //Iterate through friends object searching for 'name'
    for(var friend in friends) {
      if(friends[friend].firstName.toLowerCase() === name) {
        //Write address to page
        document.getElementById('friendStreet').value=friends[friend].street;
        document.getElementById('friendCity').value=friends[friend].city;
        document.getElementById('friendState').value=friends[friend].state;
        document.getElementById('friendZip').value=friends[friend].zip;
      }
    }
}

//Reset address fields
function resetSearchFriendsAddress(){
    document.getElementById('inviteFriend').value="";
    document.getElementById('friendStreet').value="";
    document.getElementById('friendCity').value="";
    document.getElementById('friendState').value="";
    document.getElementById('friendZip').value="";
}


/********************************************
* Conditionals                              *
********************************************/

//Categorize number 1-100
function pickNumber(){
    var number = document.getElementById('pickNumInput').value;
    var result;

    if(number<=0 || number>100){
        alert("Invalid number!");
        resetPickNumber();
        return;
    } else if (number<=25){
        result = "<=25";
    } else if(number<=50){
        result = ">25 & <=50";
    } else if(number<=75){
        result = ">50 & <=75";
    } else {
        result = ">75 & <=100";
    }
    document.getElementById('pickNumResult').value=result;
}


//Reset pickNumber
function resetPickNumber(){
    document.getElementById('pickNumInput').value = "";
    document.getElementById('pickNumResult').value ="";
}


function fruitPrice(){
  var fruit = document.getElementById('pickFruit').value;
  var price;

    switch (fruit) {
      case "Oranges":
        price = "$0.59 a pound";
        break;
      case "Apples":
        price = "$0.32 a pound";
        break;
      case "Bananas":
        price = "$0.48 a pound";
        break;
      case "Cherries":
        price = "$3.00 a pound";
        break;
      case "Papayas":
        price = "$2.79 a pound";
        break;
      default:
        price = "-Out of Stock-";
    }
    document.getElementById('fruitPriceResult').value=price;
}

//Reset pickNumber
function resetFruitPrice(){
    document.getElementById('pickFruit').value = "";
    document.getElementById('fruitPriceResult').value="";
}


function selectDay(){
  var selectDayInput = document.getElementById('dayOfWeek').value;

  switch (selectDayInput) {
      case 'Mon':
      case 'Tue':
      case 'Wed':
      case 'Thu':
      case 'Fri':
          response = "Weekends are better";
          break;
      case  'Sat':
      case  'Sun':
         response = "It's the weekend!";
          break;
      default:
        response = 'Invalid selection';
  }
  document.getElementById('dayOfWeekResponse').value=response;
}

//Reset
function resetSelectDay(){

  document.getElementById('dayOfWeek').value="";
  document.getElementById('dayOfWeekResponse').value="";

}


/********************************************
* Loops & Exponentiation                    *
********************************************/

  //Loops:  while & do while
  function loopExamples(){

      var thinkCount = 0;
      var thinkString = "";
      var boolFlag = true;


      //Executes three times using counter
      while(thinkCount < 3){
          thinkString += "Thinking...(inside 1<sup>st</sup> 'while')<br>";
          thinkCount++;
      }
      document.getElementById('whileId1').innerHTML=thinkString;


      //Executes once - thinkCount == 3
      do{
          document.getElementById('doWhileId1').innerHTML="Still thinking...(inside 1<sup>st</sup> 'do while')";
      }while(thinkCount == 0);


      //Executes once while boolFlag == true
      while(boolFlag){
          document.getElementById('whileId2').innerHTML="Hmmmmm..(inside 2<sup>nd</sup> 'while')";
          boolFlag = false;
      }


      //Executes once - boolFlag currently set to 'false'
      do{
          document.getElementById('doWhileId2').innerHTML="Almost there...(inside 2<sup>nd</sup> 'do while')...";
      }while(boolFlag);

      //No evidence that JS supports operator '**'
      var calcAnswer = Math.pow(5,4);
      document.getElementById('expAnswer').innerHTML="Answer:  5**4 = " + calcAnswer;
  }

  //Reset loop examples
  function resetLoopExamples(){

      document.getElementById('whileId1').innerHTML="";
      document.getElementById('doWhileId1').innerHTML="";
      document.getElementById('whileId2').innerHTML="";
      document.getElementById('doWhileId2').innerHTML="";
      document.getElementById('expAnswer').innerHTML="";
  }

