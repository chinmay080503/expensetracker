import { Card, CardContent, styled, Typography, Box } from '@mui/material';

const Container = styled(Box)`
    display: flex;
    justify-content: space-between;
    gap: 20px; /* Add space between cards */
    padding: 20px; /* Add padding around the container */
`;

const StyledCard = styled(Card)`
    flex: 1; /* Make cards flexible and responsive */
    border-radius: 12px; /* Rounded corners for a modern look */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`;

const CardContentStyled = styled(CardContent)`
    display: flex;
    flex-direction: column;
    align-items: center; /* Center content horizontally */
    justify-content: center; /* Center content vertically */
    padding: 20px; /* Add padding inside the card */
    text-align: center; /* Center text horizontally */
`;

const AmountTypography = styled(Typography)`
    font-size: 2rem; /* Larger font size for amounts */
    font-weight: bold;
    margin-top: 8px; /* Add space above the amount */
`;

const ExpenseCard = ({ transactions }) => {
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return (
        <Container>
            <StyledCard>
                <CardContentStyled>
                    <Typography variant="h6" color="textSecondary">Income</Typography>
                    <AmountTypography style={{ color: '#4CAF50' }}>+₹{income}</AmountTypography>
                </CardContentStyled>
            </StyledCard>
            <StyledCard>
                <CardContentStyled>
                    <Typography variant="h6" color="textSecondary">Expense</Typography>
                    <AmountTypography style={{ color: '#F44336' }}>-₹{expense}</AmountTypography>
                </CardContentStyled>
            </StyledCard>
        </Container>
    );
};

export default ExpenseCard;
