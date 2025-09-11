import DOMPurify from "dompurify";

const htmlViewer = (html: string) => {
  const cleanHtml = DOMPurify.sanitize(html);

  return cleanHtml;
};

export default htmlViewer;
