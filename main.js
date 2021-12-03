// addEventListener('keydown', (event) => {
//     console.log(event.key); //可讀取輸入的內容
//     console.log(event.keyCode); //偵測各個鍵的keyCode
// });

var enterButton = document.getElementById('enter');
var greetingWords = document.getElementById('greeting');
var typeenterButton = document.getElementById('typeenter');
var introline = document.getElementById('intro');
var usernamebox = document.getElementById('username');
var userInput = document.getElementById('user');
function getName() {
    if (event.target == enterButton) {
        // enterButton.style.color = "tomato";
        if ($('#user').val() != "") {
            // $('#greeting').append("Hello,&nbsp;&nbsp;" + $('#user').val() + "!")
            var chatingBox = document.getElementById('chatbox');
            var chatingline = document.createElement('div');
            newGreeting = "Welcome,&nbsp" + $('#user').val() + "!";
            chatingline.innerHTML = newGreeting;
            chatingline.style.color = 'white';
            chatingBox.appendChild(chatingline);
            // $('#username').remove();
            introline.remove();
            enterButton.remove();
            removeEventListener('keydown', getName);
            $('textarea').attr("disabled", false);
            $('#typeenter').attr("disabled", false);
            // $('#typingbox').removeAttr("disabled");
            typeenterButton.style.color = 'white';
            usernamebox.style.color = 'gray';
            usernamebox.style.fontSize = '10px';
            userInput.style.fontSize = '10px';
            $('#user').attr("disabled", true);
        } else {
            // enterButton.style.color= "white";
            alert('please enter username');
        }
    }
};
console.log($('#user').val());
// enterButton.addEventListener('click', getName);
enterButton.onclick = getName;
addEventListener('keydown', getName);


// addEventListener('keyup', (event) => {
//     enterButton.style.color= "white";

// });
// addEventListener('keydown', (event) => {
//     if (event.keyCode == 13) {
//         console.log($('#user').val())
//         enterButton.style.color= "tomato";
//         if (userInput !== null) {
//             $('#greeting').append("Hello,&nbsp;&nbsp;" + $('#user').val() + "!")
//             $('#username').remove();  
//             $('enterButton').remove();
//         }
//     removeEventListener('keydown',)
//     }
// });

//chatarea, chatbox


function sendEnter() {
    // || event.keyCode == 13
    if (event.target == typeenterButton) {
        var data = document.querySelector('#typingbox').value;
        // var data = $('#typingbox').val();
        // console.log($('#user').val() + ":" + data);
        var chatingBox = document.getElementById('chatbox');
        var chatingline = document.createElement('div')
        // newMessege = `
        // <p>{$'#typingbox').val()}</p>
        // <p>data</p>
        // `
        newMessege = $('#user').val() + ':&nbsp' + $('#typingbox').val();
        chatingline.innerHTML = newMessege;
        chatingline.style.color = 'white';
        chatingBox.appendChild(chatingline);
        $('#typingbox').val("");
    }
    if (event.keyCode == 13) {
        var data = document.querySelector('#typingbox').value;
        // var data = $('#typingbox').val();
        // console.log($('#user').val() + ":" + data);
        var chatingBox = document.getElementById('chatbox');
        var chatingline = document.createElement('div')
        // newMessege = `
        // <p>{$'#typingbox').val()}</p>
        // <p>data</p>
        // `
        newMessege = $('#user').val() + ':&nbsp' + $('#typingbox').val();
        chatingline.innerHTML = newMessege;
        chatingline.style.color = 'white';
        chatingBox.appendChild(chatingline);
        $('#typingbox').val("");
    }
};

// typeenterButton.onclick = sendEnter; //與下同功
typeenterButton.addEventListener('click', sendEnter); //與上同功
addEventListener('keydown', sendEnter);


//問題：新增的節點無所被索取ID
//問題：textarea會空行


var video = document.querySelector('video');


function successCallback(gotstream){
    //Make the stream avaliable to the console for introspection
    window.stream = gotstream;
    //Attach the return stream to the <video> element in the HTML page
    video.srcObject = gotstream;
    video.play();

    $(".videoicon").remove();

    // const newIcon = document.createElement('div');
    var myIcon = document.getElementById('WebRTC');
    var newIcon = document.createElement('div')
    newIcon.innerHTML= `
        <i class="hangupicon fas fa-video-slash fa-2x"></i>
    `;
    // myIcon.appendChild(hangupIcon);

    myIcon.appendChild(newIcon);

    // el.innerHTML = '<i class="fas fa-video-slash"></i>'
}



WebRTC.addEventListener('click', (event) => {
    if(event.target.matches('.videoicon')){
        navigator.getUserMedia({audio:false, video:true}, successCallback, function(error) {
            log("navigator.getMedia error: ", error);
        });
        // 讓 video 移動至左上角   
        // 新增 掛電話icon: 功能- 移除影像、鏡頭
        // 插入 <video autoplay></video> 在 <div id="WebRTC">
    }
    
});
// var stream;
// var videoOff = {
//     video: false
// }

// function getMedia(constraints){
//     if(!!stream){
//         video.src = null;
//         stream.stop();
//     }
//     navigator.mediaDevices
//     .getUserMedia(constraints)
//     .then((stream)  => successCallback(stream))
//     .catch((error) => errorCallback(error));
// }

WebRTC.addEventListener('click', (event) => {
    if(event.target.matches('.hangupicon')){
        // navigator.getUserMedia({audio:false, video:false}, successCallback, function(error) {
        //     log("navigator.getMedia error: ", error);})
        $('.hangupicon').remove();
        $('#vid').remove(); //Q: 不能用移除的，會無法重複使用
        // $('videoicon').addClass();
    
    var myIcon = document.getElementById('WebRTC');
    var newIcon = document.createElement('div')
    newIcon.innerHTML= `
        <i class="videoicon fas fa-video fa-4x"></i>
    `;
    myIcon.appendChild(newIcon);

    // var myVid = document.getElementById('WebRTC');
    // var newVid = document.createElement('div')
    // newVid.innerHTML= `
    //     <video id="vid" autoplay></video>
    // `;
    // myVid.appendChild(newVid);
 
        
    location.reload();    
    }
    
});
