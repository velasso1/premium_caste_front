import { FC } from "react";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";

const PostInformation: FC = () => {
  return <ContentBlockLayout contentTitle="Информация о посте">1</ContentBlockLayout>;
};

export default PostInformation;

// {
//   "author_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "content": "string",
//   "excerpt": "string",
//   "featured_image_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "metadata": {
//     "additionalProp1": "string",
//     "additionalProp2": "string",
//     "additionalProp3": "string"
//   },
//   "published_at": "string",
//   "slug": "string",
//   "status": "draft",
//   "title": "string"
// }
