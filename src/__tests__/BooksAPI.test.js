import * as BooksAPI from '../BooksAPI'

function mockFetch(data) {
    return jest.fn().mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => data
        })
    )
}

const books = { books: [{ id: 'book_id' }] }
const book = { book: {id: 'book_id', shelf: 'currentlyReading'} }

test('BooksAPI.get', async () => {
    fetch = mockFetch(book);
    const response = await BooksAPI.get('book_id')
    expect(response.id).toBe(book.book.id)
});

test('BooksAPI.getAll', async () => {
    fetch = mockFetch(books);
    const response = await BooksAPI.getAll()
    expect(response.length).toBe(1)
});

test('BooksAPI.search', async () => {
    fetch = mockFetch(books);
    const response = await BooksAPI.search('query')
    expect(response.length).toBe(1)
});

test('BooksAPI.update', async () => {
    fetch = mockFetch(books);
    const response = await BooksAPI.update(book, 'read')
});
