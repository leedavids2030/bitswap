import React from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie';
import { Heading, Text, BaseLayout } from 'uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import { useQueryParam, StringParam } from 'use-query-params';
import FarmStakingCard from './components/FarmStakingCard'
import rot13 from '../../utils/encode'
// import LotteryCard from './components/LotteryCard'
import { isAddress } from '../../utils/web3'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import CountDown from "./CountDown";

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/egg/peraLeft.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  height: 50px;
  flex-direction: column;
  margin: auto;
  margin-bottom: 100px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/left.svg'), url('/images/egg/peraLeft.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`



	
const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  const cookies = new Cookies();
  const [ref, setNum] = useQueryParam('ref', StringParam);

  if(ref) {
    if(isAddress(rot13(ref))) {
      cookies.set("ref", ref)
    }
  }

  return (
    <Page>
	<CountDown/>
      <Hero>
        <br /> <br />        <br /> <br />        <br /> <br />

        <Heading as="h1" size="xl" mb="24px" >
          {TranslateString(1, 'BITSEC')}
        </Heading>
        <Text style={{color:'orange', fontWeight:'bold'}}>{TranslateString(1, 'The Defi Revolution')}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
