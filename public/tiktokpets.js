'use strict';

async function sendPostRequest(url,data) {
    console.log("about to send post request");
    let response = await fetch(url, {
      method: 'POST', 
      headers: {'Content-Type': 'text/plain'},
      body: data });
    if (response.ok) {
      let data = await response.text();
      return data;
    } else {
      throw Error(response.status);
    }
  }

let continue_button = document.getElementById("continue");
continue_button.addEventListener("click", trigger);

function trigger() {
    let username_box = document.getElementById("username").value;
    let url_box = document.getElementById("video_link").value;
    let nickname_box = document.getElementById("nickname").value;
    sendPostRequest("/videoData", username_box + '\n' + url_box + '\n' +nickname_box).then(function (data) {
    console.log("got back the following string");
    console.log(data); 
    sessionStorage.setItem("nick", nickname_box);
    window.location = "/result.html";
  })
  .catch(function (error) {
     console.error('Error:', error);
  });
}