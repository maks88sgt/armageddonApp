


export const getAsteroids = () => {
    const arrayLength = getRandomInt(1,5);
    const asteroids = Array.from({length: arrayLength});
    return asteroids.map(() => {
        return {
            name: names.split(" ")[getRandomInt(0, 15)],
            date: getRandomInt(1995, 2022),
            distance: getRandomInt(0, 1000000000),
            size: getRandomInt(0, 100000),
            inDangerous: getRandomInt(0, 2),
        }
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const names = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem, cupiditate " +
    "dolorem, earum facere illum iste iure nulla perspiciatis placeat qui quibusdam reprehenderit rerum " +
    "similique tempora totam veritatis vero voluptas."

