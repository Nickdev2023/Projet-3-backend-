function getQuery(workout) {
  const query = {};
  if (workout) {
    const regexpWorkout = new RegExp(workout);
    query.workout = regexpWorkout;
  }
}

module.exports = getQuery;
