import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'TEST-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x9421af1104a4F18342AC3C24e1A155e4A88785eF',
    },
    tokenSymbol: 'TEST',
    tokenAddresses: {
      97: '',
      56: '0x0eD53Ad552AFE696Fdd14497D2F54Bc998Fe757e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'TEST-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x561E39c98c4209e5671caaD566C5ee3b21c2e7ab',
    },
    tokenSymbol: 'TEST',
    tokenAddresses: {
      97: '',
      56: '0x0eD53Ad552AFE696Fdd14497D2F54Bc998Fe757e',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'TEST',
    lpAddresses: {
      97: '',
      56: '0x9421af1104a4F18342AC3C24e1A155e4A88785eF', // PIG-BUSD LP
    },
    tokenSymbol: 'TEST',
    tokenAddresses: {
      97: '',
      56: '0x0eD53Ad552AFE696Fdd14497D2F54Bc998Fe757e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 12,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc11c20cc11f8a7405aee07093290d4a7fb3722b3', // PIG-BUSD LP (BUSD-BUSD will ignore)
  //   },
  //   tokenSymbol: 'BUSD',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 13,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
  //   },
  //   tokenSymbol: 'WBNB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
 
]

export default farms
