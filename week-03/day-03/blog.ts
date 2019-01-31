'use strict';
import { BlogPost } from "./blog-post";

class Blog{
  posts: BlogPost[] = [];
  add(autName:string, title:string, text:string, pubDate:string){
    this.posts.push(new BlogPost(autName, title, text, pubDate));
  }
  delete(index:number){
    this.posts.splice(index, 1);
  }
  update(index:number, post: BlogPost){
    this.posts.splice(index, 1, post);
  }
}

const blog = new Blog;
blog.add('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
blog.add('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
blog.add('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', `Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I 
asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really 
into the whole organizer profile thing.`, '2017.03.28.');
const blogPost = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', `Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I 
asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really 
into the whole organizer profile thing.`, '2017.03.28.');

console.log(blog);
blog.delete(2);
console.log(blog);
blog.update(1,blogPost);
console.log('---------------');

console.log(blog);

  