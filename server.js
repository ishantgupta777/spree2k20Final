const express = require('express')
const cors = require('cors')
const app = express()
const {
    google
} = require('googleapis');
const keys = require('./key.json');

app.use(express.static('./client/build'))
app.use(express.json())
app.use(cors())

var sheet = google.sheets('v4');


const port =  process.env.PORT || 5000

app.length('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

app.post('/register', (req, res) => {
    const {
        name,
        email,
        phone,
        city,
        college,
        year,
        gender,
        selectedSports
    } = req.body
    authorize(async function (authClient) {
        var request = {
            spreadsheetId: '11sUzVRd1EBhqrcAUUbOHwCAvSzG2pbJaufM1bk2z6L8',
            range: 'A1',
            auth: authClient,
            valueInputOption: 'RAW',
            insertDataOption: 'INSERT_ROWS',
            resource: {
                values: [
                    [name,
                        email,
                        phone,
                        city,
                        college,
                        year,
                        gender,
                        ...selectedSports
                    ]
                ]
            }
        };

        await sheet.spreadsheets.values.append(request, function (err, response) {
            if (err) {
                console.error(err);
                res.status(500).send()
            }

            res.status(200).send()
        });
    });

})



async function authorize(callback) {
    var authClient = new google.auth.JWT(keys.client_email, null, keys.private_key, [
        'https://www.googleapis.com/auth/spreadsheets'
    ]);
    if (authClient == null) {
        console.log('authentication failed');
        return;
    }
    callback(authClient);
}

app.listen(port, () => console.log(`listening on port ${port}`))