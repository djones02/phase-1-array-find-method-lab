// code your solution here
function superbowlWin(record) {
    const resultW = record.find(record => record.result === "W")
    if (resultW) {
        return resultW.year
    }
}