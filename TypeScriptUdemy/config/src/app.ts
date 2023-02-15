// let userInput: unknown;
// let userName: string;

// userInput = 24;
// userInput = "J";

// if (typeof userInput === "string") {
//   userName = userInput;
// }

// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }

// generateError("An error occured!", 500);

const button = document.querySelector("button");

function clickHandler(message: string) {
  console.log("Clicked! ", message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "hi"));
}

function sendAnalytics(data: string) {
  console.log(data);
}

sendAnalytics("The data");
