import { MenuEntry } from 'uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://dex.bitswap.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://dex.bitswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'FarmIcon',
    href: '/pools',
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: '/staking',
  },
  {
    label: 'Referral',
    icon: 'GroupsIcon',
    href: '/referrals',
  },
  // {
  //   label: 'Referrals',
  //   icon: 'PoolIcon3',
  //   href: '/referrals',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0x1590b659D48717F541A19534d3571573eA7A49A5',
  //     },
  //     {
  //       label: 'AstroTools',
  //       href: 'https://app.astrotools.io/pancake-pair-explorer/0x1590b659D48717F541A19534d3571573eA7A49A5',
  //     },
	//   {
  //       label: 'Chart',
  //       href: 'https://goswapp-bsc.web.app/0xc11c20cc11f8a7405aee07093290d4a7fb3722b3',
  //     },
  //   ],
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/Pig-Finance',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://pig-finance.gitbook.io/pig-finance/',
  //     },
  //   ],
  // },
  // {
  //   label: 'Audit',
  //   icon: 'AuditIcon',
  //   href: 'https://pig-finance.gitbook.io/pig-finance/security/audit',
  // },
  // {
  //   label: 'Roadmap',
  //   icon: 'NftIcon',
  //   href: 'https://pig-finance.gitbook.io/pig-finance/roadmap',
  // },
  // {
  //   label: 'Hybrid Burning Mechanism',
  //   icon: 'IfoIcon',
  //   href: 'https://pig-finance.gitbook.io/pig-finance/tokenomics/hybrid-burning-mechanism',
  // },
  // {
  //   label: 'Forked from audited Goosedefi',
  //   icon: 'GooseIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
]

export default config
