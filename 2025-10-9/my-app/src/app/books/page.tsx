import BookForm from './BookForm'

async function getBooks() {
  const res = await fetch('http://localhost:3000/api/books', { cache: 'no-store' })
  return res.json()
}

export default async function BooksPage() {
  const books = await getBooks()
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <BookForm />
      <ul>
        {books.map((b: any) => (
          <li key={b.id}>
            <strong>{b.title}</strong> — {b.author} ({b.year})
          </li>
        ))}
      </ul>
    </div>
  )
}
