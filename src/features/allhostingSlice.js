import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";



/// creat  action 
   export const createhosting= createAsyncThunk("createhosting",async(data,{rejectWithValue})=>{
        const response=await fetch("https://task-mernss.onrender.com/api/v1/add_hosting",{
               method:"POST",
               headers:{
                "Content-Type":"application/json",
               },
               body:JSON.stringify(data)
        });
        try {
            const result=await response.json();
            return result;
        } catch (error) {
           return rejectWithValue(error);
        }
              
   });

   // update 
   export const updateHosting= createAsyncThunk("updateHosting",async(data,{rejectWithValue})=>{
       
    const response=await fetch(`https://task-mernss.onrender.com/api/v1/editHosting/${data._id}`,{
           method:"PUT",
           headers:{
            "Content-Type":"application/json",
           },
           body:JSON.stringify(data)
    });
    try {
        const result=await response.json();
        return result;
    } catch (error) {
       return rejectWithValue(error);
    }
          
});
     


   // Delete Hosting 

   export const deleteHosting= createAsyncThunk("deleteHosting",async(_id,{rejectWithValue})=>{
    alert("sure for delete");
    const response=await fetch(`https://task-mernss.onrender.com/api/v1/delete/${_id}`,{
           method:"DELETE"
           
    });
    try {
        const result=await response.json();
          
        return result;
    } catch (error) { 
       return rejectWithValue(error);
    }    
          
});
   


   // show all data
   export const getAllHosting=createAsyncThunk("getAllHosting",async(args,{rejectWithValue})=>{
         const response=await fetch("https://task-mernss.onrender.com/api/v1/hosting");
         try {
             const result=await response.json();
            
             return result;
         } catch (error) { 
            return rejectWithValue(error);
         }
   })




export const allhosting=createSlice({
         name:"hostingDetails",
         initialState:{
            hostings:[],
            loading:false,  
            error:null,
         },
         extraReducers:{
           // create hosting
            [createhosting.pending]:(state) =>{
                state.loading=true;
            },
            [createhosting.fulfilled]:(state,action) =>{
                state.loading=false;
                state.hostings.push(action.payload);
            },
            [createhosting.rejected]:(state,action) =>{
                state.loading=false;
                state.hostings=action.payload;
            }, 
            //update 
           
            [updateHosting.pending]:(state) =>{
                state.loading=true;
            },
            [updateHosting.fulfilled]:(state,action) =>{
                state.loading=false;
                state.hostings=state.hostings.map((ele)=>
                  ele._id==action.payload._id?action.payload:ele
                );
              
            },
            [updateHosting.rejected]:(state,action) =>{
                state.loading=false;
                state.hostings=action.payload;
            }, 

            // get All Hosting 
            [getAllHosting.pending]:(state) =>{
                state.loading=true;
            },
            [getAllHosting.fulfilled]:(state,action) =>{
                state.loading=false; 
                state.hostings=action.payload; 
            },
            [getAllHosting.rejected]:(state,action) =>{
                state.loading=false;
                state.hostings=action.payload;
            },

            // Delete Single Hosting 
            [deleteHosting.pending]:(state) =>{
                state.loading=true;
            },
            [deleteHosting.fulfilled]:(state,action) =>{
                state.loading=false; 
                
                 const {_id} =action.payload.hosting;  
                if(_id){
                    state.hostings=state.hostings.filter((ele)=>ele._id!==_id);  
               }
              },
            [deleteHosting.rejected]:(state,action) =>{ 
                state.loading=false;
                state.hostings=action.payload;
            },
            
                

            },
})

export default  allhosting.reducer;