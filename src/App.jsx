import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MultiplicationTable from './components/MultiplicationTable'
import TipsSection from './components/TipsSection'
import './App.css'

function App() {
  const [selectedNumber, setSelectedNumber] = useState(null)
  const [showTips, setShowTips] = useState(false)
  const [completedCells, setCompletedCells] = useState(new Set())

  const handleCellClick = (row, col, result) => {
    const cellKey = `${row}-${col}`
    setCompletedCells(prev => new Set([...prev, cellKey]))
    setSelectedNumber({ row, col, result })
  }

  const resetProgress = () => {
    setCompletedCells(new Set())
    setSelectedNumber(null)
  }

  return (
    <div className="app-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="header"
      >
        <h1>🌟 Multiplication Adventure 🌟</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowTips(!showTips)}
          className="tips-toggle"
        >
          {showTips ? '📊 Back to Table' : '💡 Tips & Tricks'}
        </motion.button>
      </motion.div>

      <AnimatePresence mode="wait">
        {!showTips ? (
          <motion.div
            key="table"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="main-content"
          >
            <div className="stats">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="progress-card"
              >
                <h3>Progress</h3>
                <p>{completedCells.size} / 144 cells mastered!</p>
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${(completedCells.size / 144) * 100}%` }}
                />
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetProgress}
                className="reset-btn"
              >
                🔄 Reset
              </motion.button>
            </div>

            <MultiplicationTable
              onCellClick={handleCellClick}
              completedCells={completedCells}
              selectedNumber={selectedNumber}
            />

            {selectedNumber && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="result-display"
              >
                <h2>🎉 Great Job!</h2>
                <p className="equation">
                  {selectedNumber.row} × {selectedNumber.col} = <span className="result">{selectedNumber.result}</span>
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedNumber(null)}
                  className="close-btn"
                >
                  Continue
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="tips"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="tips-container"
          >
            <TipsSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
