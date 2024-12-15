function solution(n, money) {
  let dp = [1, ...Array(n + 1).fill(0)];

  for (let m of money) {
    for (let i = m; i <= n; i++) {
      dp[i] += dp[i - m] % 1000000007;
    }
  }
  return dp[n];
}