import DOMPurify from "dompurify";

const htmlViewer = ({ html }: { html: string }) => {
  const cleanHtml = DOMPurify.sanitize(html);

  return { __html: cleanHtml };
};

export default htmlViewer;
