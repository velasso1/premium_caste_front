import { FC } from "react";

interface IContentBlockLayoutProps {
  children: React.ReactElement;
  contentTitle: string;
  customClassName?: string;
}

const ContentBlockLayout: FC<IContentBlockLayoutProps> = ({ children, contentTitle, customClassName }) => {
  return (
    <div className={`content-block-layout ${customClassName}`}>
      <div className="content-block-layout__title">{contentTitle}</div>
      <div className="content-block-layout__content">{children}</div>
    </div>
  );
};

export default ContentBlockLayout;
