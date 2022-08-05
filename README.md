<h1>WebService Using AXIOS (React)</h1>
Live link https://rincemathew.github.io/WebService-Using-AXIOS/<br>
Using JSON placeholder website https://jsonplaceholder.typicode.com/<br>
calling - https://jsonplaceholder.typicode.com/posts

![screenshot](https://github.com/rincemathew/WebService-Using-AXIOS/blob/master/public/screenshot.png)


<h6>Getting a resource</h6>
fetch('https://jsonplaceholder.typicode.com/posts')<br>
  .then(response => response.json())<br>
  .then(json => console.log(json))<br><br>

*Output*<br>
{<br>
  id: 1,<br>
  title: '...',<br>
  body: '...',<br>
  userId: 1<br>
}<br>

<h6>Listing all resources</h6>
fetch('https://jsonplaceholder.typicode.com/posts')<br>
  .then((response) => response.json())<br>
  .then((json) => console.log(json));<br><br>

*Output*<br>
[<br>
  { id: 1, title: '...' /* ... */ },<br>
  { id: 2, title: '...' /* ... */ },<br>
  { id: 3, title: '...' /* ... */ },<br>
  /* ... */<br>
  { id: 100, title: '...' /* ... */ },<br>
];<br>


<h6>Creating a resource</h6>
fetch('https://jsonplaceholder.typicode.com/posts', {<br>
  method: 'POST',<br>
  body: JSON.stringify({<br>
    title: 'foo',<br>
    body: 'bar',<br>
    userId: 1,<br>
  }),<br>
  headers: {<br>
    'Content-type': 'application/json; charset=UTF-8',<br>
  },<br>
})<br>
  .then((response) => response.json())<br>
  .then((json) => console.log(json));<br><br>

*Output*<br>
{<br>
  id: 101,<br>
  title: 'foo',<br>
  body: 'bar',<br>
  userId: 1<br>
}<br>


<h6>Updating a resource</h6>
fetch('https://jsonplaceholder.typicode.com/posts/1', {<br>
  method: 'PUT',<br>
  body: JSON.stringify({<br>
    id: 1,<br>
    title: 'foo',<br>
    body: 'bar',<br>
    userId: 1,<br>
  }),<br>
  headers: {<br>
    'Content-type': 'application/json; charset=UTF-8',<br>
  },<br>
})<br>
  .then((response) => response.json())<br>
  .then((json) => console.log(json));<br><br>

*Output*<br>
{<br>
  id: 1,<br>
  title: 'foo',<br>
  body: 'bar',<br>
  userId: 1<br>
}<br>


<h6>Patching a resource</h6>
fetch('https://jsonplaceholder.typicode.com/posts/1', {<br>
  method: 'PATCH',<br>
  body: JSON.stringify({<br>
    title: 'foo',<br>
  }),<br>
  headers: {<br>
    'Content-type': 'application/json; charset=UTF-8',<br>
  },<br>
})<br>
  .then((response) => response.json())<br>
  .then((json) => console.log(json));<br><br>

*Output*<br>
{<br>
  id: 1,<br>
  title: 'foo',<br>
  body: '...',<br>
  userId: 1<br>
}<br>


<h6>Deleting a resource</h6>
fetch('https://jsonplaceholder.typicode.com/posts/1', {<br>
  method: 'DELETE',<br>
});<br><br>


<h6>Filtering resources</h6>
// This will return all the posts that belong to the first user<br>
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')<br>
  .then((response) => response.json())<br>
  .then((json) => console.log(json));<br><br>


<h6>Listing nested resources</h6>
// This is equivalent to /comments?postId=1<br>
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')<br>
  .then((response) => response.json())<br>
  .then((json) => console.log(json));<br>