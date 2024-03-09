const FORMAT_CURRENCY = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
});

const FormatCurrency = (number) => {
    return FORMAT_CURRENCY.format(number);
};

export default FormatCurrency;
