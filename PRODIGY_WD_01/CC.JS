async function convert() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        const exchangeRate = data.rates[toCurrency];
        
        if (exchangeRate) {
            const convertedAmount = (amount * exchangeRate).toFixed(2);
            document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            document.getElementById("result").innerText = "Failed to retrieve exchange rate.";
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("result").innerText = "An error occurred. Please try again later.";
    }
}
