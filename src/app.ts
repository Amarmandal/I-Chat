import express, { Request, Response, NextFunction, RequestHandler} from "express"

const app = express()
const port = 8000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})