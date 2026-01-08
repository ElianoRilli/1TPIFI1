$(start);

let currentUser = null;
let lastSeenMessageId = 0;
function start() {
    let username = $("<input>");
    username.attr("placeholder", "Pick a username");
    $("body").append(username);

    let btnLogin = $("<button>");
    btnLogin.html("Login");
    $("body").append(btnLogin);
    btnLogin.on("click", function () {
        currentUser = username.val();
        startWebchat();
    });
}

function startWebchat() {
    $("body").empty();
    let messageBoard = $("<div>");
    messageBoard.attr("class", "myMessages");
    $("body").append(messageBoard);
    messageBoard.attr("id", "messages");
    let welcomeDiv = $("<div>");
    welcomeDiv.html("Welcome to the webchat " + currentUser + ". Please type your message below:");
    $("body").append(welcomeDiv);


    let message = $("<input>");
    message.attr("placeholder", "your message ");
    $("body").append(message);
    let btnSendMessage = $("<button>");
    btnSendMessage.html("Send");
    btnSendMessage.on("click", function () {
        $.post("Server.php", { UserName: currentUser, message: message.val() });
        message.val("");
    });
    $("body").append(btnSendMessage);
    setInterval(function () {
        $.get("Server.php", { lastMessageSeen: lastSeenMessageId }, function (replyfromserver) {
            messageBoard.append(replyfromserver);
            //lastSeenMessageId = number($(".MsgId:last-of-type").html());
            console.log($(".MsgId:last-of-type").html());
        });
    }, 2000);
};



