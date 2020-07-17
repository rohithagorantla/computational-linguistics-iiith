﻿var text = '{"con1":[' +
    '{"a":"John ate an apple before afternoon","b":"before afternoon John ate an apple","c":"John before afternoon ate an apple"},' +
    '{"a":"John and Mary went to church","b":"Mary and John went to church"},' +
    '{"a":"John went to church after eating","b":"after eating John went to church","c":"John after eating went to church"},' +
    '{"a":"did he go to market","b":"he did go to market"},' +
    '{"a":"some students like to study in the night","b":"in the night some students like to study"},' +
    '{"a":"the woman who called my sister sells cosmetics","b":"the woman who sells cosmetics called my sister","c":"my sister who sells cosmetics called the woman","d":"my sister who called the woman sells cosmetics"},' +
    '{"a":"John goes to the library and studies","b":"John studies and goes to the library"},' +
    '{"a":"John ate an apple so did she","b":"she ate an apple so did John"},' +
    '{"a":"the teacher returned the book after she noticed the error","b":"the teacher noticed the error after she returned the book","c":"after the teacher returned the book she noticed the error","d":"after the teacher noticed the error she returned the book","e":"she returned the book after the teacher noticed the error","f":"she noticed the error after the teacher returned the book","g":"after she returned the book the teacher noticed the error","h":"after she noticed the error the teacher returned the book"},' +
    '{"a":"I told her that I bought a book yesterday","b":"I told her yesterday that I bought a book","c":"yesterday I told her that I bought a book","d":"I bought a book that I told her yesterday","e":"I bought a book yesterday that I told her","f":"yesterday I bought a book that I told her"}]}';

var hin = '{"con2":[' + '{"a":"राम और श्याम बाजार गयें","b":"राम और श्याम गयें बाजार","c":"बाजार गयें राम और श्याम","d":"गयें बाजार राम और श्याम"},' +
    '{"a":"राम सोया और श्याम भी","b":"श्याम सोया और राम भी","c":"सोया श्याम और राम भी","d":"सोया राम और श्याम भी"},' +
    '{"a":"मैंने उसे बताया कि राम सो रहा है", "b":"मैंने उसे बताया कि सो रहा है राम","c":"उसे मैंने बताया कि राम सो रहा है","d":"उसे मैंने बताया कि सो रहा है राम","e":"मैंने बताया उसे कि राम सो रहा है","f":"मैंने बताया उसे कि सो रहा है राम","g":"उसे बताया मैंने कि राम सो रहा है","h":"उसे बताया मैंने कि सो रहा है राम","i":"बताया मैंने उसे कि राम सो रहा है","j":"बताया मैंने उसे कि सो रहा है राम","k":"बताया उसे मैंने कि राम सो रहा है","l":"बताया उसे मैंने कि सो रहा है राम"},' +
    '{"a":"राम खाकर सोया","b":"खाकर राम सोया","c":"राम सोया खाकर","d":"खाकर सोया राम","e":"सोया राम खाकर","f":"सोया खाकर राम"},' +
    '{"a":"बिल्लियों को मारकर कुत्ता सो गया","b":"मारकर बिल्लियों को कुत्ता सो गया","c":"बिल्लियों को मारकर सो गया कुत्ता","d":"मारकर बिल्लियों को सो गया कुत्ता","e":"कुत्ता सो गया बिल्लियों को मारकर","f":"कुत्ता सो गया मारकर बिल्लियों को","g":"सो गया कुत्ता बिल्लियों को मारकर","h":"सो गया कुत्ता मारकर बिल्लियों को"},' +
    '{"a":"एक लाल किताब वहाँ है","b":"एक लाल किताब है वहाँ","c":"वहाँ है एक लाल किताब","d":"है वहाँ एक लाल किताब"},' +
    '{"a":"एक बड़ी सी किताब वहाँ है","b":"एक बड़ी सी किताब है वहाँ","c":"बड़ी सी एक किताब वहाँ है","d":"बड़ी सी एक किताब है वहाँ","e":"वहाँ है एक बड़ी सी किताब","f":"वहाँ है बड़ी सी एक किताब","g":"है वहाँ एक बड़ी सी किताब","h":"है वहाँ बड़ी सी एक किताब"}]}';

function disp()
{
    document.getElementById("get_correct").innerHTML = " ";
    document.getElementById("answers").innerHTML = " ";
    document.getElementById("s1").innerHTML = "";                                                        // to remove formed sentence 
    document.getElementById("s1").value = ""; 
    document.getElementById("corpus1").innerHTML = "";
    document.getElementById("corpus2").innerHTML = "";
    document.getElementById("check").innerHTML = "";                                                     // to remove check correctness button
    document.getElementById("reform").innerHTML = "";                                                    // to remove formed sentence
    document.getElementById("formed_sen").innerHTML = "";                                                // to remove reform button
    document.getElementById("braces").innerHTML = "";                                                    //to remove (select the buttons in proper order)
    document.getElementById("hide").innerHTML = "";

    for (var k = 0; k < 10; k++) {
        document.getElementById(k).value = " ";                                                          // to refresh all the buttons when onchanged
    }
    count = 0;                                                                                           // to refresh number of clicks count  
    if (document.getElementById("lan").value == "English")                                               // to select any particular languague
    {
        document.getElementById("dis_sen").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";   // to display sentences when lan selected
        document.getElementById("dis_sub").innerHTML = "(select the buttons in proper order)";
        var x = Math.floor(Math.random() * 10);                                                           // random number to select random sentences from given corpus
        obj = JSON.parse(text);                                                                          // object declaration
        var r = obj.con1[x].a;                                                                           // to select the sentence from corpus 
        document.getElementById("ran").value = x;
        var w = r.split(" ");                                                                            // split the selected sentence
        document.getElementById("formed_sen").value = w.length;                                          // to get length of selected sentence
        var b = [];                                                                                      // to store random numbers to 
        var i = 0;
        do {
            var x = Math.floor(Math.random() * w.length)
            if (b.includes(x) == false) {
                b.push(x);
            }
            i++;
        }
        while (w.length != b.length);
        for (var k = 0; k < w.length; k++) {
            document.getElementById(k).value = w[b[k]];
            document.getElementById(k).innerHTML = "<button>" + w[b[k]] + "</button>"
        }
        for (var j = w.length; j < 10; j++) {
            document.getElementById(j).innerHTML = " ";
        }
    }
    else if (document.getElementById("lan").value == "Hindi") {

        document.getElementById("dis_sen").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
        document.getElementById("dis_sub").innerHTML = "(select the buttons in proper order)";

        var x = Math.floor(Math.random() * 7);                                                           // random number to select random sentences from given corpus
        obj = JSON.parse(hin);                                                                          // object declaration
        var r = obj.con2[x].a;                                                                           // to select the sentence from corpus 
        document.getElementById("ran").value = x;
        var w = r.split(" ");                                                                            // split the selected sentence
        document.getElementById("formed_sen").value = w.length;                                          // to get length of selected sentence
        var b = [];                                                                                      // to store random numbers to 
        var i = 0;
        do {
            var x = Math.floor(Math.random() * w.length)
            if (b.includes(x) == false) {
                b.push(x);
            }
            i++;
        }
        while (w.length != b.length);
        for (var k = 0; k < w.length; k++) {
            document.getElementById(k).value = w[b[k]];
            document.getElementById(k).innerHTML = "<button>" + w[b[k]] + "</button>"
        }
        for (var j = w.length; j < 10; j++) {
            document.getElementById(j).innerHTML = " ";
        }
    }
    else
    {
        alert("Select languague");
    }
}
var count = 0;
function newsen(k) {
    var g = document.getElementById(k).value;
    document.getElementById("s2").value += g+" ";
    document.getElementById("s1").innerHTML += g + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp";
    document.getElementById(k).innerHTML = " ";
    document.getElementById("formed_sen").innerHTML = "Formed Sentence";
    document.getElementById("braces").innerHTML = " (after selecting the words): ";
    document.getElementById("reform").innerHTML = "<button>" + "Re-form the sentence" + "</button>";
    count++;
    var len = document.getElementById("formed_sen").value;
    if (count === len) {
        document.getElementById("check").innerHTML = "<button>" + "Check the correctness of this sentence" + "</button>";
    }

}           
function r() {
    count = 0;
    document.getElementById("answers").innerHTML = " ";
    document.getElementById("get_correct").innerHTML = "";
    document.getElementById("s1").innerHTML = " ";
    document.getElementById("s2").value = " ";
    document.getElementById("corpus1").innerHTML ="";
    document.getElementById("corpus2").innerHTML ="";
    document.getElementById("formed_sen").innerHTML =" ";
    document.getElementById("braces").innerHTML =" ";
    document.getElementById("reform").innerHTML =" ";
    document.getElementById("check").innerHTML = " ";
    document.getElementById("hide").innerHTML = "";
    for (var i = 0; i < 10; i++) {
        var a = document.getElementById(i).value
        if (a != " ") {
            document.getElementById(i).innerHTML = "<button>" + a + "</button>";
        }
    }
}
function check_correctness() {
    if (document.getElementById("lan").value == "English") {
        var z = document.getElementById("ran").value;
        var d = document.getElementById("s2").value;
        d = d.trim();
        if (d == obj.con1[z].a || d == obj.con1[z].b || d == obj.con1[z].c || d == obj.con1[z].d || d == obj.con1[z].e || d == obj.con1[z].f || d == obj.con1[z].g || d == obj.con1[z].h)
            document.getElementById("corpus1").innerHTML = "Right answer!!!";
        else {
            document.getElementById("corpus2").innerHTML = "Wrong answer!!!";
            document.getElementById("get_correct").innerHTML = "<button>" + "Get Correct Sentence" + "</button>";
        }
    }
    else {
        var z = document.getElementById("ran").value;
        var d = document.getElementById("s2").value;
        d = d.trim();
        if (d == obj.con2[z].a || d == obj.con2[z].b || d == obj.con2[z].c || d == obj.con2[z].d || d == obj.con2[z].e || d == obj.con2[z].f || d == obj.con2[z].g || d == obj.con2[z].h || d == obj.con2[z].i || d == obj.con2[z].j || d == obj.con2[z].k || d == obj.con2[z].l)

            document.getElementById("corpus1").innerHTML = "Right answer!!!";

        else
        {
            document.getElementById("corpus2").innerHTML = "Wrong answer!!!";
            document.getElementById("get_correct").innerHTML = "<button>" + "Get Correct Sentence " + "</button>";
        }
    }

}


function get_answer() {

    if (document.getElementById("lan").value == "English") {
        var n = document.getElementById("ran").value;
        document.getElementById("get_correct").innerHTML = " ";
        document.getElementById("hide").innerHTML = "<button>" + "Hide the correct sentence " + "</button>";
        
        
        switch (n) {
            case 0: document.getElementById("answers").innerHTML = obj.con1[0].a + "<br>" + obj.con1[0].b + "<br>" + obj.con1[0].c; break;
            case 1: document.getElementById("answers").innerHTML = obj.con1[1].a + "<br>" + obj.con1[1].b; break;
            case 2: document.getElementById("answers").innerHTML = obj.con1[2].a + "<br>" + obj.con1[0].b + "<br>" + obj.con1[0].c; break;
            case 3: document.getElementById("answers").innerHTML = obj.con1[3].a + "<br>" + obj.con1[3].b; break;
            case 4: document.getElementById("answers").innerHTML = obj.con1[4].a + "<br>" + obj.con1[4].b; break;
            case 5: document.getElementById("answers").innerHTML = obj.con1[5].a + "<br>" + obj.con1[5].b + "<br>" + obj.con1[5].c + "<br>" + obj.con1[5].d; break;
            case 6: document.getElementById("answers").innerHTML = obj.con1[6].a + "<br>" + obj.con1[6].b; break;
            case 7: document.getElementById("answers").innerHTML = obj.con1[7].a + "<br>" + obj.con1[7].b; break;
            case 8: document.getElementById("answers").innerHTML = obj.con1[8].a + "<br>" + obj.con1[8].b + "<br>" + obj.con1[8].c + "<br>" + obj.con1[8].d + "<br>" + obj.con1[8].e + "<br>" + obj.con1[8].f + "<br>" + obj.con1[8].g + "<br>" + obj.con1[8].h; break;
            case 9: document.getElementById("answers").innerHTML = obj.con1[9].a + "<br>" + obj.con1[9].b + "<br>" + obj.con1[9].c + "<br>" + obj.con1[9].d + "<br>" + obj.con1[9].e + "<br>" + obj.con1[9].f; break;

        }
    }
    else {
        var n = document.getElementById("ran").value;
        document.getElementById("get_correct").innerHTML = " ";
        document.getElementById("hide").innerHTML = "<button>" + "Hide the correct sentence " + "</button>";

        switch (n) {
            case 0: document.getElementById("answers").innerHTML = obj.con2[0].a + "<br>" + obj.con2[0].b + "<br>" + obj.con2[0].c + "<br>" + obj.con2[0].d; break;
            case 1: document.getElementById("answers").innerHTML = obj.con2[1].a + "<br>" + obj.con2[1].b + "<br>" + obj.con2[1].c + "<br>" + obj.con2[1].d; break;
            case 2: document.getElementById("answers").innerHTML = obj.con2[2].a + "<br>" + obj.con2[2].b + "<br>" + obj.con2[2].c + "<br>" + obj.con2[2].d + "<br>" + obj.con2[2].e + "<br>" + obj.con2[2].f + "<br>" + obj.con2[2].g + "<br>" + obj.con2[2].h + "<br>" + obj.con2[2].i + "<br>" + obj.con2[2].j + "<br>" + obj.con2[2].k + "<br>" + obj.con2[2].l; break;
            case 3: document.getElementById("answers").innerHTML = obj.con2[3].a + "<br>" + obj.con2[3].b + "<br>" + obj.con2[3].c + "<br>" + obj.con2[3].d + "<br>" + obj.con2[3].e + "<br>" + obj.con2[3].f; break;
            case 4: document.getElementById("answers").innerHTML = obj.con2[4].a + "<br>" + obj.con2[4].b + "<br>" + obj.con2[4].c + "<br>" + obj.con2[4].d + "<br>" + obj.con2[4].e + "<br>" + obj.con2[4].f + "<br>" + obj.con2[4].g + "<br>" + obj.con2[4].h; break;
            case 5: document.getElementById("answers").innerHTML = obj.con2[5].a + "<br>" + obj.con2[5].b + "<br>" + obj.con2[5].c + "<br>" + obj.con1[5].d; break;
            case 6: document.getElementById("answers").innerHTML = obj.con2[6].a + "<br>" + obj.con2[6].b + "<br>" + obj.con2[6].c + "<br>" + obj.con2[6].d + "<br>" + obj.con2[6].e + "<br>" + obj.con2[6].f + "<br>" + obj.con2[6].g + "<br>" + obj.con2[6].h; break;
                 
        }
    }  
}
function hide_answer()
{
   
    document.getElementById("get_correct").innerHTML = "<button>" + "Get Answers " + "</button>";
    document.getElementById("answers").innerHTML = " ";
    document.getElementById("hide").innerHTML = " ";
}