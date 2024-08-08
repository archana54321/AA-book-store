// import React from 'react'
// import { Sidebar } from "flowbite-react";
// import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
// import { BiBuoy } from "react-icons/bi";


// const SideBar = () => {
//   return (
    
//       <Sidebar aria-label="Sidebar with content separator example">
//         <Sidebar aria-label="Sidebar with logo branding example">
//       <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="Flowbite logo">
//         Flowbite
//       </Sidebar.Logo>
        
//       <Sidebar.Items>
//         <Sidebar.ItemGroup>
//           <Sidebar.Item href="#" icon={HiChartPie}>
//             Dashboard
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={HiViewBoards}>
//             Kanban
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={HiInbox}>
//             Inbox
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={HiUser}>
//             Users
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={HiShoppingBag}>
//             Products
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={HiArrowSmRight}>
//             Sign In
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={HiTable}>
//             Sign Up
//           </Sidebar.Item>
//         </Sidebar.ItemGroup>
//         <Sidebar.ItemGroup>
//           <Sidebar.Item href="#" icon={HiChartPie}>
//             Upgrade to Pro
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={HiViewBoards}>
//             Documentation
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={BiBuoy}>
//             Help
//           </Sidebar.Item>
//         </Sidebar.ItemGroup>
//       </Sidebar.Items>
//     </Sidebar>
    

  
//   )
// }

// export default SideBar

// import React from 'react';
// import { Sidebar } from "flowbite-react";
// import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
// import { BiBuoy } from "react-icons/bi";
// import img from '../../src/assets/profile.jpg'

// const SideBar = () => {
//   return (
//     <div>
   
//        <Sidebar aria-label="Sidebar with content separator example" className='hidden md:block'>
//         <Sidebar.Logo
//           href="/"
//           img={ img}
//           className='w-10 h-10 rounded-full'
//           imgAlt="Flowbite logo"
//         >
//           <p>
//             {user?.displayName || "Demo User" }
//           </p>
//         </Sidebar.Logo>
//         <Sidebar.Items>
//           <Sidebar.ItemGroup>
//             <Sidebar.Item
//               href="/admin/dashboard"
//               icon={HiChartPie}>
//               <p>
//                 Dashboard
//               </p>
//             </Sidebar.Item>
//             <Sidebar.Item
//               href="/admin/dashboard/upload"
//               icon={HiOutlineCloudUpload}
//             >
//               <p>
//                 Upload Book
//               </p>
//             </Sidebar.Item>

//             <Sidebar.Item
//               href="/admin/dashboard/manage"
//               icon={HiInbox}
//             >
//               <p>
//                 ManageBooks
//               </p>
//             </Sidebar.Item>
//             <Sidebar.Item
//               href="#"
//               icon={HiUser}
//             >
//               <p>
//                 Users
//               </p>
//             </Sidebar.Item>
//             <Sidebar.Item
//               href="#"
//               icon={HiShoppingBag}
//             >
//               <p>
//                 Products
//               </p>
//             </Sidebar.Item>
//             <Sidebar.Item
//               href="/login"
//               icon={HiArrowSmRight}
//             >
//               <p>
//                 Sign In
//               </p>
//             </Sidebar.Item>
//             <Sidebar.Item
//               href="/logout"
//               icon={HiTable}
//             >
//               <p>
//                 Log out
//               </p>
//             </Sidebar.Item>
//           </Sidebar.ItemGroup>
//           <Sidebar.ItemGroup>
//             <Sidebar.Item
//               href="#"
//               icon={HiChartPie}
//             >
//               <p>
//                 Upgrade to Pro
//               </p>
//             </Sidebar.Item>
//             <Sidebar.Item
//               href="#"
//               icon={HiViewBoards}
//             >
//               <p>
//                 Documentation
//               </p>
//             </Sidebar.Item>
//             <Sidebar.Item
//               href="#"
//               icon={HiSupport}
//             >
//               <p>
//                 Help
//               </p>
//             </Sidebar.Item>
//           </Sidebar.ItemGroup>
//         </Sidebar.Items>
//       </Sidebar>
//       <div className='md:hidden'>
//           <MobileDashboard/>
//       </div>
//     </div>
//   )
//   }


// export default SideBar
import React from 'react';
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiSupport,HiTable, HiUser, HiViewBoards, HiCloudUpload } from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";


const SideBar = () => {
  return (
    <div>
   
       <Sidebar >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="/admin/dashboard"
              icon={HiChartPie}>
              <p>
                Dashboard
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/upload"
              icon={HiCloudUpload}
            >
              <p>
                Upload Book
              </p>
            </Sidebar.Item>

            <Sidebar.Item
              href="/admin/dashboard/manage"
              icon={HiInbox}
            >
              <p>
                ManageBooks
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiUser}
            >
              
              <p>
                Products
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/login"
              icon={HiArrowSmRight}
            >
              <p>
                Sign In
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/logout"
              icon={HiTable}
            >
              <p>
                Log out
              </p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="#"
              icon={HiChartPie}
            >
              
              <p>
                Help
              </p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <div className='md:hidden'>
       
      </div>
    </div>
  )
}

export default SideBar;
