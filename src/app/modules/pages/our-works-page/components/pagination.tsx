// import { FC } from "react";

// import Button from "#ui/button/button.tsx";

// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

// interface IPaginationMenuProps {}

// const PaginationMenu: FC<IPaginationMenuProps> = () => {
//   return (
//     <>
//       <Stack spacing={2}>
//         <Pagination
//           count={5}
//           variant="outlined"
//           shape="rounded"
//           size="large"
//           sx={{
//             "& .MuiPaginationItem-root": {
//               color: "white", // светлые цифры
//               borderColor: "#ff5100ff", // светлая обводка
//               borderRadius: "8px",
//               transition: "0.3s",
//               "&:hover": {
//                 backgroundColor: "#ff510028",
//                 borderRadius: "10px",
//               },
//               "&.Mui-selected": {
//                 backgroundColor: "#ff510059",
//                 color: "white",
//               },
//             },
//           }}
//         />
//       </Stack>
//       <Button
//         buttonText="Загрузить еще"
//         onClickAction={() => setPagination({ ...pagination, perPage: pagination.perPage + 25 })}
//         buttonStyle="OUTLINED"
//         buttonType={getGalleries.status === "pending" ? "LOADING" : undefined}
//         disabled={getGalleries.status === "pending" || pagination.perPage === 100}
//       />
//       <Button buttonText="Наверх" onClickAction={() => handleScroll()} buttonStyle="OUTLINED" />
//     </>
//   );
// };

// export default Pagination;
