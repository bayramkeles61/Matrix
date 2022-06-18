export const uniqueIdGenerator = () => {
  let num = 1;
  return () => {
    return (num += 1);
  };
};

const uniqueId = uniqueIdGenerator();

export const botMessage = (message) => {
  if (message.type === "bot") {
    return true;
  }
  return false;
};
export const createChatMessage = (message, type) => {
  return {
    message: message,
    type: type,
    id: uniqueId(),
  };
};
export const createChatBotMessage = (message, options) => {
  return {
    ...createChatMessage(message, "bot"),
    ...options,
    loading: true,
  };
};

export const stateManager = function (initialState: any) {
  // 1. Keep an overview over the state
  // 2. Expose methods for interacitng with the state
  // 3. Re render our application when state changes
  let state = initialState
  const listeners = $ref([])

  const stateUpdater = function (updater: any) {
    if (typeof updater === "function") {
      state = updater(state)
      listeners.forEach(listener => listener(state))
    } else {
      state = { ...state, ...updater }
    }
    fireListeners()
  }

  const registerListener = function (listenerFunc: Function) {
    listeners.push(listenerFunc)
  }

  const fireListeners = function () {
    listeners.forEach(listener => {
      listener(state)
    })
  }
  return [state, stateUpdater, registerListener]
}