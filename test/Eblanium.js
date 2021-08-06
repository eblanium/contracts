const { expect } = require("chai");

describe("Eblanium", function () {
    it("Should return Eblanium deployed", async function () {
        const Eblanium = await ethers.getContractFactory("Eblanium");
        const admin = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';
        const ebl = await Eblanium.deploy(admin, 21000000);
        await ebl.deployed();

        expect(await ebl.balanceOf(admin)).to.be.equal('21000000000000000000000000')

        expect(await ebl.address).to.equal('0x5FbDB2315678afecb367f032d93F642f64180aa3');
    });

    it("Should not allow minting", async function () {
        const [admin, user, user2] = await ethers.getSigners();
        const Eblanium = await ethers.getContractFactory("Eblanium");
        const ebl = await Eblanium.deploy(admin.address, 21000000);
        await ebl.deployed();

        const connected = await ebl.connect(user)
        expect(connected.mint(user2.address, 100)).to.be.revertedWith('mint: bad role');
    });

    it("Should transfer", async function () {
        const [admin, user, user2] = await ethers.getSigners();
        const Eblanium = await ethers.getContractFactory("Eblanium");
        const ebl = await Eblanium.deploy(admin.address, 21000000);
        await ebl.deployed();

        const transfer = await ebl.transfer(user.address, '1000')
        await transfer.wait();

        expect(await ebl.balanceOf(user.address)).to.be.equal('1000')
    });

    it("Should not transfer", async function () {
        const [admin, user, user2] = await ethers.getSigners();
        const Eblanium = await ethers.getContractFactory("Eblanium");
        const ebl = await Eblanium.deploy(admin.address, 21000000);
        await ebl.deployed();

        const connected = await ebl.connect(user);

        expect(connected.transfer(user2.address, '1000')).to.be.revertedWith('ERC20: transfer amount exceeds balance');
    });
});