// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FunToken is ERC20 {
    constructor()ERC20("FunToken","FUTO"){
        _mint(msg.sender, 100 * 10 ** decimals());
    } 

    function mint100Tokens() public {
        _mint(msg.sender, 100 * 10 ** decimals());
    }

    function burn100Tokens() public {
        _burn(msg.sender,100 * 10 ** decimals());
    }
}