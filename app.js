var express = require("express");
var app = express();
app.get("/url", (req, res, next) => {
    res.json(["I am Marvellous Eromosele, and I would love to intern at SnapiLabs as a Software Engineer. I am passionate about interning here because I believe that this will give me the opportunity to learn form the best, connect with fellow tech and code enthusiasts and also contribute to the growth of the already thriving tech community estabilshed by SnapiLabs."]);
   });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});