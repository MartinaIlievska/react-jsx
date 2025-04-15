import "./catImages.css"
function CatImg({url}) {
    
    return (
        <div className="cat-card" >
            <img src={url} alt="CatImg" />
        </div>
    )
}

export default CatImg