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
        {text1: "星期日", text2: "Sunday"}
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