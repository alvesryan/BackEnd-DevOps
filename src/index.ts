import express, {} from "express"
import UserRoutes from "./routes/UserRoutes"
import { connect } from "node:http2"
import { connectDatabase } from "./config/Database"

const app = express()
const PORT = 3000

app.use(express.json())
app.use("/api/users", UserRoutes)

const startServer = async () => {
    await connectDatabase()
    app.listen(PORT, () => app.listen(PORT, () => {console.log("fimose")}))
}

startServer()