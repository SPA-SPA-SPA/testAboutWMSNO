// an object which can create a special random number 
var randomNumPad = {
    randomNumPad: [],                   /* the NumPad */
    randomNumWrongPad: [],                   /* the NumPad */
    randomNumOfPad: 0,                  /* how many numbers does this pad have */
    markedNum: 0,                       /* how many numbers have been marked  */

    randomNumPadCreator: function(){    /* create the entire NumPad */
        for(var i = 0; i < this.randomNumOfPad; i++){
            this.randomNumPad[i] = false;
            this.randomNumWrongPad[i] = false;
        }
    },

    randomNumCreator: function(){       /* create a random number between 0 and randomNumOfPad(not included) */
        return Math.round(Math.random() * (this.randomNumOfPad - 1));
    },

    randomNumChecker: function(num){    /* check the random number is marked or not */
        if(this.randomNumPad[num])
            return true;                    /* if it has been marked, return ture */
        else return false;                  /* else return false */
    },

    randomNumUsefulCreator: function(){     /* create a useful random number */
        var num;
        while(this.randomNumChecker(num = this.randomNumCreator())){}
        return num;
    },

    randomNumMark: function(num){       /* marked the num */
        this.randomNumPad[num] = true;
        this.markedNum++;
    },

    randomNumWrong: function(num){      /* make the number "wrong" */
        this.randomNumWrongPad[num] = true;
    },

    randomNumWrongprint: function(){    /* print those terms which you answer incorrectly */
        var stringFinal = "";

        for(var i = 0; i < this.randomNumOfPad; i++){
            if(this.randomNumWrongPad[i] === true)
                stringFinal = stringFinal + knowledgePad.terms[i].text1 + " : " + knowledgePad.terms[i].text2 + "<br>";
        }

        if(stringFinal === "")
            document.getElementById("message").innerHTML = "All right! Well done! ";
        else
            document.getElementById("message").innerHTML = "You are wrong about: <br>" + stringFinal + "<br>Try to be right next time~~";
    },
};

// an object which can store a small database for knowledge
var knowledgePad = {
    terms: [                            /* one term have two texts*/
        {text1: "星期一", text2: "Monday"},
        {text1: "星期二", text2: "Tuesday"},
        {text1: "星期三", text2: "Wednesday"},
        {text1: "星期四", text2: "Thursday"},
        {text1: "星期五", text2: "Friday"},
        {text1: "星期六", text2: "Saturday"},
        {text1: "星期日", text2: "Sunday"},
        {text1: "一月", text2: "January"},
        {text1: "二月", text2: "February"},
        {text1: "三月", text2: "March"},
        {text1: "四月", text2: "April"},
        {text1: "五月", text2: "May"},
        {text1: "六月", text2: "June"},
        {text1: "七月", text2: "July"},
        {text1: "八月", text2: "August"},
        {text1: "九月", text2: "September"},
        {text1: "十月", text2: "October"},
        {text1: "十一月", text2: "November"},
        {text1: "十二月", text2: "December"},
        {text1: "春天", text2: "spring"},
        {text1: "夏天", text2: "summer"},
        {text1: "秋天（美国常用的）", text2: "fall"},
        {text1: "秋天（英国常用的）", text2: "autumn"},
        {text1: "冬天", text2: "winter"},
        {text1: "1", text2: "one"},
        {text1: "2", text2: "two"},
        {text1: "3", text2: "three"},
        {text1: "4", text2: "four"},
        {text1: "5", text2: "five"},
        {text1: "6", text2: "six"},
        {text1: "7", text2: "seven"},
        {text1: "8", text2: "eight"},
        {text1: "9", text2: "nine"},
        {text1: "10", text2: "ten"},
        {text1: "11", text2: "eleven"},
        {text1: "12", text2: "twelve"},
        {text1: "13", text2: "thirteen"},
        {text1: "14", text2: "fourteen"},
        {text1: "15", text2: "fifteen"},
        {text1: "16", text2: "sixteen"},
        {text1: "17", text2: "seventeen"},
        {text1: "18", text2: "eighteen"},
        {text1: "19", text2: "nineteen"},
        {text1: "20", text2: "twenty"},
        {text1: "21", text2: "twenty-one"},
        {text1: "22", text2: "twenty-two"},
        {text1: "23", text2: "twenty-three"},
        {text1: "30", text2: "thirty"},
        {text1: "40", text2: "forty"},
        {text1: "50", text2: "fifty"},
        {text1: "60", text2: "sixty"},
        {text1: "70", text2: "seventy"},
        {text1: "80", text2: "eighty"},
        {text1: "90", text2: "ninety"},
        {text1: "百", text2: "hundred"},
        {text1: "千", text2: "thousand"},
        {text1: "百万", text2: "million"},
        {text1: "十亿", text2: "billion"},
        {text1: "第1", text2: "first"},
        {text1: "第2", text2: "second"},
        {text1: "第3", text2: "third"},
        {text1: "第4", text2: "fourth"},
        {text1: "第5", text2: "fifth"},
        {text1: "第6", text2: "sixth"},
        {text1: "第7", text2: "seventh"},
        {text1: "第8", text2: "eighth"},
        {text1: "第9", text2: "ninth"},
        {text1: "第10", text2: "tenth"},
        {text1: "第11", text2: "eleventh"},
        {text1: "第12", text2: "twelfth"},
        {text1: "第13", text2: "thirteenth"},
        {text1: "第14", text2: "fourteenth"},
        {text1: "第15", text2: "fifteenth"},
        {text1: "第16", text2: "sixteenth"},
        {text1: "第17", text2: "seventeenth"},
        {text1: "第18", text2: "eighteenth"},
        {text1: "第19", text2: "nineteenth"},
        {text1: "第20", text2: "twenty"},
        {text1: "第21", text2: "twenty-first"},
        {text1: "第25", text2: "twenty-fifth"},
        {text1: "第30", text2: "thirtieth"},
        {text1: "第40", text2: "fortieth"},
        {text1: "第50", text2: "fiftieth"},
        {text1: "第60", text2: "sixtieth"},
        {text1: "第70", text2: "seventieth"},
        {text1: "第80", text2: "eightieth"},
        {text1: "第90", text2: "ninetieth"},
        {text1: "第100", text2: "hundred"},
    ]
};

// an object which can deal with the whole test programme
var test = {
    testNum: 0,
    stringTest: "",
    stringAnswer: "",

    testCreator(){
        this.stringTest = knowledgePad.terms[this.testNum].text1;
    },
    testGetAnswer(){
        this.stringAnswer = prompt(this.stringTest);
    },
    testChecker(){
        if(this.stringAnswer === knowledgePad.terms[this.testNum].text2)
            return true;
        else
            return false;
    },
};

// initialize
function init(){
    /* create a randomNumPad */
    randomNumPad.randomNumOfPad = knowledgePad.terms.length;
    randomNumPad.randomNumPadCreator();
    
    /* start a loop. if numbers are not all marked, keep testing */
    while(randomNumPad.markedNum !== randomNumPad.randomNumOfPad){
        /* create a useful random number */
        test.testNum = randomNumPad.randomNumUsefulCreator();
        /* use the random number to create a test */
        test.testCreator();
        /* get answer from the user */
        test.testGetAnswer();
        /* if the user are right, it will mark the number in randomNumPad and show an alert "you are right!" */
        /* else it will "Wrong!" and will not mark the number */
        if(test.testChecker()){
            randomNumPad.randomNumMark(test.testNum);
            // alert("You are right! ");
        } else {
            randomNumPad.randomNumWrong(test.testNum);
            alert("Wrong!提示：如果是星期或月份，记得首字母大写！");
        }
    }

    randomNumPad.randomNumWrongprint();
}

// 
window.onload = init;