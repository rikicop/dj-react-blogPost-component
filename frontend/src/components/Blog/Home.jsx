import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
  const {data : blogs, isPending, error} = useFetch('http://192.168.43.129:8000/api')
   
  return (
      <div className="home">
        {error && <div style={{color:'red'}}> {error} </div>}
        {isPending && <div> Cargando... </div> }
        { blogs && <BlogList blogs = {blogs} title="Todos Los Blogs"  /> } 
      </div>
  );
}

export default Home