const friendNameInput = document.getElementById('friendName');
const addFriendButton = document.getElementById('addFriend');
const friendList = document.getElementById('friendList');
const drawFriendButton = document.getElementById('drawFriend');
const result = document.getElementById('result');

const friends = [];

addFriendButton.addEventListener('click', () => {
    const name = friendNameInput.value.trim();

    if (name === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    friends.push(name);
    friendList.innerHTML += `<li>${name}</li>`;
    friendNameInput.value = '';
});

drawFriendButton.addEventListener('click', () => {
    if (friends.length === 0) {
        alert('No hay amigos en la lista para el sorteo.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * friends.length);
    const secretFriend = friends[randomIndex];
    result.textContent = `¡El amigo secreto es: ${secretFriend}!`;
});