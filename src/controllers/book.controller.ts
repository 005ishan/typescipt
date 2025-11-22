import { Request, Response } from "express";
import { CreateBookDTO } from "../dtos/book.dto";
import { book } from "../repositories/book.repository";
import { Book } from "../types/book.type";
import { BookService } from "../services/book.service";
import { error } from "console";

// export type Book = {
//   id: string;
//   title: string;
//   date?: string;
// }

const bookService = new BookService();

export class BookController {
  createBook = (req: Request, res: Response) => {

    try{
      const validation = CreateBookDTO.safeParse(req.body);
    if(!validation.success){
        return res.status(400).json({errors: validation.error});
    }
    const { id, title } = validation.data;
    const newBook: Book = bookService.createBook({id, title});

    return res.status(201).json(newBook); 

    }catch(err: Error | any){
      return res.status(500).json({error: err.message ?? 'Internal Server Error'})
    }

    
  }

  getBooks = (req: Request, res: Response) => {
    const return_book: Book[] = bookService.getBooks();
    res.status(200).json(return_book);
  };

  getBookById = (req: Request, res: Response) => {
    const bookId: string = req.params.bookid;
    const requestedBook : Book | undefined = bookService.getBookById(bookId);
    if(!requestedBook){
      return res.status(404).json({message: "Book not found"});
    }
  }
}