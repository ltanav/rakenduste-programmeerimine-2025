export type Book = {
  id: string
  title: string
  author: string
  year: number
}

let books: Book[] = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 },
  { id: '2', title: '1984', author: 'George Orwell', year: 1949 },
]

export function getBooks() {
  return books
}

export function addBook(book: Book) {
  books.push(book)
}

export function updateBook(id: string, updated: Partial<Book>) {
  books = books.map(b => (b.id === id ? { ...b, ...updated } : b))
}

export function deleteBook(id: string) {
  books = books.filter(b => b.id !== id)
}
