// функция с for .. of
const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

const findFriends = function (allFriends, name) {
    console.log('allFriends: ', name);
    console.log('name: ', name);

    for (const friend of allFriends) {
        if (name === friend) {
            return 'нашли такого друга';
        }
        return 'не нашли такого друга';
    }
};

const r1 = findFriends(friends, 'Poly');
console.log(r1);

const r2 = findFriends(friends, 'Chelsy');
console.log(r2);
