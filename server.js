import 'dotenv/config'
import app from './src/app.js'

const port = process.env.PORT || 3002


app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})