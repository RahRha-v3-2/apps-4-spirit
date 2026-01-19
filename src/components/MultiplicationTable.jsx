import { motion } from 'framer-motion'

const colors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
  '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F',
  '#BB8FCE', '#85C1E9', '#F8B500', '#00CED1'
]

const getCellColor = (row, col) => {
  const index = (row + col) % colors.length
  return colors[index]
}

function MultiplicationTable({ onCellClick, completedCells, selectedNumber }) {
  const tableSize = 12

  return (
    <div className="multiplication-table">
      <div className="table-header">
        <div className="corner-cell"></div>
        {Array.from({ length: tableSize }, (_, i) => (
          <motion.div
            key={i}
            className="header-cell"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            {i + 1}
          </motion.div>
        ))}
      </div>

      {Array.from({ length: tableSize }, (_, row) => (
        <div key={row} className="table-row">
          <motion.div
            className="row-header"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: row * 0.05 }}
          >
            {row + 1}
          </motion.div>
          {Array.from({ length: tableSize }, (_, col) => {
            const result = (row + 1) * (col + 1)
            const cellKey = `${row + 1}-${col + 1}`
            const isCompleted = completedCells.has(cellKey)
            const isSelected = selectedNumber?.row === row + 1 && selectedNumber?.col === col + 1

            return (
              <motion.div
                key={col}
                className={`table-cell ${isCompleted ? 'completed' : ''} ${isSelected ? 'selected' : ''}`}
                style={{ backgroundColor: getCellColor(row, col) }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (row * tableSize + col) * 0.02 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCellClick(row + 1, col + 1, result)}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isCompleted ? 1 : 0 }}
                  transition={{ delay: 0.1 }}
                  className="cell-result"
                >
                  {result}
                </motion.span>
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isCompleted ? 0 : 1 }}
                  className="cell-question"
                >
                  ?
                </motion.span>
              </motion.div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default MultiplicationTable
