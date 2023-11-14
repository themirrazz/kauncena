function cbypass_v(text) {
    var out = "";
    var words = [
        "damn",
        "ass",
        "shit",
        "bastard",
        "fuck"
    ];
    for(var i = 0; i < text.length; i++) {
        var cuss = false;
        var dd = text.toLowerCase();
        for(var k = 0; k < words.length; k++) {
            if(dd[i]==words[k][0]) {
                if(dd.slice(i+1,i+words[k].length)==words[k].slice(1)) {
                    cuss = true
                };
            };
        };
        if(cuss) {
            out+=text[i]+"\u200e";
        } else {
            out+=text[i];
        };
    };
    return out;
};
