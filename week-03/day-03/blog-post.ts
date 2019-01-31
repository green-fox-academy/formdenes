'use strict';
export class BlogPost{
  authorName;
  title;
  text;
  publicationDate;
  constructor (autName:string, tit:string, txt:string, pubDate:string){
    this.authorName = autName;
    this.title = tit;
    this.text = txt;
    this.publicationDate = pubDate;
  }
}