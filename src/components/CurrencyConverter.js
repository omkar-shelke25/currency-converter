import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2); /* Gradient background */
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333; /* Dark text color */
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: #fff; /* White input background */
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: #fff; /* White select background */
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin: 20px 0;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Result = styled.h2`
  font-size: 22px;
  margin-top: 20px;
  color: #333; /* Dark text color */
`;

const ErrorMessage = styled.p`
  color: #ff4d4d; /* Red error text */
  font-size: 14px;
`;

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR'); // Default to INR
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = '98481ce2015cfe408f913508'; // Replace with your API key
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`;

  const handleConvert = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (data.result === 'success') {
        const rate = data.conversion_rates[toCurrency];
        setConvertedAmount((amount * rate).toFixed(2));
        setError(null);
      } else {
        setError('Failed to fetch conversion rates.');
      }
    } catch (error) {
      setError('An error occurred while fetching data.');
    }
  };

  return (
    <Container>
      <Title>Currency Converter</Title>
      <div>
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      <div>
        <Select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="INR">INR</option> {/* Added INR */}
        </Select>
      </div>
      <div>
        <Select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="INR">INR</option> {/* Added INR */}
        </Select>
      </div>
      <Button onClick={handleConvert}>Convert</Button>
      {convertedAmount !== null && (
        <Result>
          Converted Amount: {convertedAmount} {toCurrency}
        </Result>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default CurrencyConverter;