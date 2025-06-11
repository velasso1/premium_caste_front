import { FC } from "react";

interface IContentBlockLayoutProps {
  children: string | React.ReactElement | React.ReactElement[];
  contentTitle?: string;
  customClassName?: string;
}

const ContentBlockLayout: FC<IContentBlockLayoutProps> = ({ children, contentTitle, customClassName }) => {
  return (
    <div className={`${customClassName ?? ""} content-block-layout`}>
      {contentTitle ? <div className="content-block-layout__title">{contentTitle}</div> : null}
      <div className={`content-block-layout__content`}>{children}</div>
    </div>
  );
};

export default ContentBlockLayout;
