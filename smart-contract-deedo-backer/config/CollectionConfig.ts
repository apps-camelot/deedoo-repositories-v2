import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'DeeDooTeacherTest04',
  tokenName: 'DEEDOO TEACHER Test 4',
  tokenSymbol: 'DEEDOOT',
  hiddenMetadataUri: 'ipfs://QmRFqTMR6X58XtVSNUv2CerACnhXtZkqd6yX3pVWgbUeFn/hidden.json',
  maxSupply: 1000000,
  whitelistSale: {
    price: 0.0,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.0,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.0,
    maxMintAmountPerTx: 1,
  },
  contractAddress: '0x851A5A0340999e29f3a2452CF8B6e74168a015F9',
  marketplaceIdentifier: 'DeeDooTeacherTest04',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
