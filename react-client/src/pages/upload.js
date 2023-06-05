
import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react';


const Upload=()=>{

    const editor = useRef(null);
    const [content ,setContent] = useState('');
    const[catogries,setCatogries] = useState([]);

    return(<>
     <div className ="grid grid-cols-3 ml-3 gap-2 mt-5">
        <div className ="col-span-2  h-full pl-2 bg-base-200">
            <div>
                <div className="text-2xl mr-[30rem] mt-2 text-base-500">
                    Add new post
                </div>
            </div>
            <div className="mt-4 flex">
                <input className="w-[41rem] h-[6vh] " placeholder="Enter your Title"/>
            </div>
            <div >
                <div className="btn btn-active mt-3   mr-[20rem]">
                    add media 
                </div>
                   
          
               <div>

               <img  src='./avatar.jpg' className='h-[250px] w-[250px]  mt-2 '/>
               </div>
            </div>
            
            <div className=' mt-[.5rem] mr-2'>
                <JoditEditor
                ref={editor}
                value={content}
                onChange={newContent =>setContent(newContent)}
                />
            </div>
        </div>
        <div className="bg-base-100    mr-4">
            <div className='bg-base-200 grid place-items-center pr-[3rem]   h-[20rem] w-250px'>

            <div>
                <div className='text-xl font-medium '>
                add catogory
                </div>
               <div className='grid grid cols-4 gap-4'>
               <div className='btn btn-sky-50'>
                    sport
                </div>
                <div className='btn btn-sky-50'>
                    movies 
                </div>
                <div className='btn btn-sky-50'>
                    Bussinuss
                </div>

               </div>
                <div className='btn btn-error ml-6 mt-2 '>
                    Post 
                </div>
            </div>
            </div>

        </div>
 
     </div>
    
    </>
    )

}

export default Upload;