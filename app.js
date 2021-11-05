import axios from "axios";

const getData = async (id) => {
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/` + id)
    const fetchedUserData = await userResponse.data;

    const userPost = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    const fetchedPostData = await userPost.data;

    console.log(fetchedUserData);
    console.log(fetchedPostData);
}

export default getData;