import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinIcon,
    // PinterestIcon,
    // PinterestShareButton,
    TwitterIcon,
    TwitterShareButton,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton,
    EmailShareButton,
    EmailIcon,
    RedditIcon,
    RedditShareButton,
    // LivejournalIcon,
    // LivejournalShareButton,
    // PocketIcon,
    // PocketShareButton,
    // ViberIcon,
    // ViberShareButton,
    TumblrIcon,
    TumblrShareButton,
    // WeiboIcon,
    // WeiboShareButton,
    // LineIcon,
    // LineShareButton,
    // WorkplaceIcon,
    // WorkplaceShareButton,
    // VKIcon,
    // VKShareButton,
    // InstapaperIcon,
    // InstapaperShareButton,
} from "react-share";

const Share = ({ url, content, hashtag }) => {
    return (
        <div className="shared-icons">
            <FacebookShareButton url={url} quote={content} hashtag={hashtag}>
                <FacebookIcon />
            </FacebookShareButton>
            <WhatsappShareButton url={url} quote={content} hashtag={hashtag}>
                <WhatsappIcon />
            </WhatsappShareButton>
            <TwitterShareButton url={url} quote={content} hashtag={hashtag}>
                <TwitterIcon />
            </TwitterShareButton>
            <LinkedinShareButton url={url} quote={content} hashtag={hashtag}>
                <LinkedinIcon />
            </LinkedinShareButton>
            {/* <PinterestShareButton url={url} quote={content} hashtag={hashtag}>
        <PinterestIcon />
      </PinterestShareButton> */}
            <TelegramShareButton url={url} quote={content} hashtag={hashtag}>
                <TelegramIcon />
            </TelegramShareButton>
            <RedditShareButton url={url} quote={content} hashtag={hashtag}>
                <RedditIcon />
            </RedditShareButton>
            {/* <LivejournalShareButton  url={url} quote={content} hashtag={hashtag}>
        <LivejournalIcon />
      </LivejournalShareButton>
      <ViberShareButton  url={url} quote={content} hashtag={hashtag}>
        <ViberIcon/>
      </ViberShareButton>
      <PocketShareButton  url={url} quote={content} hashtag={hashtag}>
        <PocketIcon />
      </PocketShareButton> */}
            <EmailShareButton url={url} quote={content} hashtag={hashtag}>
                <EmailIcon />
            </EmailShareButton>
            <TumblrShareButton url={url} quote={content} hashtag={hashtag}>
                <TumblrIcon />
            </TumblrShareButton>
            {/* <WeiboShareButton url={url} quote={content} hashtag={hashtag}>
        <WeiboIcon />
      </WeiboShareButton>
      <LineShareButton url={url} quote={content} hashtag={hashtag}>
        <LineIcon />
      </LineShareButton>
      <WorkplaceShareButton url={url} quote={content} hashtag={hashtag}>
        <WorkplaceIcon/>
      </WorkplaceShareButton>
      <VKShareButton url={url} quote={content} hashtag={hashtag}>
        <VKIcon />
      </VKShareButton>
      <InstapaperShareButton url={url} quote={content} hashtag={hashtag}>
        <InstapaperIcon />
      </InstapaperShareButton> */}
        </div>
    );
};

export default Share;
