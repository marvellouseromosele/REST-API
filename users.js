// const express = require('express');
// const router = express.Router;

// const users = [{name: 'Marvellous Eromosele', email: 'emarvellous204@gmail.com'}]
 
// router.get('/', (_, res) => {
//     res.send('My Express App');
// });

// router.get('/users', (_, res) => {
//     res.json({ ok: true, users });
// });

// router.get('/user/:name', (req, res) => {
// const { name } = req.params;
// const user = users.filter((user) => user.name === name)[0];
// res.json({ok: true, user});
// });

// router.post('/adduser', (req, res) => {
// const { name, email} = req.body;
// if (name && email) {
//     users.push({ name, email });
//     res.json({ ok: true, users });
// }
// }); 

// module.exports  = router;