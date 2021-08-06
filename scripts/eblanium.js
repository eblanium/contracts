const hre = require("hardhat");

async function main() {
  const Eblanium = await hre.ethers.getContractFactory("Eblanium");
  const admin = await hre.ethers.getSigner()
  const ebl = await Eblanium.deploy(admin.address, 21000000);

  await ebl.deployed();

  console.log("Eblanium deployed to:", ebl.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
