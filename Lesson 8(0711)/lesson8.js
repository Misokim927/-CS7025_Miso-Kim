function getCookie(cookieKey) {
  let name = cookieKey + '=';
  let myCookie = document.cookie.split(';');
  for (let i = 0; i < myCookie.length; i++) {
    let thecookie = myCookie[i];
    while (thecookie.charAt(0) == '.') {
      thecookie = thecookie.substring(1);
    }
    if (thecookie.indexOf(name) == 0) {
      return thecookie.substring(name.length, thecookie.length);
    }
  }
  return '';
}

$(document).ready(function () {
  $(document).on('click', '#count', function () {
    addclickcounter();
  });
});

function setcookie(cookieKey, cookieValue, exdays) {
  const cookieDate = new Date();
  const expiryDaysInMs = exdays * 24 * 60 * 60 * 1000;
  cookieDate.setTime(cookieDate.getTime() + expiryDaysInMs);
  let expires = 'expires=' + cookieDate.toUTCString();
  document.cookie = cookieKey + '=' + cookieValue + ';' + expires + ';path=/';
}

function addclickcounter() {
  let counter = getCookie('counter');
  if (counter < 1) {
    counter = 1;
  } else {
    counter++;
  }
  setcookie('counter', counter);
  $('#clickcount').text(counter);
}

window.localStorage.getItem('clickcount', count);
