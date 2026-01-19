import { motion } from 'framer-motion'

const tipsData = [
  {
    number: 0,
    title: 'The Zero Hero',
    emoji: '🦸',
    tip: 'Any number times 0 is always 0!',
    example: '5 × 0 = 0, 100 × 0 = 0',
    color: '#FF6B6B'
  },
  {
    number: 1,
    title: 'Identity Hero',
    emoji: '🎯',
    tip: 'Any number times 1 stays the same.',
    example: '7 × 1 = 7, 999 × 1 = 999',
    color: '#4ECDC4'
  },
  {
    number: 2,
    title: 'Double Up!',
    emoji: '✌️',
    tip: 'Multiplying by 2 is the same as doubling the number.',
    example: '3 × 2 = 6 (3 + 3), 8 × 2 = 16 (8 + 8)',
    color: '#45B7D1'
  },
  {
    number: 5,
    title: 'The Five Trick',
    emoji: '🖐️',
    tip: 'Numbers times 5 always end in 0 or 5!',
    example: '3 × 5 = 15, 6 × 5 = 30, 8 × 5 = 40',
    color: '#96CEB4'
  },
  {
    number: 9,
    title: 'The Nine Pattern',
    emoji: '🎪',
    tip: 'For 1-9 × 9, the first digit goes up by 1, second digit goes down by 1!',
    example: '1×9=09, 2×9=18, 3×9=27, 4×9=36, 5×9=45',
    color: '#FFEAA7'
  },
  {
    number: 10,
    title: 'Add a Zero!',
    emoji: '🔟',
    tip: 'Just add a zero to the end of any number!',
    example: '4 × 10 = 40, 7 × 10 = 70, 12 × 10 = 120',
    color: '#DDA0DD'
  },
  {
    number: 11,
    title: 'Double Digits',
    emoji: '👯',
    tip: 'For 1-9 × 11, just write the number twice!',
    example: '3 × 11 = 33, 6 × 11 = 66, 9 × 11 = 99',
    color: '#98D8C8'
  },
  {
    number: 12,
    title: 'Dozens!',
    emoji: '🥚',
    tip: '12 is one dozen. Think of groups of 12!',
    example: '3 × 12 = 36 (3 dozens = 36 eggs)',
    color: '#F7DC6F'
  }
]

function TipsSection() {
  return (
    <div className="tips-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="tips-title"
      >
        💡 Amazing Multiplication Tricks! 💡
      </motion.h2>

      <div className="tips-grid">
        {tipsData.map((tip, index) => (
          <motion.div
            key={tip.number}
            className="tip-card"
            style={{ borderColor: tip.color, backgroundColor: `${tip.color}20` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <motion.div
              className="tip-emoji"
              style={{ backgroundColor: tip.color }}
              whileHover={{ rotate: 10 }}
            >
              {tip.emoji}
            </motion.div>
            <h3 style={{ color: tip.color }}>
              {tip.number !== 0 ? `×${tip.number} ` : ''}{tip.title}
            </h3>
            <p className="tip-text">{tip.tip}</p>
            <motion.div
              className="tip-example"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <strong>Example:</strong> {tip.example}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="tip-message"
      >
        <h4>🌟 Practice Makes Perfect! 🌟</h4>
        <p>Click on cells in the multiplication table to practice. The more you click, the more you learn!</p>
      </motion.div>
    </div>
  )
}

export default TipsSection
