import express, {Request, Response} from "express"

const app = express()
const PORT = 3000

app.use(express.json())

app.get("/api/user", (req : Request, res : Response) => {
    res.json({"materia" : "DevOps"})
})

app.listen(PORT, () => {console.log("fimose")})