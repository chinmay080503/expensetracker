import { useState } from 'react';
import { Typography, Box, TextField, Button, styled, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    & > h5, & > div, & > button, & > .radio-group {
        margin-top: 20px;
    }
    margin-top: 20px;
    padding: 20px;
    background-color: #F9FAFC; /* Light background for better readability */
    border-radius: 12px; /* Rounded corners for a modern look */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`;

const StyledButton = styled(Button)`
    background: #445A6F;
    color: #fff;
    &:hover {
        background: #374A59; /* Darker shade on hover */
    }
`;

const Header = styled(Typography)`
    position: sticky;
    top: 0;
    background-color: #FFFFFF;
    z-index: 1;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    margin: 0;
`;

const NewTransaction = ({ addTransaction }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('expense');

    const newTransaction = e => {
        if (!text || !amount || !date) return; // Simple validation

        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount * (type === 'expense' ? -1 : 1), // Negative for expenses
            date,
            type,
        };
        addTransaction(transaction);
        setText('');
        setAmount('');
        setDate('');
    };

    return (
        <Container>
            <Header variant="h5" fontWeight="bold">New Transaction</Header>
            {/* Radio buttons for Income/Expense */}
            <RadioGroup 
                className="radio-group" 
                row 
                value={type} 
                onChange={(e) => setType(e.target.value)}
            >
                <FormControlLabel value="income" control={<Radio />} label="Income" />
                <FormControlLabel value="expense" control={<Radio />} label="Expense" />
            </RadioGroup>
            <TextField 
                value={text} 
                label="Enter Expense/Income" 
                onChange={(e) => setText(e.target.value)} 
                variant="outlined" 
                fullWidth 
            />
            <TextField 
                value={amount} 
                label="Enter Amount" 
                onChange={(e) => setAmount(e.target.value)} 
                variant="outlined" 
                fullWidth 
                type="number"
            />
            <TextField 
                value={date} 
                label="Select Date" 
                onChange={(e) => setDate(e.target.value)} 
                variant="outlined" 
                fullWidth 
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <StyledButton 
                variant="contained" 
                onClick={newTransaction} 
                disabled={!text || !amount || !date} /* Disable if any field is empty */
            >
                Add Transaction
            </StyledButton>
        </Container>
    );
}

export default NewTransaction;
