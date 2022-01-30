// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import the openzepplin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TicketItem is ERC721{
    constructor()ERC721 ("TicketItem", "TIM"){
        _mint(msg.sender, 1);
    }
    //Contract Address
    //0x591e8A07903E7b0f38AD1C971C755211d564377D

    //Etherscan
    //https://rinkeby.etherscan.io/address/0x591e8A07903E7b0f38AD1C971C755211d564377D
}