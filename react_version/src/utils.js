export const formatDollars = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
}).format;
