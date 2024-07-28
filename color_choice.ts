export function checkchoose(m: number, n: number): number {
  function binomialCoefficient(n: number, k: number): number {
    if (k > n) return 0;
    if (k === 0 || k === n) return 1;
    
    // calculate n! / (k! * (n - k)!)
    let result = 1;
    for (let i = 1; i <= k; i++) {
      result *= (n - (k - i));
      result /= i;
    }
    
    return result;
  }
  
  for (let x = 0; x <= n; x++) {
    if (binomialCoefficient(n,x) === m) {
      return x;
    }
  }
  
  return -1;
}
