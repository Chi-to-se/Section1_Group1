export default function search() {
    return (
      <div className="flex flex-col items-center m-10">
           <form className="flex flex-col space-y-10">
               {[
                   {label: "Name"},
                   {label: "Type"},
                   {label: "ID"},
                   {label: "Colour"},
                   {label: "Brand"}
               ].map(({ label }) =>
                       (
                           <div key={label} className="flex items-center">
                               <label className="mr-4 w-24 font-bold"> {label} </label>
                               <input type="text" className="w-64 p-2 rounded-md bg-[#D9D9D9]"/>
                           </div>
                       )
                   )
               }
               <div className="flex items-center">
                   <label className="mr-40 font-bold"> Avialible </label>
                   <input type="checkbox" className="mr-16 w-6 h-6"/>                   
               </div>
   
           </form>
           <button className="mt-10 bg-[#D9D9D9] rounded-lg text-white text-lg w-32 p-2" > Search </button>
      </div>
    );
   }




// export default function Search() {
//     return (
//       <div className="flex flex-col items-center m-10">
//         <form className="flex flex-col space-y-10">
//           {[
//             { label: "Name" },
//             { label: "Type" },
//             { label: "ID" },
//             { label: "Colour" },
//             { label: "Brand" }
//           ].map(({ label }) => (
//             <div key={label} className="flex items-center">
//               <label className="mr-4 w-24 font-bold">{label}</label>
//               <input
//                 type="text"
//                 className="rounded-md bg-[#D9D9D9] w-64 p-2" // Adjust width and padding
//               />
//             </div>
//           ))}
//           <div className="flex items-center">
//             <label className="mr-32 font-bold">Available</label>
//             <input type="checkbox" className="mr-16 w-6 h-6" />
//           </div>
//         </form>
//         <button className="mt-10 bg-[#D9D9D9] rounded-lg text-black text-lg">
//           Search
//         </button>
//       </div>
//     );
//   }
  




















































































// export default function search() {
//  return (
//    <div>
//         <form>
//             <div className="flex flex-col justify-center m-10">
//                 <div className="flex justify-center m-5">
//                     <label className="mr-[50px]"> Name </label>
//                     <input type="text" className="rounded-lg bg-[#D9D9D9]"/>
//                 </div>
//                 <div className="flex justify-center m-5">
//                     <label className="mr-[50px]"> Type </label>
//                     <input type="text" className="rounded-lg bg-[#D9D9D9]"/>
//                 </div>
//                 <div className="flex justify-center m-5">
//                     <label className="mr-[50px]"> ID </label>
//                     <input type="text" className="rounded-lg bg-[#D9D9D9]"/>
//                 </div>
//                 <div className="flex justify-center m-5">
//                     <label className="mr-[50px]"> Colour </label>
//                     <input type="text" className="rounded-lg bg-[#D9D9D9]"/>
//                 </div>
//                 <div className="flex justify-center m-5">
//                     <label className="mr-[50px]"> Available </label>
//                 </div>
//             </div>
//         </form>
//    </div>
//  );
// }


//22






















































































// export default function Search() {
//     return (
//       <div className="flex flex-col items-center m-10">
//         <form className="flex flex-col space-y-5">
//           {[
//             { label: 'Name', placeholder: 'Enter name' },
//             { label: 'Type', placeholder: 'Enter type' },
//             { label: 'ID', placeholder: 'Enter ID' },
//             { label: 'Colour', placeholder: 'Enter colour' },
//           ].map(({ label, placeholder }) => (
//             <div key={label} className="flex items-center">
//               <label className="mr-4 w-24">{label}</label>
//               <input type="text" placeholder={placeholder} className="rounded-lg bg-[#D9D9D9] p-2" />
//             </div>
//           ))}
//           <div className="flex items-center">
//             <label className="mr-4">Available</label>
//             <input type="checkbox" />
//           </div>
//         </form>
//       </div>
//     );
//   }






// export default function Search() {
//     return (
//       <div className="m-10">
//         <form>
//           <div className="flex flex-col space-y-5">
//             <div className="flex items-center">
//               <label className="mr-2">Name:</label>
//               <input type="text" className="border rounded" />
//             </div>
//             <div className="flex items-center">
//               <label className="mr-2">Email:</label>
//               <input type="text" className="border rounded" />
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }



  

//   export default function Search() {
//     return (
//       <div className="flex flex-col items-center m-10">
//         <form className="flex flex-col space-y-5">
//           {[
//             { label: 'Name', placeholder: 'Enter name' },
//             { label: 'Type', placeholder: 'Enter type' },
//             { label: 'ID', placeholder: 'Enter ID' },
//             { label: 'Colour', placeholder: 'Enter colour' },
//           ].map(({ label, placeholder }) => (
//             <div key={label} className="flex items-center">
//               <label className="mr-4">{label}</label>
//               <input type="text" placeholder={placeholder} className="rounded-lg bg-[#D9D9D9] p-2" />
//             </div>
//           ))}
//           <div className="flex items-center">
//             <label className="mr-4">Available</label>
//             <input type="checkbox" />
//           </div>
//         </form>
//       </div>
//     );
//   }