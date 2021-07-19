import { Link } from "react-router-dom";
import "./Card.scss"

const  BlogList = ({blogs}) => {
        return( 
            <div className="wrapper"> 
            {
            blogs.map(blog=>( 
            <div className="card" key={blog.id}> 
                <div className="card__body" >
                    <img src={blog.foto} alt="comida" className="card__image"/>
                     {/* <h1>{blog.foto}</h1> */}
                    <h2 className="card__title">{blog.title}</h2>
                    <p className="card__description">{blog.description}</p>
                </div>
                <Link to={`/api/${blog.id}`}>
                    <button className="card__btn">Ver Publicación</button>
                </Link>
            </div>  
            ))}
            </div>
             
        )
    }

export default  BlogList
