const Gallery = (props) =>{
    return(
        <div>
            <h2>{props.page} Page</h2>
            <img src="./src/assets/Logo.jpg" alt="SECE LOGO"/>
            <h2>The image is {props.image}</h2>
        </div>
    )
}
export default Gallery;