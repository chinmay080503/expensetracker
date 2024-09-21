import { useState } from 'react';
import { Typography, List, Divider, styled, Box, TextField } from '@mui/material';
import Transaction from './Transaction';

const Component = styled(Box)`
    & > h5 {
        margin-bottom: 10px;
        position: sticky;
        top: 0;
        background-color: #FFFFFF;
        z-index: 1;
        padding: 16px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add subtle shadow for depth */
    }

    /* Style the container */
    height: 80%; 
    overflow-y: auto; 
    padding: 20px; /* Add padding to the container */
    background-color: #F9FAFC; /* Light background for better readability */
    border-radius: 12px; /* Rounded corners for a modern look */
`;

const SearchField = styled(TextField)`
    margin-bottom: 20px;
    .MuiOutlinedInput-root {
        border-radius: 8px; /* Rounded input field */
    }
`;

const EmptyMessage = styled(Typography)`
    padding: 20px;
    text-align: center;
    color: #B0B0B0; /* Light gray color for the empty message */
`;

const Transactions = ({ transactions, deleteTransaction }) => {
    const [searchQuery, setSearchQuery] = useState('');
    
    const filteredTransactions = transactions.filter(transaction => 
        transaction.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Component>
            <Typography variant="h5" fontWeight="bold">Transaction History</Typography>
            <Divider style={{ width: '100%', marginBottom: '20px' }} />
            <SearchField
                label="Search Transactions"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <List>
                {filteredTransactions.length > 0 ? (
                    filteredTransactions.map(transaction => (
                        <Transaction
                            transaction={transaction}
                            deleteTransaction={deleteTransaction}
                            key={transaction.id}
                        />
                    ))
                ) : (
                    <EmptyMessage variant="subtitle1">No transactions found.</EmptyMessage>
                )}
            </List>
        </Component>
    );
};

export default Transactions;
