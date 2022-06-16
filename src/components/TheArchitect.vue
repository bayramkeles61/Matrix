<script setup>
import { ref, onMounted } from "vue";
import renderChat from "./chat";
//! DATA

//! METHODS

//! COMPUTED

//! CREATED
onMounted(() => {
  const rootEl = document.querySelector(".architect");

  const architect = (rootEl, config, messageParser, actionProvider) => {
    const chat = renderChat(config);

    rootEl.appendChild(chat);
  };

  const config = {
    botName: "Architect",
  };

  architect(rootEl, config);
});
</script>

<template>
  <div class="architect"></div>
</template>

<style>
.architect {
  background-color: rgb(102, 4, 4);
}
.architect-chat-container {
  background-color: rgb(4, 6, 102);
  padding: 20px;
}
.architect-chat-inner-container {
  background-color: rgb(100, 102, 4);
  padding: 20px;
}
.architect-chat-header {
  background-color: rgb(102, 4, 102);
  padding: 20px;
}
.architect-chat-message-container {
  background-color: rgb(4, 102, 81);
  padding: 20px;
}
</style>
