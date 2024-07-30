const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'casino_bonus_system',
    password: 'admin',
    port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

app.post('/casino/bonus', async (req, res) => {
    const { deposit_amount, bonusType } = req.body;
    let bonus_amount = 0;
    if (bonusType == 'fixed') {
        bonus_amount = 10;
    }
    else if (bonusType == 'percentage') {
        bonus_amount = (deposit_amount * 10) / 100;
    }
    const total_amount = deposit_amount + bonus_amount;

    await pool.query('INSERT INTO player_data (deposit,bonus,total) VALUES ($1,$2,$3)', [deposit_amount, bonus_amount, total_amount]);
    res.json({ bonus_amount, total_amount });
});
app.get('/casino/bonus', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM player_data');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching player data:', error);
        res.status(500).json({ error: 'Failed to fetch player data' });
    }
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`SERVER is running on ${PORT}`);

})