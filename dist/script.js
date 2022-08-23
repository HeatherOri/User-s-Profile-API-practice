// Import Axios
// IIFEs Function
(function () {
  const BASE_URL = "https://randomuser.me/api/";
  axios.get(BASE_URL).then((response) => {
    const data = response.data.results[0];
    console.log(response.data.results);
    renderNavbarAvatar(data);
    renderProfile(data);
    renderPersonalInfo(data);
  });

  for (i = 1; i <= 8; i++) {
    axios.get(BASE_URL).then((response) => {
      const data1 = response.data.results[0];
      renderFriends(data1);
    });
  }
})();

function renderNavbarAvatar(data) {
  const avatar = document.querySelector('[data-target="avatar-thumbnail"]');
  avatar.innerHTML = `
  <a href="#"><img src="${data.picture.thumbnail}" alt="avatar"></a>
  `;
}

function renderProfile(data) {
  const profile = document.querySelector('[data-target="profile"]');
  profile.innerHTML = `
  <img class="avatar" src="${data.picture.large}" alt="avatar">
        <h3 class="name">${formatName(data.name.first)} ${formatName(
    data.name.last
  )}</h3>
  `;
}

function renderPersonalInfo(data) {
  const info = document.querySelector('[data-target="personal-info"]');

  info.innerHTML = `
   <li class="list-group-item">
            <i class="fas fa-envelope fa-fw"></i>
            <span>${data.email}</span>
          </li>

          <li class="list-group-item">
            <i class="fas fa-mobile-alt fa-fw"></i>
            <span>${data.cell}</span>
          </li>

          <li class="list-group-item">
            <i class="fas fa-map-marker-alt fa-fw"></i>
            <span>${data.location.street.number} ${
    data.location.street.name
  }, ${data.location.city}, ${data.location.country}</span>
          </li>

          <li class="list-group-item">
            <i class="fas fa-birthday-cake fa-fw"></i>
            <span>${formatDate(data.dob.date)}</span>
          </li>
  `;
}

function renderFriends(data1) {
  const friends = document.querySelector('[data-target="user-friends"]');
  friends.innerHTML += `
  <img src="${data1.picture.medium}" alt="friend1" class="friend-avatar">
  `;
}

function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}