import { useGetPostsQuery } from "../api/postsApi";

function Posts() {

    const { data, isLoading } = useGetPostsQuery();
    console.log(data);

    return (
        <>
            Post Component
            {isLoading && <p>Loading data...</p>}
            {!isLoading && <p>Data loaded!</p>}
        </>
    );
}

export default Posts;