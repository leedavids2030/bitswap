import React, { useState } from 'react'
import { Input, Heading, Button, ToastContainer } from 'uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import rot13 from '../../../utils/encode'

const StyleInput = styled(Input)`
    margin-top: 10px;
`
// https://testreferral.netlify.app
const ReferralLink = () => {
    const { account }: { account: string } = useWallet()
    const [toasts, setToasts] = useState([]);

    const handleClick = (description = "") => {
        const now = Date.now();
        const randomToast = {
        id: `id-${now}`,
        title: `Copied`,
        description,
        type: "success",
        };

        setToasts((prevToasts) => [randomToast, ...prevToasts]);
    };

    const handleRemove = (id: string) => {
        setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id));
    };

    return (
        <div>
            <Heading size="md">Your Referral Link</Heading>
            <StyleInput type="text" style={{background:'rgb(21, 21, 21)'}} scale="md" value={`https://bitswap.finance/?ref=${rot13(account)}`} readOnly />
            <CopyToClipboard text={`https://bitswap.finance/?ref=${rot13(account)}`} onCopy={()=> {handleClick()}}>
                <Button variant="primary" mt="8px">Copy</Button>
            </CopyToClipboard>
            <ToastContainer toasts={toasts} onRemove={handleRemove} />
        </div>
    )

}

export default ReferralLink