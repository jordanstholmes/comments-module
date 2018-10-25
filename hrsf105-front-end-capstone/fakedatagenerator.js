var faker = require('faker');

var fakeCommentData = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

function isCreator() {
  if (getRandomInt(1, 11) > 9) {
    return true;
  }
  return false;
}

function getRandomProfilePic() {
  var profilePics = [
    'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/545008/pexels-photo-545008.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/1097065/pexels-photo-1097065.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/736715/pexels-photo-736715.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/50998/profile-girl-rose-young-girl-50998.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/356147/pexels-photo-356147.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/975680/pexels-photo-975680.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/954202/pexels-photo-954202.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/40997/mona-lisa-leonardo-da-vinci-la-gioconda-oil-painting-40997.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://images.pexels.com/photos/90362/pexels-photo-90362.jpeg?auto=compress&cs=tinysrgb&h=350'
  ];
  
  return profilePics[getRandomInt(0, profilePics.length)];

}

function randomBodyLength() {
  if (getRandomInt(1, 11) > 6) {
    return faker.lorem.paragraph();
  } else {
    return faker.lorem.paragraphs();
  }
}

function generateReplies() {
  var replies = [];
  
  for (var i = 0; i < getRandomInt(0, 4); i++) {
    replies.push({
      author: faker.name.findName(),
      authorIsCreator : isCreator(),
      profilePicture : getRandomProfilePic(),
      createdAt : faker.data.recent(),
      body : randomBodyLength()
    });
  }

  return replies;
}

for (var i = 0; i < 100; i++) {
  fakeCommentData.push({
      id: i,
      author: faker.name.findName(),
      authorIsCreator: isCreator(),
      profilePicture: getRandomProfilePic(),
      createdAt: faker.data.recent(),
      body: randomBodyLength(),
      replies: generateReplies()
    });
}

module.exports.fakeCommentData = fakeCommentData;