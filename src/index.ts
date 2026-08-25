import express, {} from "express"
import UserRoutes from "./routes/UserRoutes"

const app = express()
const PORT = 3000

app.use(express.json())
app.use("/api/users", UserRoutes)



app.listen(PORT, () => {console.log("fimose")})