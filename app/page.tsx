"use client"

import { useState } from "react"
import { Pill, X, Twitter, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const PumpFunLogo = () => (
  <Link href="https://pump.fun" target="_blank" rel="noopener noreferrer">
    <div className="text-white font-bold text-xl hover:text-green-300 transition-colors cursor-pointer">
      Pump<span className="text-green-300">Fun</span>
    </div>
  </Link>
)

const RoadmapItem = ({
  phase,
  title,
  description,
  completed,
}: { phase: string; title: string; description: string; completed: boolean }) => (
  <div className="flex items-start space-x-4">
    <div
      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${completed ? "bg-green-500" : "bg-gray-300"}`}
    >
      {completed ? (
        <CheckCircle2 className="w-6 h-6 text-white" />
      ) : (
        <span className="text-white font-bold">{phase}</span>
      )}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-green-800">{title}</h3>
      <p className="text-green-700">{description}</p>
    </div>
  </div>
)

export default function Home() {
  const [clicks, setClicks] = useState(0)
  const [balance, setBalance] = useState(0)
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false)
  const [withdrawAddress, setWithdrawAddress] = useState("")
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  // This is a placeholder contract address. In a real application, you would use the actual contract address.
  const contractAddress = "SOON"

  const handleClick = () => {
    setClicks(clicks + 1)
    setBalance(balance + 0.00000001)
  }

  const openWithdrawModal = () => {
    setIsWithdrawModalOpen(true)
  }

  const closeWithdrawModal = () => {
    setIsWithdrawModalOpen(false)
    setWithdrawAddress("")
  }

  const handleWithdraw = () => {
    if (withdrawAddress.trim() === "") {
      alert("Please enter a valid crypto address.")
      return
    }
    // Simulating a successful withdrawal
    setIsWithdrawModalOpen(false)
    setShowSuccessMessage(true)
    setBalance(0) // Reset balance after withdrawal

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-green-100 flex flex-col">
      {/* Header with PumpFun Logo and Social Media Icons */}
      <header className="bg-green-600 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <PumpFunLogo />
          <div className="flex gap-4 items-center">
            <Link href="https://t.me/pumpfunclicker" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 240 240"
                className="w-6 h-6 hover:opacity-80 transition-opacity"
              >
                <defs>
                  <linearGradient id="a" x1=".667" x2=".417" y1=".167" y2=".75">
                    <stop offset="0" stopColor="#37aee2" />
                    <stop offset="1" stopColor="#1e96c8" />
                  </linearGradient>
                </defs>
                <circle cx="120" cy="120" r="120" fill="url(#a)" />
                <path fill="#c8daea" d="M98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80" />
                <path fill="#a9c9dd" d="M98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035" />
                <path
                  fill="#f6fbfe"
                  d="M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258"
                />
              </svg>
            </Link>
            <Link href="https://x.com/PumpFun33851" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 hover:text-green-300 transition-colors" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-between p-8">
        <div className="w-full max-w-2xl">
          <div className="bg-green-200 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-2">Contract Address</h2>
            <div className="flex items-center justify-between bg-white rounded p-2">
              <p className="text-green-600 font-mono text-center w-full">{contractAddress}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Welcome to PumpFun Clicker!</h2>
            <p className="text-green-700 mb-4">
              PumpFun Clicker is an exciting web3 game where you can earn Solana (SOL) by simply clicking a pill! Each
              click rewards you with 0.00000001 SOL. Accumulate your earnings and withdraw them to your Solana wallet
              whenever you're ready.
            </p>
            <p className="text-green-700">
              Start clicking, watch your balance grow, and enjoy the thrill of earning crypto with every tap!
            </p>
          </div>
        </div>

        <div className="text-center flex-grow flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-green-800 mb-8">PumpFun Clicker</h1>
          <button
            onClick={handleClick}
            className="transition-transform duration-100 active:scale-95 mb-4"
            aria-label="Click to earn Solana"
          >
            <Pill className="w-32 h-32 text-green-500 hover:text-green-600" />
          </button>
          <p className="mt-4 text-xl text-green-700">Clicks: {clicks}</p>
          <p className="mt-2 text-xl text-green-700">Balance: {balance.toFixed(8)} SOL</p>
          <button
            onClick={openWithdrawModal}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Withdraw
          </button>
        </div>

        {/* Roadmap Section */}
        <div className="w-full max-w-2xl mt-16">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Roadmap</h2>
          <div className="space-y-8">
            <RoadmapItem
              phase="1"
              title="Launch PumpFun Clicker"
              description="Release the initial version of PumpFun Clicker with basic clicking and earning functionality."
              completed={true}
            />
            <RoadmapItem
              phase="2"
              title="Implement Solana Integration"
              description="Integrate with Solana blockchain for real cryptocurrency transactions and withdrawals."
              completed={false}
            />
            <RoadmapItem
              phase="3"
              title="Introduce Upgrades and Power-ups"
              description="Add various upgrades and power-ups to enhance the clicking experience and increase earnings."
              completed={false}
            />
            <RoadmapItem
              phase="4"
              title="Mobile App Development"
              description="Develop and release mobile versions of PumpFun Clicker for iOS and Android platforms."
              completed={false}
            />
            <RoadmapItem
              phase="5"
              title="Community Features"
              description="Implement social features, leaderboards, and community challenges to increase engagement."
              completed={false}
            />
          </div>
        </div>

        {isWithdrawModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-green-800">Withdraw SOL</h2>
                <button onClick={closeWithdrawModal} className="text-green-600 hover:text-green-800">
                  <X size={24} />
                </button>
              </div>
              <p className="mb-4 text-green-700">Enter your Solana wallet address:</p>
              <input
                type="text"
                value={withdrawAddress}
                onChange={(e) => setWithdrawAddress(e.target.value)}
                className="w-full p-2 border border-green-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Solana wallet address"
              />
              <button
                onClick={handleWithdraw}
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Confirm Withdrawal
              </button>
            </div>
          </div>
        )}

        {showSuccessMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full text-center">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Withdrawal Successful!</h2>
              <p className="text-green-700">Your SOL has been sent to your wallet.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

