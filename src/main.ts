import express from 'express';

const app = express();
const PORT = 3070;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello');
});

let token: string;

app.post('/validation', (req, res) => {
    const cardNumber = req.body.cardNumber.replace(/\s/g, '');
    const expMonthYear = req.body.expMonthYear
    const cvCode = req.body.cvCode

    const validationList: any[] = [];

    if (cardNumber.length !== 16) {
        validationList.push({cardNumber: "Please enter the 16 digit card number"})
    }
    if (cardNumber !== '0000111122223333') {
        validationList.push({cardNumber: "Please enter valid card number"})
    }
    if (expMonthYear.length !== 5) {
        validationList.push({expMonthYear: "Please enter the expiration date (MM/YY)"})
    }
    if (cvCode.length !== 3) {
        validationList.push({cvCode: "Please enter 3 digit cvv number"})
    }

    token = generatePass();

    res.status(200).send({status: validationList.length === 0 ? '1' : '0', code: token});
});

app.post('/payment', (req, res) => {
    const code = req.body.code
    const price = req.body.price

    if(code === token) res.status(200).send({status: true, message: `${price} $ payment received`})
    if(code !== token) res.status(200).send(false)
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

function generatePass() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';
 
    for (let i = 1; i <= 40; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);
 
        pass += str.charAt(char)
    }
 
    return pass;
}