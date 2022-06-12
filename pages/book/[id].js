import { useRouter } from "next/router"

const Book = () => {
    const router = useRouter()
    const bookID = router.query.id
    const bookTitle = router.query.title
    const bookAuthor = router.query.author
    const bookPrice = router.query.price
    const bookImg = router.query.thumbnailImg
    return(
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <h1>Book ID is {bookID}</h1>
            <h1>Book title is {bookTitle}</h1>
            <h1>Book author is {bookAuthor}</h1>
            <h1>Book price is {bookPrice}</h1>
            <img src={bookImg} alt="" />
        </div>
    )
}

export default Book