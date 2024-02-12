checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

function checkSpam(str){
    let lowerStr = str.toLowerCase();
    return (lowerStr.includes('XXX' || lowerStr.includes('viagra')))
}