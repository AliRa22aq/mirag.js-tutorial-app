import { createServer } from "miragejs"
import books from './data/data.json';


export default function() {

    createServer({

      routes() {
          this.namespace = "api"
        this.get("/books", () => {
            return books
        })

        this.post("/add", (schema,req) => {
            const newBook = JSON.parse(req.requestBody)
            books.push(newBook)
        })

      },
    })
  }