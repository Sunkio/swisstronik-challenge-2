require("dotenv").config({ path: ".env" });

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const hre = require("hardhat");
const { encryptDataField, decryptNodeResponse } = require("@swisstronik/swisstronik.js");

// Function to send a shielded query using the provided provider, destination, and data
const sendShieldedQuery = async (provider, destination, data) => {
  // Get the RPC link from the network configuration
  const rpcLink = hre.network.config.url;

  // Encrypt the call data using the SwisstronikJS function
  const [encryptedData, usedEncryptionKey] = await encryptDataField(rpcLink, data);

  // Execute the call/query using the provider
  const response = await provider.call({
    to: destination,
    data: encryptedData,
  });

  // Decrypt the call result using the SwisstronikJS function
  return await decryptNodeResponse(rpcLink, response, usedEncryptionKey);
};

async function main(contractAddi) {
  // Address of the deployed contract
  //const replace_contractAddress = CONTRACT_ADDRESS;

  // Get the signer (your account)
  const [signer] = await hre.ethers.getSigners();

  // Create a contract instance
  const replace_contractFactory = await hre.ethers.getContractFactory("FunToken");
  const contract = replace_contractFactory.attach(CONTRACT_ADDRESS);

  // Send a shielded query to retrieve balance data from the contract
  const replace_functionName = "balanceOf";
  const replace_functionArgs = [PUBLIC_KEY];
  const responseMessage = await sendShieldedQuery(signer.provider, CONTRACT_ADDRESS, contract.interface.encodeFunctionData(replace_functionName, replace_functionArgs));

  // Decode the Uint8Array response into a readable string
  console.log(`Current FUTO-Balance for address ${PUBLIC_KEY}: `, contract.interface.decodeFunctionResult(replace_functionName, responseMessage)[0]);
}

// Using async/await pattern to handle errors properly
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});