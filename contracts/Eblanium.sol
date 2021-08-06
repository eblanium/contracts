pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Eblanium is ERC20Burnable, AccessControl {

    constructor(address _admin, uint256 initialSupply)
    public
    ERC20("Eblanium", "EBL")
    AccessControl() {
        _setupRole(DEFAULT_ADMIN_ROLE, _admin);
        _mint(_admin, initialSupply * 10**18);
    }

    function changeAdmin(address _newAdmin) public {
        require(
            hasRole(DEFAULT_ADMIN_ROLE, _msgSender()),
            "changeAdmin: bad role"
        );
        _setupRole(DEFAULT_ADMIN_ROLE, _newAdmin);
        renounceRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    function mint(address _to, uint256 _amount) public {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "mint: bad role");
        _mint(_to, _amount);
    }
}
