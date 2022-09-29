function onload() {
    for (var i = 0; i < deta.length; i ++) {
        $(".countdown").append("<tr><td><canvas class=\"canvas\" width=\"100px\" height=\"100px\"></canvas></td><td><h2 class=\"name\">" + deta [i][0] + "</h2></td></tr>")
        var context = $(".canvas") [i].getContext("2d");
        $(".canvas").css("marginTop", "15px")
        context.beginPath();
        context.arc(50, 50, 50, 0, 2 * Math.PI, false);
        context.fillStyle = "#2196F3";
        context.fill();
        context.font = "18px Serif";
        context.fillStyle = "#FFFFFF"
        console.log(deta [i])
        context.fillText(solve(deta [i][1].getMonth() + 1) + "/" + solve(deta [i][1].getDate()), 25, 35)
        context.font = "28px Serif"
        context.fillText(solve(deta [i][1].getHours()) + ":" + solve(deta [i][1].getMinutes()), 15, 70)
    }
    const time = $(".nowtime") [0]
    var now = new Date();
    function solve(t) {
        if ((t + "").length === 1) {
            return "0" + t;
        } else {
            return t;
        }
    }
    function datestr() {
        var result = solve(now.getMonth() + 1)
        result += "/" + solve(now.getDate())
        result += " " + solve(now.getHours())
        result += ":" + solve(now.getMinutes())
        result += ":" + solve(now.getSeconds())
        return result;
    }
    function count() {
        now = new Date();
        time.textContent = datestr()
    }
    setInterval(count, 20)
}