<h1>WebService Using AXIOS (React)</h1>
Using JSON placeholder website https://jsonplaceholder.typicode.com/<br>
calling - https://jsonplaceholder.typicode.com/posts


<h6>Getting a resource</h6>
fetch('https://jsonplaceholder.typicode.com/posts')<br>
  .then(response => response.json())<br>
  .then(json => console.log(json))<br>

*Output*
{
  id: 1,
  title: '...',
  body: '...',
  userId: 1
}

<h6>Listing all resources</h6>
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));

*Output*
[
  { id: 1, title: '...' /* ... */ },
  { id: 2, title: '...' /* ... */ },
  { id: 3, title: '...' /* ... */ },
  /* ... */
  { id: 100, title: '...' /* ... */ },
];


<h6>Creating a resource</h6>
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

*Output*
{
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1
}


<h6>Updating a resource</h6>
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

*Output*
{
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1
}


<h6>Patching a resource</h6>
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

*Output*
{
  id: 1,
  title: 'foo',
  body: '...',
  userId: 1
}


<h6>Deleting a resource</h6>
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});


<h6>Filtering resources</h6>
// This will return all the posts that belong to the first user
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then((response) => response.json())
  .then((json) => console.log(json));


<h6>Listing nested resources</h6>
// This is equivalent to /comments?postId=1
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));