# Контракты Eblanium 

## Основной контракт
Саморегулирующийся контрак в разработке, в данный момент доступен стандартный ERC20Burnable контракт для продажи и депозитов (стейкинга).

[``contracts/Eblanium.sol``](contracts/Eblanium.sol)

### Публикация
[``scripts/eblanium.js``](scripts/eblanium.js)
```bash
npx hardhat run scripts/eblanium.js --network [network_id]
```

## Разработка
Используется фреймворк [hardhat](https://hardhat.org/) с тестированием связкой [ethers.js и Waffle](https://hardhat.org/guides/waffle-testing.html).

### Запуск локальной сети
```
npx hardhat node
```

### Тесты
[``test/Eblanium.js``](test/Eblanium.js)
```bash
npx hardhat test
```