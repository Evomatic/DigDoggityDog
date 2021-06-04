function digDoggityDog(string){
    if (typeof string !== 'string') {
        return "ERROR: this is not a string, so no doggy for you ;(";
    }

    if (string.indexOf(".") == -1) {
        const temp = string.concat("", "🐕");
        string = temp;
    } else {
        const temp = string.replace(".", "🐕");
        string = temp;
    }
    return string;
};















module.exports = { digDoggityDog };