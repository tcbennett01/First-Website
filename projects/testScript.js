function fruitPrice(){
var fruit = "Oranges";

//document.getElementById('').value;

  switch (fruit) {
    case "Oranges":
      console.log("$0.59 a pound");
      break;
    case "Apples":
      console.log("$0.32 a pound");
      break;
    case "Bananas":
      console.log("$0.48 a pound");
      break;
    case "Cherries":
      console.log("$3.00 a pound");
      break;
    case "Papayas":
      console.log("$2.79 a pound");
      break;
    default:
      console.log("- Out of Stock-");
  }
}

fruitPrice();