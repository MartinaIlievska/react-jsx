import "./catImages.css"

export function CatImg({url}) {
    
    return (
        <div className="cat-card" >
            <img src={url} alt="CatImg" />
        </div>
    )
}

