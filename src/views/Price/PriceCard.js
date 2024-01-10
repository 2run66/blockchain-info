import React, { useState, useEffect } from 'react';

function PriceCard() {
    // State to store BTCUSDT price and symbol
    const [price, setPrice] = useState(null);
    const [symbol, setSymbol] = useState('BTC'); // Initial symbol is BTC

    useEffect(() => {
        // Replace 'yourWebSocketURL' with the actual WebSocket URL provided by your CEX
        const socket = new WebSocket('wss://wbs.mexc.com/ws');

        // Event listener for when the connection is established
        socket.onopen = () => {
            console.log('WebSocket connection opened');

            // Send the subscription message
            const subscriptionMessage = {
                method: 'SUBSCRIPTION',
                params: [`spot@public.miniTicker.v3.api@${symbol}USDT@UTC+3`],
                id: 1, // Set a unique identifier for the subscription
            };

            socket.send(JSON.stringify(subscriptionMessage));
        };

        // Event listener for receiving messages from the WebSocket
        socket.onmessage = (event) => {
            // Parse the received JSON data
            const data = JSON.parse(event.data);
            // Check if the received data contains BTCUSDT price
            if (data && data.d && data.d.p) {
                // Update the state with the new BTCUSDT price
                setPrice(data.d.p);
            }
        };

        // Event listener for handling errors
        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        // Event listener for when the connection is closed
        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        // Clean up the WebSocket connection when the component is unmounted
        return () => {
            socket.close();
        };
    }, [symbol]);

    // Change symbol every 10 seconds
    useEffect(() => {
        const symbols = ['BTC', 'ETH', 'AVAX'];
        const intervalId = setInterval(() => {
            const nextSymbol = symbols[(symbols.indexOf(symbol) + 1) % symbols.length];
            setSymbol(nextSymbol);
        }, 5000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, [symbol]);

    return (
        <div className={"priceCard"}>
            {price !== null && (
                <div>
                    <h2>{`${symbol}: ${price}$`}</h2>
                </div>
            )}
        </div>
    );
}

export default PriceCard;
