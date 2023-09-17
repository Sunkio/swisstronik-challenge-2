# FunToken (FUTO) - ERC-20 Token - Swisstronik Challenge 2 via LearnWeb3
This mini-project was created for the Swisstronik Challenge 2 at LearnWeb3. The task was to create and deploy an ERC20 contract, and mint at least 100 tokens using Hardhat.

You can find the contract that's been deployed for the challenge [here](https://explorer-evm.testnet.swisstronik.com/address/0x66F0eeb6d7777B231A6fD0Fdfbf24362D774D40d).

FunToken (FUTO) is a simple Swisstronik-based ERC-20 token that you can use as a starting point for your own token projects. This README provides step-by-step instructions on how to deploy and interact with your own FunToken contract on the Swisstronik testnet using Hardhat.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Interacting with FunToken](#interacting-with-funtoken)
    - [Checking Token Balance](#checking-token-balance)
    - [Minting Tokens](#minting-tokens)
    - [Burning Tokens](#burning-tokens)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Prerequisites
Before you begin, make sure you have the following prerequisites:

- [Node.js](https://nodejs.org/) installed (version 14.x or later). This project was built using Node.js v20.5.1. If you use [NVM](https://github.com/nvm-sh/nvm), you can run `nvm use` to switch to this version.
- [Hardhat](https://hardhat.org/) installed:  `npm install -g hardhat`
- A crypto wallet (e.g. MetaMask) with testnet SWTR for transactions. You can get these for free  via [Swisstronik's testnet faucet](https://faucet.testnet.swisstronik.com/). 

## Project Structure<a name="project-structure"></a>

The project includes the following files:

- **FunToken.sol**: The Solidity contract for FunToken. It mints 100 initial tokens to your address.
- **deploy.js**: Script to deploy the FunToken contract.
- **balanceof.js**: Script to check your FunToken balance.
- **mint.js**: Script to mint 100 tokens to your address.
- **burn.js**: Script to burn 100 tokens from your address.
- **hardhat.config.js**: Configuration file for Hardhat.

## Deployment

Follow these steps to deploy FunToken on a testnet:

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) and then clone this repository:
   ```
   git clone https://github.com/<your username>/swisstronik-challenge-2
   ```

2. Move into the project directory:
   ```
   cd swisstronik-challenge-2
   ```

3. Install the required packages:
   ```
   npm ci 
   ```

4. Set up your environment variables by creating a `.env` file with the following content:

   ```plaintext
   PRIVATE_KEY=YourPrivateKey
   CONTRACT_ADDRESS=YourContractAddress
   PUBLIC_KEY=YourPublicKey
   ```
   You can simply rename the `.env.example` file in the root directory of your project.


5. Replace `YourPrivateKey` with your Ethereum wallet's private key, `YourContractAddress` with your contract address (once deployed), and `YourPublicKey` with your Ethereum address.


    **Important**: Do not commit your private key to the repository. Make sure that `.env` is added to your `.gitignore` file - if it's not present, add it before staging files. You are responsible for keeping your private key secure!


6. Deploy the FunToken contract by running the following command:

   ```bash
   npx hardhat run scripts/deploy.js --network swisstronik
   ```

   This command will deploy the contract to the Swisstronik testnet. Make sure to copy/paste the contract address to your .env file after deployment.

## Interacting with FunToken

### Checking Token Balance

To check your FunToken balance, use the following command:

```bash
npx hardhat run scripts/balanceof.js --network swisstronik
```

This will display your current FUTO balance for the specified Ethereum address.

### Minting Tokens

To mint 100 FunTokens to your address, run the following command:

```bash
npx hardhat run scripts/mint.js --network swisstronik
```

This will initiate a transaction to mint 100 tokens to your address.

### Burning Tokens

To burn 100 FunTokens from your address, run the following command:

```bash
npx hardhat run scripts/burn.js --network swisstronik
```

This will initiate a transaction to burn 100 tokens from your address.

## Resources
- Swisstronik: https://swisstronik.com/
- Swisstronik Testnet Faucet: https://faucet.testnet.swisstronik.com/
- Swisstronik Testnet Block-Explorer: https://explorer-evm.testnet.swisstronik.com/
- Openzeppelin:https://openzeppelin.com
- LearnWeb3: https://learnweb3.io/

## Contributing
Contributions are always welcome! If you'd like to contribute to this project or have any suggestions, feel free to create a new issue or submit a pull request. Please check the [Code of Conduct](./CODE_OF_CONDUCT.md) first.

To submit a pull request, follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Create a new Pull Request

## License

This project is open-source and available under the [MIT License](./LICENSE.md).

## Support
If you have any questions or need help getting started, please open an issue in the repository or contact me on Twitter: @tanja_codes