import { useParams } from "react-router";
import useFetch from './useFetch';

 const BlogDetails = () => {
     const {id} = useParams();
     const { data:blog , error, isPending} = useFetch('http://192.168.43.129:8000/api/'+ id)
    return (
        <div>
            {isPending && <div> Loading... </div>}
            {error && <div> {error} </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author} </p>
                    <div>{blog.body}</div>
                    
                </article>
            )}
        </div>
    )
}

export default BlogDetails