﻿function s() {
    var text = '{"con1":[' +
        '{"a":"John ate an apple before afternoon <br>","b": " before afternoon John ate an apple <br>","c": "John before afternoon ate an apple <br>"},' +
        '{"a": "John and Mary went to church <br>", "b": "Mary and John went to church <br>"},' +
        '{"a":"John went to church after eating <br>","b": "after eating John went to church <br>","c": "John after eating went to church <br>"},' +
        '{"a":"did he go to market <br>","b": " he did go to market <br>"},' +
        '{"a":"some students like to study in the night <br> ","b": "at night some students like to study <br>"},' +
        '{"a":" the woman who called my sister sells cosmetics <br> ","b": "the woman who sells cosmetics called my sister <br>","c": " my sister who sells cosmetics called the woman <br>","d": "my sister who called the woman sells cosmetics<br>"},' +
        '{"a":" John goes to the library and studies <br>","b": "  John studies and goes to the library<br>"},' +
        '{"a":"John ate an apple so did she <br>","b": " she ate an apple so did John <br> "},' +
        '{"a":"the teacher returned the book after she noticed the error <br>","b": "the teacher noticed the error after she returned the book<br>", "c": "after the teacher returned the book she noticed the error<br>","d":" after the teacher noticed the error she returned the book<br>","e": "she returned the book after the teacher noticed the error<br>","f": "she noticed the error after the teacher returned the book<br>","g": "after she returned the book the teacher noticed the error<br>", "h": "after she noticed the error the teacher returned the book<br>"},' +
        '{"a":"I told her that I bought a book yesterday <br>", "b": " I told her yesterday that I bought a book<br>","c": "yesterday I told her that I bought a book<br>","d": "I bought a book that I told her yesterday<br>","e": "I bought a book yesterday that I told her<br>","f": "yesterday I bought a book that I told her<br>"}]}';

    obj = JSON.parse(text);
    document.getElementById("s1").innerHTML = obj.con1[0].a + "" + obj.con1[0].b + "" + obj.con1[0].c;
    document.getElementById("s2").innerHTML = obj.con1[1].a + "" + obj.con1[1].b;
    document.getElementById("s3").innerHTML = obj.con1[2].a + "" + obj.con1[2].b + "" + obj.con1[2].c;
    document.getElementById("s4").innerHTML = obj.con1[3].a + "" + obj.con1[3].b;
    document.getElementById("s5").innerHTML = obj.con1[4].a + "" + obj.con1[4].b;
    document.getElementById("s6").innerHTML = obj.con1[5].a + "" + obj.con1[5].b + "" + obj.con1[5].c + "" + obj.con1[5].d;
    document.getElementById("s7").innerHTML = obj.con1[6].a + "" + obj.con1[6].b;
    document.getElementById("s8").innerHTML = obj.con1[7].a + "" + obj.con1[7].b;
    document.getElementById("s9").innerHTML = obj.con1[8].a + "" + obj.con1[8].b + "" + obj.con1[8].c + "" + obj.con1[8].d + "" + obj.con1[8].e + "" + obj.con1[8].f + "" + obj.con1[8].g + "" + obj.con1[8].h;
    document.getElementById("s10").innerHTML = obj.con1[9].a + "" + obj.con1[9].b + "" + obj.con1[9].c + "" + obj.con1[9].d + "" + obj.con1[9].e + "" + obj.con1[9].f;


    var hin = '{"con2":[' +
        '{"a":"राम और श्याम बाजार गयें <br>","b": " राम और श्याम गयें बाजार <br> ","c": "बाजार गयें राम और श्याम <br> ","d":"गयें बाजार राम और श्याम <br>"},' +
        '{"a": " राम सोया और श्याम भी  <br>", "b": "श्याम सोया और राम भी <br> ","c":"सोया श्याम और राम भी <br> ","d":"सोया राम और श्याम भी<br>"},'+
        '{"a":" मैंने उसे बताया कि राम सो रहा है <br> ","b": " मैंने उसे बताया कि सो रहा है राम <br> ", "c": " उसे मैंने बताया कि राम सो रहा है <br> ","d":"उसे मैंने बताया कि सो रहा है राम  <br> ","e": "मैंने बताया उसे कि राम सो रहा है <br> ","f": "मैंने बताया उसे कि सो रहा है राम <br> ","g": "उसे बताया मैंने कि राम सो रहा है <br> ", "h": " उसे बताया मैंने कि सो रहा है राम <br> ","i": " बताया मैंने उसे कि राम सो रहा है <br> ","j": "बताया मैंने उसे कि सो रहा है राम <br> ","k": "बताया उसे मैंने कि राम सो रहा है <br>", "l": "बताया उसे मैंने कि सो रहा है राम <br>"},' +
        '{"a":" राम खाकर सोया <br>","b": " खाकर राम सोया <br> ", "c": "राम सोया खाकर <br> ","d": "खाकर सोया राम <br> ","e": "सोया राम खाकर <br> ", "f": "सोया खाकर राम <br>"},' +
        '{"a":" बिल्लियों को मारकर कुत्ता सो गया <br>","b": " मारकर बिल्लियों को कुत्ता सो गया <br> ", "c": "बिल्लियों को मारकर सो गया कुत्ता <br> ","d":"मारकर बिल्लियों को सो गया कुत्ता <br> ","e": "कुत्ता सो गया बिल्लियों को मारकर <br> ","f": "कुत्ता सो गया मारकर बिल्लियों को <br> ","g": "सो गया कुत्ता बिल्लियों को मारकर <br> ", "h": "सो गया कुत्ता मारकर बिल्लियों को <br>"},' +
        '{"a":"एक लाल किताब वहाँ है <br> ","b": "एक लाल किताब है वहाँ <br> ", "c": "वहाँ है एक लाल किताब <br> ","d": " है वहाँ एक लाल किताब<br>"},' +
        '{"a":"एक बड़ी सी किताब वहाँ है<br>","b": "   एक बड़ी सी किताब है वहाँ <br>", "c": "बड़ी सी एक किताब वहाँ है <br> ","d":"बड़ी सी एक किताब है वहाँ <br> ","e": "   वहाँ है एक बड़ी सी किताब <br> ","f": "वहाँ है बड़ी सी एक किताब <br> ","g": "है वहाँ एक बड़ी सी किताब <br> ", "h": "है वहाँ बड़ी सी एक किताब<br>"}]}';

    obj = JSON.parse(hin);
    document.getElementById("t1").innerHTML = obj.con2[0].a + "" + obj.con2[0].b + "" + obj.con2[0].c + "" + obj.con2[0].d;
    document.getElementById("t2").innerHTML = obj.con2[1].a + "" + obj.con2[1].b + "" + obj.con2[1].c + "" + obj.con2[1].d;
    document.getElementById("t3").innerHTML = obj.con2[2].a + "" + obj.con2[2].b + "" + obj.con2[2].c + "" + obj.con2[2].d + "" + obj.con2[2].e + "" + obj.con2[2].f + "" + obj.con2[2].g + "" + obj.con2[2].h + "" + obj.con2[2].i + "" + obj.con2[2].j + "" + obj.con2[2].k + "" + obj.con2[2].l;
    document.getElementById("t4").innerHTML = obj.con2[3].a + "" + obj.con2[3].b + "" + obj.con2[3].c + "" + obj.con2[3].d + "" + obj.con2[3].e + "" + obj.con2[3].f;
    document.getElementById("t5").innerHTML = obj.con2[4].a + "" + obj.con2[4].b + "" + obj.con2[4].c + "" + obj.con2[4].d + "" + obj.con2[4].e + "" + obj.con2[4].f + "" + obj.con2[4].g + "" + obj.con2[4].h;
    document.getElementById("t6").innerHTML = obj.con2[5].a + "" + obj.con2[5].b + "" + obj.con2[5].c + "" + obj.con2[5].d;
    document.getElementById("t7").innerHTML = obj.con2[6].a + "" + obj.con2[6].b + "" + obj.con2[6].c + "" + obj.con2[6].d + "" + obj.con2[6].e + "" + obj.con2[6].f + "" + obj.con2[6].g + "" + obj.con2[6].h;
}
  






