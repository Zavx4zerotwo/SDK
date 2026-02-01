import { Agent } from "./agent"
import { createDataProof } from "./data"
import { createTransaction, verifyTransaction } from "./transaction"

// Create agents
const agentA = new Agent("agent-A")
const agentB = new Agent("agent-B")

console.log("Agent A:", agentA.publicKey)
console.log("Agent B:", agentB.publicKey)

// Agent A generates data
const data = { temperature: 72.4 }
const proof = createDataProof(agentA.id, data)
console.log("Data Proof:", proof)

// Agent A sends transaction to Agent B
const tx = createTransaction(
  agentA.id,
  agentB.id,
  proof,
  agentA.secretKey
)

// Agent B verifies transaction
const valid = verifyTransaction(tx, agentA.publicKey)
console.log("Transaction valid:", valid)
