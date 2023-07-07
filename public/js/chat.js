const nameInputEl = byId('name-input');
const checkNameEl = byId('check-name-input');
const chatContainerEl = byId('chat-container');
const chatDialogEl = byId('chat-dialog');
const chatInputEl = byId('chat-input');
const submitChatEl = byId('submit-chat-input');

// If you have your own users there is no need for getName()... just replace all references with equivalents from your user.
const userName = getName();

const updateHTML = (name, chat, sent) => {
  chatDialogEl.innerHTML += `
  <div class="message${sent ? ' sent' : ''}">
    <h4>${name}:</h4>
    <p>${chat}</p>
  </div>`;
  chatDialogEl.scrollTop = chatDialogEl.scrollHeight;
};

submitChatEl.addEventListener('click', () => {
  const chatInput = chatInputEl.value.trim();
  if (chatInput) {
    updateHTML(userName, chatInput, true);
    socket.emit('new-message', userName, chatInput);
    chatInputEl.value = '';
  }
});

socket.on(
  'new-user',
  (arg) =>
    (chatDialogEl.innerHTML += `<p>New User ${arg}, has joined the chat!</p>`)
);

socket.on('new-message', (args) => updateHTML(args[0], args[1]));
