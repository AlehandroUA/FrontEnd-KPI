function fetchUserData() {
  fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
      const userContainer = document.getElementById('user-info');
      userContainer.innerHTML = '';

      data.results.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        userCard.innerHTML = `
            <img src="${user.picture.large}" alt="User Picture">
            <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
            <p><strong>City:</strong> ${user.location.city}</p>
            <p><strong>Country:</strong> ${user.location.country}</p>
            <p><strong>Postcode:</strong> ${user.location.postcode}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
          `;

        userContainer.appendChild(userCard);
      });
    })
    .catch(error => console.error('Error fetching user data:', error));
}
