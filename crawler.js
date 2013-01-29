var crawler = {
  authors: {},
  sources: {},

  parseArticle: function (url, node, e) {
    var response_dom = document.createElement('div');
    response_dom.innerHTML = e.target.response;
    this.parserFunct(response_dom, url);
    this.onfinish_(url);
  },

  onfinish_: function (url)  {
    if(typeof (this.onfinish) == 'function')
      this.onfinish(url);
  },

  requestLinks: function (url, node) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.onload = this.parseArticle.bind(this, url, node);
    req.send(null);
  },

  process: function (links, pageParserFunct) {
    this.links = links;
    this.parserFunct = pageParserFunct;
     for(url in links) {
       this.requestLinks(url, links[url]);
    }   
  },
}

