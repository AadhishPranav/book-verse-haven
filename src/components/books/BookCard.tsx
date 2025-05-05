
import { useState } from "react";
import { Link } from "react-router-dom";
import { Book } from "@/types/Book";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link to={`/book/${book.id}`}>
      <Card 
        className="book-card overflow-hidden transition-all h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          <div className="relative book-cover">
            <AspectRatio ratio={2/3}>
              <img 
                src={book.coverUrl} 
                alt={book.title} 
                className="object-cover w-full h-full transition-transform duration-500"
                style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
              />
            </AspectRatio>
            <div className="book-spine"></div>
          </div>
          <div className="p-4">
            <h3 className="font-serif font-semibold text-foreground line-clamp-1">{book.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-1">{book.author}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BookCard;
