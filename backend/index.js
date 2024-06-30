const express = require('express')

const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/api/jokes', (req, res) =>{
    res.send(
        [
            {
                "id": 1,
                "title": "Atom Trust Issues",
                "content": "Why don't scientists trust atoms? Because they make up everything!"
            },
            {
                "id": 2,
                "title": "Anti-Gravity Book",
                "content": "I'm reading a book on anti-gravity. It's impossible to put down!"
            },
            {
                "id": 3,
                "title": "Mathematician's Fear",
                "content": "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!"
            },
            {
                "id": 4,
                "title": "Outstanding Scarecrow",
                "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
            },
            {
                "id": 5,
                "title": "Skeletons Don't Fight",
                "content": "Why don't skeletons fight each other? They don't have the guts!"
            }
        ]
        
    )
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is listening `)
})