import { MongoClient } from "mongodb"

async function handler(req, res) {
    if(req.method != 'POST') return 

    const search  = req.body

    if(!search) return

    const client = await MongoClient.connect(process.env.MONGODB_URI)
    const db = client.db()
    const collection = db.collection("test")
    const result = await collection.insertOne({ search })
    client.close()

    res.status(201).json({
        historyWord: result,
        message: "Added"
    })
}

export default handler

