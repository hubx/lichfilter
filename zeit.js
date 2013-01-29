// zeit.de is complaint http://schema.org/Article

var zeitParser = function (result, url) {
  var authorsHtml = result.getElementsByClassName("author");
  var authors = [];
  for(var i=0; i<authorsHtml.length; i++)
  {
    authors[i] = authorsHtml[i].innerHTML;
  }

  var sourcesHtml = result.getElementsByClassName("source");
  var sources = [];
  for(var i = 0; i < sourcesHtml.length; i++)
  {
    sources[i] = sourcesHtml[i].innerHTML;
  }

  this.sources[url] = sources;
  this.authors[url] = authors;
}

var zeitHightlighter = function (url) {
	var content;
	var highlight = document.createElement('div');
	var node = urls[url];

	if(crawler.authors[url] != "") {
		highlight.className = "favAuthor";
		content = crawler.authors[url];
		node.parentNode.parentNode.className += " favAuthorBox";
	}
	else {
		highlight.className = "ticker";
		content = crawler.sources[url];
		node.parentNode.parentNode.className += " tickerBox";
	}

	highlight.innerHTML = content;
	node.parentNode.insertBefore(highlight, node.nextSibling);
}


var urls = {};
var moreLinks = document.body.getElementsByClassName("more-link");
for(var i = 0; i < moreLinks.length; i++)
{
  if (moreLinks[i].hostname == "www.zeit.de")
  	urls[moreLinks[i].href] = moreLinks[i];
}

crawler.onfinish = zeitHightlighter;
crawler.process(urls, zeitParser);

