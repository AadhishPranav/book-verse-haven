
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookDetailComponent from "@/components/books/BookDetail";
import BookGrid from "@/components/books/BookGrid";
import mockBooks from "@/data/mockBooks";

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const book = mockBooks.find(book => book.id === id);
  const relatedBooks = mockBooks
    .filter(b => b.id !== id && b.genres?.some(genre => book?.genres?.includes(genre)))
    .slice(0, 6);

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h2 className="text-2xl font-serif font-bold mb-4">Book not found</h2>
            <p className="text-muted-foreground">The requested book could not be found.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BookDetailComponent book={book} />
        
        {relatedBooks.length > 0 && (
          <div className="container mx-auto px-4 py-8">
            <BookGrid books={relatedBooks} title="Similar Books" />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BookDetail;
