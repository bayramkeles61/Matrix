
const renderChat = function (config: any) {
  const chatContainer = document.createElement("div")
  chatContainer.classList.add("architect-chat-container")

  const innerContainer = document.createElement("div")
  innerContainer.classList.add("architect-chat-inner-container")

  innerContainer.appendChild(createHeader(config))
  innerContainer.appendChild(createMessageContainer())

  chatContainer.append(innerContainer)
  return chatContainer
}

const createHeader = function (config: any) {
  const header = document.createElement("div");
  header.textContent = `Hello Neo! My name is ${config.botName}`;
  header.classList.add("architect-chat-header");

  return header
}

const createMessageContainer = function () {
  const container = document.createElement("div")
  container.classList.add("architect-chat-message-container")

  return container
}

export default renderChat
