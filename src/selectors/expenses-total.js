
export default (expenses) => {
    return expenses.reduce((accum, cur) => accum + cur.amount, 0)
};