export default function search() {
    return (
      <div>
           <form>
               <div className="flex flex-col justify-center m-10">
                   <div className="flex justify-center m-5">
                       <label className="mr-[50px]"> Name </label>
                       <input type="text" className="rounded-lg bg-[#D9D9D9]"/>
                   </div>
                   <div className="flex justify-center m-5">
                       <label className="mr-[50px]"> Type </label>
                       <input type="text" className="rounded-lg bg-[#D9D9D9]"/>
                   </div>
                   <div className="flex justify-center m-5">
                       <label className="mr-[50px]"> ID </label>
                       <input type="text" className="rounded-lg bg-[#D9D9D9]"/>
                   </div>
                   <div className="flex justify-center m-5">
                       <label className="mr-[50px]"> Colour </label>
                       <input type="text" className="rounded-lg bg-[#D9D9D9]"/>
                   </div>
                   <div className="flex justify-center m-5">
                       <label className="mr-[50px]"> Available </label>
                   </div>
               </div>
           </form>
      </div>
    );
   }