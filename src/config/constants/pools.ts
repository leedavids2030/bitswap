import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  // {
  //   sousId: 0,
  //   tokenName: 'CAKE',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   contractAddress: {
  //     97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
  //     56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://pancakeswap.finance/',
  //   harvest: true,
  //   tokenPerBlock: '10',
  //   sortOrder: 1,
  //   isFinished: false,
  //   tokenDecimals: 18,
  // },

  {
    sousId: 300,
    tokenName: 'BITSEC #1',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x95f1152ED8b63A0FDC7AF3DD83E120D0180152a8',
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xB00689E74684A560Cd2Ad7e4E99A63ce7E53D96D', // old 0x03640111D81e52e266Aee3e95808d2AACE69E1ed
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '0.001585489599188229',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 301,
    tokenName: 'BITSEC #2',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x95f1152ED8b63A0FDC7AF3DD83E120D0180152a8',
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0x26F2004806B1F0c4Db1185Adb01A89DCf1cb06A1', // old 0x03640111D81e52e266Aee3e95808d2AACE69E1ed
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '0.001585489599188229',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
       sousId: 302,
    tokenName: 'BITSEC #3',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x95f1152ED8b63A0FDC7AF3DD83E120D0180152a8',
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xbC4109d19e46f6447e9Af8496D37865571b642D4', // old 0x03640111D81e52e266Aee3e95808d2AACE69E1ed
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '0.001585489599188229',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
   },
    {
       sousId: 303,
    tokenName: 'BITSEC #4',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x95f1152ED8b63A0FDC7AF3DD83E120D0180152a8',
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0x3bD6566CD59889bbdcCB5aD2A3D974d2C387423c',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: ' 0.012',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
   },
  {
    
      sousId: 304,
    tokenName: 'BITSEC #5',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x95f1152ED8b63A0FDC7AF3DD83E120D0180152a8',
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xc82518035A62037AC003E3BCa5Da85E593fab173',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: ' 0.012',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
   },
]

export default pools
