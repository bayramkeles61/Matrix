import { botMessage } from './state';
import { Config } from "~/types"

export const renderChat = function (config: Config, state: any) {
  const chatContainer = document.createElement("div")
  chatContainer.classList.add("architect-chat-container")

  const innerContainer = document.createElement("div")
  innerContainer.classList.add("architect-chat-inner-container")

  innerContainer.appendChild(createHeader(config))
  innerContainer.appendChild(createMessageContainer(state.messages))
  innerContainer.appendChild(createForm())

  chatContainer.append(innerContainer)
  return chatContainer
}

const createHeader = function (config: Config) {
  const header = document.createElement("div");
  header.textContent = `Hello Neo! My name is ${config.botName}`;
  header.classList.add("architect-chat-header");

  return header
}

const createMessageContainer = function (messages: any[]) {
  const container = document.createElement("div")
  container.classList.add("architect-chat-message-container")

  messages.forEach(mes => {
    console.log(typeof (mes));
    const { message, type } = mes

    if (type === "bot") {
      const botMessage = createBotChatMessage(message)
      container.appendChild(botMessage)
    } else {
      const userMessage = createUserChatMessage(message)
      container.appendChild(userMessage)
    }
  })

  return container
}

const createForm = () => {
  const container = document.createElement("div")
  container.classList.add("architect-chat-input-container")

  const form = document.createElement("form")
  form.classList.add("architect-chat-input-form")

  const input = document.createElement("input")
  input.classList.add("architect-chat-input")
  input.placeholder = "Write a message..."

  const btn = document.createElement("button")
  btn.classList.add("architect-chat-btn-send")

  form.appendChild(input)
  form.appendChild(btn)
  container.appendChild(form)

  return container
}

const createUserChatMessage = function (message: string) {
  const container = document.createElement("div")
  container.classList.add("architect-user-chat-message-container"
  )

  const avatarContainer = document.createElement("div")
  avatarContainer.classList.add("architect-user-avatar-container")

  const messageContainer = document.createElement("div")
  messageContainer.classList.add("architect-user-chat-message")
  messageContainer.textContent = message

  const arrow = document.createElement("div")
  arrow.classList.add("architect-user-chat-message-arrow")

  messageContainer.appendChild(arrow)

  container.appendChild(messageContainer)
  container.appendChild(avatarContainer)

  return container
}

const createBotChatMessage = function (message: string) {
  const container = document.createElement("div")
  container.classList.add("architect-chat-bot-message-container"
  )

  const avatarContainer = document.createElement("div")
  avatarContainer.classList.add("architect-chat-bot-avatar-container")

  const paragraph = document.createElement("p")
  paragraph.textContent = "B"
  paragraph.classList.add("architect-chat-bot-avatar-letter")

  const messageContainer = document.createElement("div")
  messageContainer.classList.add("architect-user-chat-message")
  messageContainer.textContent = message

  const arrow = document.createElement("div")
  arrow.classList.add("architect-user-chat-message-arrow")

  avatarContainer.appendChild(paragraph)
  messageContainer.appendChild(arrow)

  container.appendChild(avatarContainer)
  container.appendChild(messageContainer)

  return container
}
