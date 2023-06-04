import { Box, Input, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import DashboardCard from "../components/card/DashboardCard";
import UserAvatar from "../components/UserAvatar";
import Footer from "../components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import { UserEvent } from "../containers/ProfileContainer/UserEvent";
import { UserProfile } from "../containers/ProfileContainer/UserProfile";
import { UserMembership } from "../containers/ProfileContainer/UserMembership";
import { UserSecurity } from "../containers/ProfileContainer/UserSecurity";

// const UserProfilePage = () => {
//   return (
//     <>
//       <Header />
//       <Box component="div" sx={{ display: "flex", paddingLeft: "10em" }}>
//         <DashboardCard />
//         <Box
//           component="div"
//           sx={{
//             width: "100%",
//           }}
//         >
//           <Box component="div" sx={{ marginLeft: "7.5em" }}>
//             <Box component="div" sx={{ marginBottom: "2.5em" }}>
//               <Typography variant="h5" color="#0e185f" fontWeight={700}>
//                 Event
//               </Typography>
//               <Typography variant="caption" color="#0e185f" fontSize="18px">
//                 Kelola event yang sudah kamu upload dan ikuti
//               </Typography>
//             </Box>
//             <Box
//               component="div"
//               sx={{
//                 width: 400,
//                 height: "auto",
//                 padding: "0.5em 2.5em 2.5em 2.5em",
//                 backgroundColor: "red",
//                 borderRadius: 5,
//               }}
//             >
//               <UserAvatar
//                 fullName="Jane Evelyn"
//                 institution="Universitas Bina Nusantara"
//               />
//               <Box component="div" sx={{ marginY: "1em" }}>
//                 <Typography variant="h5" color="#0e185f" fontWeight={600}>
//                   Personal Information
//                 </Typography>
//               </Box>
//               <Box component="div" sx={{ marginBottom: "1.5em" }}>
//                 <Typography variant="body1" color="#0e185f" fontWeight={500}>
//                   Full Name
//                 </Typography>
//                 <Input
//                   disableUnderline
//                   // fullWidth
//                   sx={{
//                     backgroundColor: "white",
//                     padding: "0.5em",
//                     alignItems: "center",
//                     borderRadius: 2,
//                     marginTop: "0.5em",
//                   }}
//                 ></Input>
//               </Box>
//               <Box component="div" sx={{ marginBottom: "0.5em" }}>
//                 <Typography variant="body1" color="#0e185f" fontWeight={500}>
//                   Username
//                 </Typography>
//                 <Input
//                   disableUnderline
//                   // fullWidth
//                   sx={{
//                     backgroundColor: "white",
//                     padding: "0.5em",
//                     alignItems: "center",
//                     borderRadius: 2,
//                     marginTop: "0.5em",
//                   }}
//                 ></Input>
//               </Box>
//               <Box component="div" sx={{ marginBottom: "0.5em" }}>
//                 <Typography variant="body1" color="#0e185f" fontWeight={500}>
//                   Email Address
//                 </Typography>
//                 <Input
//                   disableUnderline
//                   // fullWidth
//                   sx={{
//                     backgroundColor: "white",
//                     padding: "0.5em",
//                     alignItems: "center",
//                     borderRadius: 2,
//                     marginTop: "0.5em",
//                   }}
//                 ></Input>
//               </Box>
//               <Box component="div" sx={{ marginBottom: "0.5em" }}>
//                 <Typography variant="body1" color="#0e185f" fontWeight={500}>
//                   Password
//                 </Typography>
//                 <Input
//                   disableUnderline
//                   // fullWidth
//                   sx={{
//                     backgroundColor: "white",
//                     padding: "0.5em",
//                     alignItems: "center",
//                     borderRadius: 2,
//                     marginTop: "0.5em",
//                   }}
//                 ></Input>
//               </Box>
//               <Box component="div" sx={{ marginBottom: "0.5em" }}>
//                 <Typography variant="body1" color="#0e185f" fontWeight={500}>
//                   Confirm Password
//                 </Typography>
//                 <Input
//                   disableUnderline
//                   // fullWidth
//                   sx={{
//                     backgroundColor: "white",
//                     padding: "0.5em",
//                     alignItems: "center",
//                     borderRadius: 2,
//                     marginTop: "0.5em",
//                   }}
//                 ></Input>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//       <Footer />
//     </>
//   );
// };

const ProfilePage = ({ title, description }) => {
  const currentPath = useLocation().pathname;

  return (
    <>
      <Header />
      <Box component="div" sx={{ display: "flex", paddingLeft: "10em" }}>
        <DashboardCard />
        <Box component="div" sx={{ width: "100%" }}>
          <Box component="div" sx={{ marginLeft: "7.5em" }}>
            <Box component="div" sx={{ marginBottom: "2.5em" }}>
              <Typography variant="h5" color="#0e185f" fontWeight={700}>
                {title}
              </Typography>
              <Typography variant="caption" color="#0e185f" fontSize="18px">
                {description}
              </Typography>
            </Box>
          </Box>
          {currentPath === "/profile" && <UserProfile />}
          {currentPath === "/profile/event" && <UserEvent />}
          {currentPath === "/profile/membership" && <UserMembership />}
          {currentPath === "/profile/security" && <UserSecurity />}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProfilePage;
