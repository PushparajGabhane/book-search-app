function BookDispaly(props) {
    const { imageLinks, title, infoLink, pageCount, authors, averageRating } = props.book.volumeInfo;
    let address = imageLinks !== undefined ? imageLinks.smallThumbnail : "";
    return (
        <>
            <div className="book-image">
                <a href={infoLink} target="_blank">
                    <img src={address} alt={title} />
                </a>
            </div>
        </>
    )
}

export default BookDispaly;