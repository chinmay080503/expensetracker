import { ListItemText, ListItem, styled, ListItemIcon, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ListItemStyled = styled(ListItem)`
    display: flex;
    justify-content: space-between; /* Space between items and date */
    align-items: center;
    margin-top: 10px;
    border: 1px solid #F6F6F6;
    border-radius: 8px;
    background-color: ${({ color }) => color};
    color: #fff;
    padding: 16px;
    position: relative;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const CustomDeleteIcon = styled(DeleteIcon)`
    cursor: pointer;
    color: #fff;
`;

const TransactionDate = styled(Typography)`
    color: #fff;
    font-size: 0.875rem; /* Smaller font size for date */
`;

const Transaction = ({ transaction, deleteTransaction }) => {
    const sign = transaction.amount >= 0 ? '₹' : '-₹';
    const amount = sign + Math.abs(transaction.amount);
    const color = transaction.amount >= 0 ? '#4CAF50' : '#F44336'; // Green for income, red for expense

    return (
        <ListItemStyled color={color}>
            <ListItemIcon>
                <CustomDeleteIcon onClick={() => deleteTransaction(transaction.id)} />
            </ListItemIcon>
            <Box flex="1">
                <ListItemText primary={transaction.text} />
                <TransactionDate>{new Date(transaction.date).toLocaleDateString()}</TransactionDate>
            </Box>
            <ListItemText primary={amount} />
        </ListItemStyled>
    );
};

export default Transaction;
