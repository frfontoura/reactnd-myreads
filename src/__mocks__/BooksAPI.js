const books = [
    {
        id: 'book_id',
        authors: [],
        imageLinks: { thumbnail: '' },
        shelf: 'currentlyReading'
    }
]

export const get = (bookId) => (Promise.resolve(books[0]))

export const getAll = () =>  (Promise.resolve(books))

export const update = (book, shelf) => (Promise.resolve(books))

export const search = (query) => ( query ? Promise.resolve(books) : Promise.resolve([]))
