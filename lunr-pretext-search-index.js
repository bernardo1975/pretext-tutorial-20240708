var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  Moodle Course Site   copyright  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section. Some math:       this theorem     Proof goes here.   Give an example for .  "
},
{
  "id": "thm-ffff",
  "level": "2",
  "url": "sec-section-name.html#thm-ffff",
  "type": "Theorem",
  "number": "1.1.1",
  "title": "",
  "body": "  this theorem   "
},
{
  "id": "sec-section-name-6",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-6",
  "type": "Proof",
  "number": "1.1.1",
  "title": "",
  "body": " Proof goes here.  "
},
{
  "id": "sec-section-name-7",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-7",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "Give an example for . "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
