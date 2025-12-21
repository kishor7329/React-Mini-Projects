import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const DropDown = ({
    currencies = [],
    currency,
    setCurrency,
    favorites = [],
    handleFavorite,
    title = ""
}) => {
    const isFavorite = favorites.includes(currency);
    
    const sortedCurrencies = [...new Set([...favorites, ...(currencies || [])])];

    return (
        <div>
            <label className='block text-sm font-small text-gray-800 mb-1'>
                {title}
            </label>
            <div className='flex items-center gap-2'>
                <select 
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)} 
                    className='flex-1 p-2 border text-sm border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
                >
                    {sortedCurrencies.map((curr) => (
                        <option key={curr} value={curr}>
                            {favorites.includes(curr) ? `⭐ ${curr}` : curr}
                        </option>
                    ))}
                </select>
                <button 
                    type="button"
                    onClick={() => handleFavorite(currency)} 
                    className='p-2 text-sm text-yellow-600 hover:text-yellow-600 cursor-pointer'
                >
                    {isFavorite ? <FaStar /> : <CiStar />}
                </button>
            </div>
        </div>
    );
};

export default DropDown;

 
