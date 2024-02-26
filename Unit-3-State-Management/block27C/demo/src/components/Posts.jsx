import { useGetPostsQuery } from "../api/postsApi";

function Posts() {

    const { data, isLoading } = useGetPostsQuery();
    console.log(data?.data);
    console.log(isLoading);

    const posts = data?.data?.posts;

    return (
        <>
            {isLoading && <p>Loading data...</p>}
            {!isLoading && posts.map((posts) =>
                <div key={posts._id}>
                    <h2>{posts.title}</h2>
                    <p>{posts.description}</p>
                </div>
            )}
        </>
    );
}

export default Posts;