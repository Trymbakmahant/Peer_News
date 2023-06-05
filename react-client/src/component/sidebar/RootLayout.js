

import NewSidebar from "./NewSidebar";
function RootLayout({children }) {
    return(
        <>
        <div className="flex gap-5">
        {/* <Sidebar/> */}
        <NewSidebar/>
        <main className="max-w-5xl flex-1 bg-base-200 mx-auto py-4">
            {children}
        </main>
        </div> 
        </>
    )
    

}

export default RootLayout;

