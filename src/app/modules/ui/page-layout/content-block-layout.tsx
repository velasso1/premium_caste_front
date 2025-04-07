import { FC } from "react";

interface IContentBlockLayoutProps {
  children: React.ReactElement;
  contentTitle: string;
}

const ContentBlockLayout: FC<IContentBlockLayoutProps> = ({ children, contentTitle }) => {
  return (
    <div className="content-block-layout">
      <div className="content-block-layout__title">{contentTitle}</div>
      <div className="content-block-layout__content">{children}</div>
    </div>
  );
};

export default ContentBlockLayout;
