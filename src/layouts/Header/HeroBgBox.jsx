const HeroBgBox = (props) => {
    return (
        <>
            <div className="hero_bg_box">
                <div className="bg_img_box">
                    <img src={props.imgSrc} alt={props.title} />
                </div>
            </div> 
        </>
    );
};

export default HeroBgBox;