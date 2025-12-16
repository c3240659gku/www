function calc() {
    let l = prompt("範囲の最小値を1～10で入力してください");
    let n = prompt("範囲の最大値を1～10で入力してください");
    l = Number(l);
    n = Number(n);
    if(!Number.isInteger(n) || n < 1 || n > 10) {
        if(!Number.isInteger(l) || l < 1 || l > 10) {
        alert("1~10の整数を入力してください");
        return;
        }
    }

    function gcd(a,b) {
        while (b !== 0) {
            let temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }

    function lcm(a,b) {
        return (a * b) / gcd(a,b);
    }

    let answer = 1;
    for(let i = 1; i <= n; i++){
        answer = lcm(answer,i);
    }

    document.getElementById("result").textContent =
        "1~"+n+"で割り切れる最小の数値は"+answer+"です。";
}