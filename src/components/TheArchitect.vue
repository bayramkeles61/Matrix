<script setup lang="ts">
import { Config } from "~/types";

const rootEl = $ref<HTMLElement>();
let current;
const messageParser = $ref(null);
const actionProvider = $ref(null);

onMounted(() => {
  const architect = function (
    rootEl: HTMLElement,
    config: Config,
    messageParser: any,
    actionProvider: any
  ) {
    const initialState = { messages: [...config.initialMessages] };
    const [state, updater, registerListeners] = stateManager(initialState);

    render(rootEl, state);

    registerListeners(() => render(rootEl, state));

    updater((state) => {
      return {
        ...state,
        messages: [...state.messages, createChatBotMessage(`State updated`, `bot`)],
      };
    });
  };

  const render = function (rootEl: HTMLElement, state: any) {
    if (current) {
      rootEl.removeChild(current);
    }

    const chat = renderChat(config, state);
    current = chat;
    rootEl.appendChild(chat);
  };

  const config = reactive({
    botName: "Architect",
    initialMessages: [
      createChatBotMessage(`Hello, I'm Architect`, "bot"),
      createChatBotMessage(`Hello, I'm Architect`, "bot"),
      { message: "Hello, I'm Architect", type: "user" },
    ],
  });

  architect(rootEl, config, messageParser, actionProvider);
});
</script>

<template>
  <div ref="rootEl" class="architect"></div>
</template>

<style>
.architect-chat-header {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: #efefef;
  font-family: Arial;
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #514f4f;
  padding: 12.5px;
  font-weight: bold;
}

.architect-chat-container {
  position: relative;
  width: 275px;
}

.architect-chat-inner-container {
  height: 500px;
  background-color: #fff;
  border-radius: 3px;
  margin-bottom: 15px;
  border-radius: 5px;
}

.architect-chat-message-container {
  padding: 0 17.5px 10px 17.5px;
  overflow: scroll;
  height: 424px;
}

.architect-chat-input-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
}

.architect-chat-input {
  width: 100%;
  padding: 12.5px;
  border: none;
  font-size: 0.85rem;
  border-top: 1px solid #d8d8d8;
  border-bottom-left-radius: 5px;
}

.architect-chat-input-form {
  width: 100%;
  display: flex;
}

.architect-chat-input::placeholder {
  color: #585858;
}

.architect-chat-btn-send {
  background-color: #2898ec;
  width: 100px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-bottom-right-radius: 5px;
}

.architect-chat-btn-send-icon {
  fill: #fff;
  width: 15px;
}

.architect-user-chat-message-container {
  display: flex;
  margin: 15px 0;
  justify-content: flex-end;
}

.architect-user-avatar-container {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 12.5px;
  background-color: #3d4e8d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.architect-user-avatar-icon {
  width: 15px;
  height: 15px;
}

.architect-user-chat-message {
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #585858;
  font-weight: medium;
  position: relative;
  text-align: left;
}

.architect-user-chat-message-arrow {
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #f1f1f1;
  position: absolute;
  right: -7px;
  top: 13px;
}

/* CHATBOT MESSAGE */

.architect-chat-bot-message-container {
  display: flex;
  margin: 15px 0;
  justify-content: flex-start;
}

.architect-chat-bot-avatar-container {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 50%;
  font-size: 1.2rem;
  margin-right: 12.5px;
  background-color: #d8d8d8;
  display: flex;
  justify-content: center;
  align-items: center;
}

.architect-chat-bot-avatar-icon {
  fill: #494646;
  width: 22.5px;
  height: 22.5px;
}

.architect-chat-bot-avatar-letter {
  color: #1d1d1d;
}

.architect-chat-bot-message {
  background-color: #2898ec;
  padding: 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #fff;
  font-weight: medium;
  position: relative;
  text-align: left;
}

.architect-chat-bot-message-arrow {
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid #2898ec;
  position: absolute;
  left: -7px;
  top: 13px;
}

.architect-chat-bot-loading-icon-container {
  height: 17px;
  width: 25px;
}

.chatbot-loader-container {
  display: flex;
  width: 100%;
  justify-content: center;
}

#chatbot-loader #chatbot-loader-dot1 {
  animation: load 1s infinite;
}

#chatbot-loader #chatbot-loader-dot2 {
  animation: load 1s infinite;
  animation-delay: 0.2s;
}

#chatbot-loader #chatbot-loader-dot3 {
  animation: load 1s infinite;
  animation-delay: 0.4s;
}

.architect-error {
  background-color: #fff;
  border-radius: 3px;
  padding: 15px;
}

.architect-error-container {
  width: 260px;
}

.architect-error-header {
  font-size: 1.3rem;
  color: #1d1d1d;
  margin-bottom: 30px;
}

.architect-error-docs {
  display: block;
  margin: 25px auto;
  color: rgb(56, 104, 139);
  padding: 8px;
  border: 1px solid rgb(40, 152, 236);
  width: 130px;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
}

@keyframes load {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
