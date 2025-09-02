import { useEffect, useState } from 'react';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { v4 as uuidv4 } from 'uuid';

const LuckyUUID = () => {
    const title = `今日のラッキーUUIDは、${uuidv4()}です。`
    const [url, setUrl] = useState("")

    useEffect(() => {
        setUrl(window.location.href)
    }, []);

    return (
        <>
            <p>{title}</p>

            <hr />

            <TwitterShareButton title={title} url={url}>
                <TwitterIcon size={32} round={true} className='m-2' />
            </TwitterShareButton>
        </>
    )
}

export default LuckyUUID;
