function cbypass_v(text) {
    var out = "";
    var words = [
        /* uncensor death */
        "kill",
        "die",
        "death",
        "murder",
        /* uncensor mild sexual content */
        "sexy",
        "s&m",
        "ligma",
        "deez",
        "ball",
        "kiss",
        /* uncensor vulgar words */
        "crap",
        "piss",
        "frick",
        "lmao",
        "wtf",
        "baka",
        "kuso",
        "bastard",
        "twat",
        "prick",
        /* uncensor mild profanity */
        "damn",
        "dammit",
        "ass",
        "bloody"
    ];
    for(var i = 0; i < text.length; i++) {
        var Allow = false;
        var dd = text.toLowerCase();
        for(var k = 0; k < words.length; k++) {
            if(dd[i]==words[k][0]) {
                if(dd.slice(i+1,i+words[k].length)==words[k].slice(1)) {
                    Allow = true
                };
            };
        };
        if(Allow) {
            out+=text[i]+"\u200e";
        } else {
            out+=text[i];
        };
    };
    return out;
};
