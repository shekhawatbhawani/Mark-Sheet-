function cal() {
    let input = document.querySelectorAll("input");
    let h = parseInt(input[0].value);
    let e = parseInt(input[1].value);
    let m = parseInt(input[2].value);
    let s = parseInt(input[3].value);
    let ss = parseInt(input[4].value);
    let total = h + e + m + s + ss;
    input[5].value = total;
    // let per = (total / 5) * 100;
    let per = total / 5;
    input[6].value = per;
    if (per > 40) {
        input[7].value = "Pass";
        input[7].style.backgroundColor = "lime";
    } else {
        input[7].value = "Fail";
        input[7].style.backgroundColor = "red";
    }
}
