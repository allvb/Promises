import GameSavingLoader from '../js/GameSavingLoader';

test('testing class GamesavingLoader', (done) => {
  const example = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  GameSavingLoader.load().then((saving) => {
    expect(JSON.parse(saving)).toEqual(example);
    done();
  });
});
