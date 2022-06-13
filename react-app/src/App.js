import axios from 'axios';

export async function getData(userId) {

    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/"+userId);
    const {data: posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+userId);

    console.log((user));
    console.log(posts);

    return (user, posts);
 }

 getData(1);

 function App() {
  return (
    <div className="App">
      
    </div>
  );
}

 export default App;


