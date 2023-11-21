function sendMessage() {
    let messageInput = document.querySelector(".send-input");
    let sendBtn = document.querySelector(".send-btn");
    let chat = document.querySelector(".text-space");
    let sendForm = document.querySelector("form");

    let message = messageInput.value.trim();

    if (message === "") return;

    let messageElement = document.createElement("div");
    messageElement.classList.add("p-2", "wrapper-esh");
    chat.append(messageElement);

    let textElement = document.createElement("div");
    textElement.classList.add(
        "text-eshmat",
        "bg-primary-subtle",
        "rounded-2",
        "w-50"
    );
    messageElement.append(textElement);

    let userText = document.createElement("p");
    userText.innerText = message;
    textElement.append(userText);

    let status = document.createElement("div");
    status.classList.add("status");
    messageElement.append(status);

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let sentTime = createElement("span");
    sentTime.classList.add("time");
    sentTime.innerHTML = `${hours}:${minutes}`;
    status.append(sentTime);

    let sentBy = document.createElement("span");
    sentBy.classList.add("sent_by");
    sentBy.innerText = "Eshmat";
    status.append(sentBy);

    saveMessage(message);

    messageInput.value = "";
}
