import { Typography, styled, Box } from '@mui/material';

const BalanceContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center; /* Center-align the content */
    padding: 20px; /* Add padding around the container */
    border-radius: 12px; /* Rounded corners for a modern look */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    background-color: #FFFFFF; /* White background for contrast */
`;

const BalanceHeader = styled(Typography)`
    font-size: 1.5rem; /* Font size for the header */
    margin-bottom: 8px; /* Space below the header */
    color: #333; /* Darker text color for contrast */
`;

const BalanceAmount = styled(Typography)`
    font-size: 2.5rem; /* Larger font size for the amount */
    font-weight: bold;
    color: #1E88E5; /* A professional shade of blue */
`;

const Balance = ({ transactions }) => {
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((total, item) => (total += item), 0).toFixed(2);

    return (
        <BalanceContainer>
            <BalanceHeader>Your Current Balance</BalanceHeader>
            <BalanceAmount>₹{total}</BalanceAmount>
        </BalanceContainer>
    );
};

export default Balance;
