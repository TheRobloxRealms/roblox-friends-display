// API URL and Key (replace with your actual data)
const apiKey = "kcc6gnE7iU+tjA1dyBHADxrWBP744BEQiPLYIsckfTMMmPoLZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkluTnBaeTB5TURJeExUQTNMVEV6VkRFNE9qVXhPalE1V2lJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaVlYTmxRWEJwUzJWNUlqb2lhMk5qTm1kdVJUZHBWU3QwYWtFeFpIbENTRUZFZUhKWFFsQTNORFJDUlZGcFVFeFpTWE5qYTJaVVRVMXRVRzlNSWl3aWIzZHVaWEpKWkNJNklqTTBOVFV5TnpFME1UUWlMQ0poZFdRaU9pSlNiMkpzYjNoSmJuUmxjbTVoYkNJc0ltbHpjeUk2SWtOc2IzVmtRWFYwYUdWdWRHbGpZWFJwYjI1VFpYSjJhV05sSWl3aVpYaHdJam94TnpNeE5qZzRPVGs0TENKcFlYUWlPakUzTXpFMk9EVXpPVGdzSW01aVppSTZNVGN6TVRZNE5UTTVPSDAuY2d6clk0U0VZNHI2aWlGSUJqM0FvSFN2TnBwRmVYSlFyaDBzYTZMQ292c291SmZkS2FLTWhwSHdsVHJjVm9HQTBLQVBDamVCVVMtcXZZN2FHeFIzZUZNcnN2eWtxSWtfVnpQdUdiUkN2OUhiT253M3U4dlJkcW82bFc3T1V6ZHRFX3hGWExGTktHUlM2UGx2Z2d6Yk96emFaOFhobDZyN3V3RTJsRGhmajdHT3lfSVFDaEcxaTNmMTM3OEk5VHVaVU1mZWN0bU5KOUM5eG5STUJxYThJY2VzSHRyOXVXNFpiUWZEQkY3WGlsYVVZQk02X1N4eW5qNGcwZGtLZFN6eE9aNmxtRkxFcVZHc3BjU1VtTy0xRjIxRzY2RU9XamNCVnhqMGphWFpfeXVFdlE5cE9KQWdMUG1VMUlleFRsQnRpTHlJRnhudzhpYjJFaElHQzZ6aEpB";  // Your API key
const userId = "3455271414";  // Your Roblox user ID

// Get the greeting based on the time of day
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
        return "Good Morning";
    } else if (hour < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

// Fetch friends' data from Roblox API
function fetchFriends() {
    fetch(`https://friends.roblox.com/v1/users/${userId}/friends`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    .then(response => response.json())
    .then(data => {
        displayFriends(data.data);  // Display friends data
    })
    .catch(error => {
        console.error("Error fetching friends data:", error);
    });
}

// Display the friends' list on the webpage
function displayFriends(friends) {
    const friendsList = document.getElementById('friends-list');
    friends.forEach(friend => {
        const listItem = document.createElement('li');
        listItem.textContent = `${friend.name} is playing ${friend.gameName || 'no game'}`;
        friendsList.appendChild(listItem);
    });
}

// Set the greeting text
document.getElementById('greeting').textContent = getGreeting();

// Fetch friends' data
fetchFriends();
