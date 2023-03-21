export const calculateTransactionPoints = (data, scoreCalculationConfig) => data.map(transaction => {
    const { firstBreakpoint, secondBreakpoint, extraScoreMultiplier } = scoreCalculationConfig;
    let points = 0;
    const breakpointValue = transaction.amount - secondBreakpoint;

    if (breakpointValue > 0) {
        points = firstBreakpoint + breakpointValue * extraScoreMultiplier;
    }
    if (transaction.amount > firstBreakpoint && transaction.amount <= secondBreakpoint) {
        points = transaction.amount - firstBreakpoint;
    }
    return {
        ...transaction,
        points
    };
});
