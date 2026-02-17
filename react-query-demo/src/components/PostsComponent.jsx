import { useState } from 'react';
import { useQuery } from 'react-query';

// Define a fetch function that can be used to fetch data from an API
const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
};

const PostsComponent = () => {
    const [showPosts, setShowPosts] = useState(true);
    // Use the useQuery hook to handle data fetching and caching
    const { data, isError, isLoading, refetch, dataUpdatedAt  } = useQuery('fetchPosts', fetchPosts, {
        cacheTime: 5 * 60 * 1000, 
        staleTime: 30 * 1000,  
        refetchOnWindowFocus: true, 
        keepPreviousData: true,
    });

    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
    if (isError) return <div>Error loading data</div>;

    // Render the fetched data
    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <button onClick={() => refetch()} style={{ marginRight: '10px' }}>
                    🔄 Refetch Data
                </button>
                <button onClick={() => setShowPosts(!showPosts)}>
                    {showPosts ? 'Hide' : 'Show'} Posts (Test Cache)
                </button>
                <span style={{ marginLeft: '10px', fontSize: '12px', color: 'gray' }}>
                    Last updated: {new Date(dataUpdatedAt).toLocaleTimeString()}
                </span>
            </div>

            {showPosts && (
                <div>
                    {data.map(item => (
                        <div key={item.id}>{item.title}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostsComponent;