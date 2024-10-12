const Footer = (props) => {
    const displayYear = new Date().getFullYear();
    return (
        <>
            <section className="footer_section">
                <div className="container">
                    <p>
                    &copy; <span id="displayYear">{displayYear}</span> All Rights Reserved By
                    <a href={props.link} target="_blank"> {props.label}</a>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Footer;