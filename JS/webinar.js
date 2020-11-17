const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ochoa Rios, Jamaica',
  avatar:
    'https://https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmW6ZxiKrt0AQOxXg2wAxwuA2-PQUgpZF_Qg&usqp=CAU',
  stats: {
    followers: 56003,
    views: 4827,
    likes: 1306,
  },
};

//console.log(profile);

const makeProfileMarkup = function ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return `<div>
    <img src="${avatar}" alt="user avatar">
      <p>${name}<span>@${tag}</span></p>
      <p>Location: ${location}</p>
      <ul>
        <li>Followers: ${followers}</li>
        <li>Views: ${views}</li>
        <li>Likes: ${likes}</li>
      </ul>
    </div> `;
};
//console.log(makeProfileMarkup);
const markup = makeProfileMarkup(profile);

console.log(markup);

document.body.insertAdjacentHTML('afterbegin', markup);
