
const express = require('express'); 
const mongoose = require('mongoose'); 
const bcrypt = require('bcryptjs'); 
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./models/User');


const app = express(); 


app.use(bodyParser.json());


app.use(cors());

mongoose.connect('mongodb://localhost:27017/loginApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error: ", err));


app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
    
        const hashedPassword = await bcrypt.hash(password, 10);

    
        const user = new User({ name, email, password: hashedPassword });

    
        await user.save();

        res.status(201).send({ message: 'User registered successfully' });
    } catch (err) {
        if (err.code === 11000) {
           
            res.status(400).send({ message: 'Email already exists' });
        } else {
            res.status(500).send({ message: 'Error in registration', error: err.message });
        }
    }
});


app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send({ message: 'User not found' });
        }

      
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({ message: 'Invalid password' });
        }

        res.status(200).send({ message: 'Login successful' });
    } catch (err) {
        res.status(500).send({ message: 'Error in login', error: err.message });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
