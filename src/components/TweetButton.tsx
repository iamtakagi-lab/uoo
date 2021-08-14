import React from "react";

export const TweetButton: React.FC<{text: string, url: string}> = ({text, url}) => (
    <>
       <a href="https://twitter.com/share" className="twitter-share-button" data-text={text} data-url={url}>Tweet</a>
    </>
)