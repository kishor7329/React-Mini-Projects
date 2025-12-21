import React, { useState, useEffect } from 'react'
import DropDown from './DropDown'
import { IoMdSwap } from "react-icons/io";
const CurrencyConverter = () => {
    const [currencies,setCurrencies]=useState([]);
    const [amount,setAmount]=useState(1);
    const [fromCurrency,setFromCurrency]=useState('USD');
    const [toCurrency,setToCurrency]=useState('INR');
    const [convertedAmount,setConvertedAmount]=useState(null);
    const [converting,setConverting]=useState(false);
    const [favorites,setFavorites]=useState(JSON.parse(localStorage.getItem("favorites1"))||["INR","EUR"]);
    //https://api.frankfurter.app/currencies
    const fetchCurrencies=async()=>{
        try{
            const res=await fetch(`https://api.frankfurter.app/currencies`);
            const data=await res.json();
            setCurrencies(Object.keys(data))
        }catch(error){
            console.error("Error fetching currencies",error);
        }
    };
    useEffect(()=>{
        fetchCurrencies();
    },[]);

const handleFavorite=(currency)=>{
    let updatedFavorites;
    if(favorites.includes(currency)){
        updatedFavorites = favorites.filter((fav) => fav !== currency);
    } else {
        updatedFavorites = [...favorites, currency];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites1', JSON.stringify(updatedFavorites));
}
const convertCurrency=async()=>{
    if(!amount)return;
    setConverting(true);
 try{
            const res=await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
            const data=await res.json();
            setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);
        }catch(error){
            console.error("Error fetching currencies",error);
        }finally{
            setConverting(false);
        }
}


const swapCurrency=()=>{
    const temp=fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
}
    //https://api.frankfurter.app/latest?amount=1&from=USD&to=INR
  return (
    <div className='max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md'>
        <h2 className='mb-5 text-4xl font-semibold text-gray-700'>
          currencyconverter
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-end '>
            <DropDown currencies={currencies} title='From:' 
            currency={fromCurrency}
             handleFavorite={handleFavorite}
             setCurrency={setFromCurrency}
                favorites={favorites}
                />

             <div className='flex justify-center -mb-5 sm:mb-0'>
                <button onClick={swapCurrency} className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
                    <IoMdSwap className="text-4xl text-gray-700" />
                </button>
             </div>


            <DropDown currencies={currencies} title='To:'
            currency={toCurrency}
            handleFavorite={handleFavorite}
            setCurrency={setToCurrency}
                favorites={favorites}
            />
        </div>
        <div className='mt-4'>
            <label htmlFor="amount" className='block text-sm font-medium text-grey-700'>Amount:</label>
            <input  value={amount} onChange={(e)=>setAmount(e.target.value)}  type="number" className='w-full border border-amber-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-6' />
        </div>
         <div className="flex justify-end mt-6">
        <button
          onClick={convertCurrency}
          className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
          ${converting ? "animate-pulse" : ""}`}
        >
          Convert
        </button>
      </div>
     { convertedAmount &&(<div className='mt-4 text-lg font-medium text-right text-green-500'> Converted Amount: {convertedAmount} 

     </div>)}
    </div>
  )
}

export default CurrencyConverter
