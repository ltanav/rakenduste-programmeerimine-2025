import { describe, it, expect } from 'vitest'
import { getBooks, addBook, updateBook, deleteBook } from './booksData'

describe('Books CRUD', () => {
  it('adds a book', () => {
    addBook({ id: '99', title: 'New', author: 'Me', year: 2024 })
    expect(getBooks().some(b => b.id === '99')).toBe(true)
  })

  it('updates a book', () => {
    updateBook('99', { title: 'Updated' })
    expect(getBooks().find(b => b.id === '99')?.title).toBe('Updated')
  })

  it('deletes a book', () => {
    deleteBook('99')
    expect(getBooks().some(b => b.id === '99')).toBe(false)
  })
})
