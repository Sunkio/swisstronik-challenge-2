require("dotenv").config({ path: ".env" });
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const hre = require("hardhat");
const { encryptDataField, decryptNodeResponse } = require("@swisstronik/swisstronik.js");

// Function to send a shielded transaction using the provided signer, destination, data, and value
const sendShieldedTransaction = async (signer, destination, data, value) => {
  // Get the RPC link from the network configuration
  const rpcLink = hre.network.config.url;

  // Encrypt transaction data
  const [encryptedData] = await encryptDataField(rpcLink, data);

  // Construct and sign transaction with encrypted data
  return await signer.sendTransaction({
    from: signer.address,
    to: destination,
    data: encryptedData,
    value,
  });
};

async function main() {
  // Get the signer (your account)
  const [signer] = await hre.ethers.getSigners();

  // Create a contract instance
  const contractFactory = await hre.ethers.getContractFactory("FunToken");
  const contract = contractFactory.attach(CONTRACT_ADDRESS);

  // Send a shielded transaction to mint 100 tokens in the contract
  const functionName = "mint100Tokens";
  const mint100TokensTx = await sendShieldedTransaction(signer, CONTRACT_ADDRESS, contract.interface.encodeFunctionData(functionName), 0);

  await mint100TokensTx.wait();

  // It should return a TransactionReceipt object
  console.log("Transaction Receipt: ", mint100TokensTx);
}

// Using async/await pattern to handle errors properly
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});