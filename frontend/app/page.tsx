"use client"
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [deposit, setDeposit] = useState('');
  const [bonusType, setBonusType] = useState('fixed');
  const [bonus, setBonus] = useState('');
  const [total, setTotal] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/casino/bonus', {
        deposit_amount: parseFloat(deposit),
        bonusType: bonusType
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const { bonus_amount, total_amount } = response.data;
      setBonus(bonus_amount);
      setTotal(total_amount);
    } catch (error) {
      console.error("Error calculating bonus:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4 mb-4">
          <label>Deposit Amount</label>
          <input type="number" value={deposit} onChange={(e) => setDeposit(e.target.value)} required className="border-2 border-[#c7c7c7] rounded-md px-4 "/>
        </div>
        <div  className="flex flex-col space-y-4 mb-4">
          <label>Deposit Amount</label>
          <select value={bonusType} onChange={(e) => setBonusType(e.target.value)} className="border-2 border-[#c7c7c7] rounded-md px-4 ">
            <option value="fixed">Fixed</option>
            <option value="percentage">Percentage</option>
          </select>
        </div>
        <button type="submit" className="bg-[#0F5288] text-4 text-white py-3 px-6 rounded-md">Calculate</button>
      </form>
      {
        bonus && (
          <div>
            <p >Bonus Amount:${bonus}</p>
            <p >Total Amount:${total}</p>
          </div>
        )
      }
    </main>
  );
}
