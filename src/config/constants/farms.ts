import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'BITSEC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xAe2CBa60446B9FD13FD6af4361Bb807EE996a47C',
    },
    tokenSymbol: 'BITSEC',
    tokenAddresses: {
      97: '',
      56: '0x95f1152ED8b63A0FDC7AF3DD83E120D0180152a8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'BITSEC-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x7E716e1495F85f0d19C391432D23214436d2857e',
    },
    tokenSymbol: 'BITSEC',
    tokenAddresses: {
      97: '',
      56: '0x95f1152ED8b63A0FDC7AF3DD83E120D0180152a8',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'BITSEC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc27a326600aa3c0AC630f909f79D6917de51158c',
    },
    tokenSymbol: 'BITSEC',
    tokenAddresses: {
      97: '',
      56: '0x95f1152ED8b63A0FDC7AF3DD83E120D0180152a8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BITSEC',
    lpAddresses: {
      97: '',
      56: '0xc27a326600aa3c0AC630f909f79D6917de51158c', // PERRA-BUSD LP
    },
    tokenSymbol: 'BITSEC',
    tokenAddresses: {
      97: '',
      56: '0x95f1152ED8b63A0FDC7AF3DD83E120D0180152a8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  
 
]

export default farms
