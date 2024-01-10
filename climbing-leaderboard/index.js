function climbingLeaderboard(ranked, player) {

  const uniqueRanked = Array.from(new Set(ranked));
  const result = [];

  let i = uniqueRanked.length - 1;

  for (const playerScore of player) {
    while (i >= 0 && playerScore >= uniqueRanked[i]) {
      i--;
    }

    if (i === -1) {
      result.push(1);
    } else {
      console.log(i);
      result.push(i + 2);
    }
  }

  return result;
};

const player = [70, 80, 105];
const ranked = [100, 90, 90, 80];
console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]));
