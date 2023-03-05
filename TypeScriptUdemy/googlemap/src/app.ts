const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyCbD5HDBB3Gy5u3qTrRFDaZCSQ-DGhg148';

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // send this to Google's API
}

form.addEventListener('submit', searchAddressHandler);
