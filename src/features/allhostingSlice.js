import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";



/// creat  action 
   export const createhosting= createAsyncThunk("createhosting",async(data,{rejectWithValue})=>{
        const response=await fetch("https://www.admin.backend.crm.codeconnect.in/api/v1/add_hosting",{
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
   /////////  add Sms Package 
  export const addsmspack=createAsyncThunk("addsmspack",async(data,{rejectWithValue})=>{
    const response=await fetch("https://www.admin.backend.crm.codeconnect.in/api/v1/addsmspack",{
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
   })

    /////////  add Wtsp Package 
  export const addwtsppack=createAsyncThunk("addwtsppack",async(data,{rejectWithValue})=>{
    const response=await fetch("https://www.admin.backend.crm.codeconnect.in/api/v1/addwtsppack",{
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
   })


   // update 
   export const updateHosting= createAsyncThunk("updateHosting",async(data,{rejectWithValue})=>{
       
    const response=await fetch(`https://www.admin.backend.crm.codeconnect.in/api/v1/editHosting/${data._id}`,{
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
    const response=await fetch(`https://www.admin.backend.crm.codeconnect.in/api/v1/delete/${_id}`,{
           method:"DELETE"
    });
    try {
        const result=await response.json();
        return result;
    } catch (error) { 
       return rejectWithValue(error);
    }    
});
// Delete deleteSMSPACKAGE 
export const deleteSMSPACKAGE= createAsyncThunk("deleteSMSPACKAGE",async(_id,{rejectWithValue})=>{
    alert("sure for delete");
    const response=await fetch(`https://www.admin.backend.crm.codeconnect.in/api/v1/deleteSMSPACKAGE/${_id}`,{
           method:"DELETE"
    });
    try {
        const result=await response.json();
        return result;
    } catch (error) { 
       return rejectWithValue(error);
    }    
});

// Delete deleteWTSPPACKAGE 
export const deleteWTSPPACKAGE= createAsyncThunk("deleteWTSPPACKAGE",async(_id,{rejectWithValue})=>{
    alert("sure for delete");
    const response=await fetch(`https://www.admin.backend.crm.codeconnect.in/api/v1/deleteWTSPPACKAGE/${_id}`,{
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
         const response=await fetch("https://www.admin.backend.crm.codeconnect.in/api/v1/hosting");
         try {
             const result=await response.json();
            
             return result;
         } catch (error) { 
            return rejectWithValue(error);
         }
   })

   //////get app sms pack
   export const getALLSMSPACK=createAsyncThunk("getALLSMSPACK",async(args,{rejectWithValue})=>{
    const response=await fetch("https://www.admin.backend.crm.codeconnect.in/api/v1/getAllsmspack");
    try {
        const result=await response.json();
       
        return result;
    } catch (error) { 
       return rejectWithValue(error);
    }
   })

   //////get app sms pack
   export const getALLWTSPPACK=createAsyncThunk("getALLWTSPPACK",async(args,{rejectWithValue})=>{
    const response=await fetch("https://www.admin.backend.crm.codeconnect.in/api/v1/getAllwtsppack");
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
            SMSPAckage:[],
            WTSPPAckage:[],
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
              //  addsmspack
            [addsmspack.pending]:(state) =>{
                state.loading=true;
            },
            [addsmspack.fulfilled]:(state,action) =>{
                state.loading=false;
                state.SMSPAckage.push(action.payload.SmsPack1);
            },
            [addsmspack.rejected]:(state,action) =>{
                state.loading=false;
                state.SMSPAckage=action.payload;
            }, 

             //  addwtsppack
             [addwtsppack.pending]:(state) =>{
                state.loading=true;
            },
            [addwtsppack.fulfilled]:(state,action) =>{
                state.loading=false;
                state.SMSPAckage.push(action.payload.SmsPack1);
            },
            [addwtsppack.rejected]:(state,action) =>{
                state.loading=false;
                state.SMSPAckage=action.payload;
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

            // get All SMS Pack 
            [getALLSMSPACK.pending]:(state) =>{
                state.loading=true;
            },
            [getALLSMSPACK.fulfilled]:(state,action) =>{
                state.loading=false; 
                state.SMSPAckage=action.payload.SmsPack1; 
            },
            [getALLSMSPACK.rejected]:(state,action) =>{
                state.loading=false;
                state.SMSPAckage=action.payload;
            },

             // get All WTSP Pack 
             [getALLWTSPPACK.pending]:(state) =>{
                state.loading=true;
            },
            [getALLWTSPPACK.fulfilled]:(state,action) =>{
                state.loading=false; 
                state.WTSPPAckage=action.payload.SmsPack1; 
            },
            [getALLWTSPPACK.rejected]:(state,action) =>{
                state.loading=false;
                state.WTSPPAckage=action.payload;
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
            ////// delete deleteSMSPACKAGE
            [deleteSMSPACKAGE.pending]:(state) =>{
                state.loading=true;
            },
            [deleteSMSPACKAGE.fulfilled]:(state,action) =>{
                state.loading=false; 
                  const {_id} =action.payload.SMSPack1;  
                if(_id){
                    state.SMSPAckage=state.SMSPAckage.filter((ele)=>ele?._id!==_id);  
               }
              },
            [deleteSMSPACKAGE.rejected]:(state,action) =>{ 
                state.loading=false;
                state.SMSPAckage=action.payload;
            },
            
              ////// delete deleteWTSPPACKAGE
              [deleteWTSPPACKAGE.pending]:(state) =>{
                state.loading=true;
            },
            [deleteWTSPPACKAGE.fulfilled]:(state,action) =>{
                state.loading=false; 
                  const {_id} =action.payload.SMSPack1;  
                if(_id){
                    state.WTSPPAckage=state.WTSPPAckage.filter((ele)=>ele?._id!==_id);  
               }
              },
            [deleteWTSPPACKAGE.rejected]:(state,action) =>{ 
                state.loading=false;
                state.WTSPPAckage=action.payload;
            },
                

            },
})

export default  allhosting.reducer;
