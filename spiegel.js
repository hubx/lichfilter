var authorBox = document.body.getElementsByClassName("spAutorenzeile");
for(var i = 0; i < authorBox.length; i++)
{
  authorBox[i].className += " favAuthor";
  authorBox[i].parentNode.parentNode.className += " favAuthorBox";
}

var tickerBox = document.body.getElementsByClassName("spTopThema");
for(var i = 0; i < tickerBox.length; i++)
{
  if (tickerBox[i].className == "spTopThema")
  	tickerBox[i].className += " tickerBox";
}

