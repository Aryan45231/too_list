const local_st_data=JSON.parse(localStorage.getItem("tasks"))
if(local_st_data!=null){
    local_st_data.forEach((ele,i)=>{
        const task=  document.createElement("li")
        task.id=`t${i}`
        task.className="task_itms"
        task.innerHTML=`
        <h4 id="${i}"  class="${ele.task_checked}" >
        ${ele.task}
       </h4>
       <div class="task_options">
           <input type="checkbox" ${ele.checked}  onclick="task_done( ${i})" class="task_checked">
           <h5 onclick="editTask(${i})"> 
            edit
           </h5>
           <h5 onclick="delete_data(${i}) ">
               X
             </h5>  
       </div>
       `
       document.getElementById("task").appendChild(task)
    })
}


const add_to_loack_storage=(ele)=>{
    let data=JSON.parse(localStorage.getItem("tasks"))
     if(data==null)
       {
        data=[]
       }
       const d={
         task:ele,
         checked: "unckecked",
         task_checked:"unckecked"
       }
       data.push(d)
      localStorage.setItem("tasks",JSON.stringify(data))
}
const send=(e)=>{
   
    if(event.keyCode==13)
    {   
let bool=true
            for(k=0;k<e.value.length;k++){
                if(e.value[k]!=" ")
                 {
                    bool=false
                 }
            }
  

      if(bool==true){
        if( e.value.length==0 || e.value[0]==" "  ) 
        {
         alert("opps pleas add data")
         
        }
      }
        else{
            add_to_loack_storage(e.value)
            
            e.reset=true
           
        }
        location.reload()   
    }
       
}
const atstart=(e)=>{
    if(e.value[0]==" "){
        e.value=""
    
    }
   
}
const editTask=(ind)=>{
    let data=JSON.parse(localStorage.getItem("tasks"))
    const edited_data=prompt("enter the updated task",data[ind].task)
    if(  edited_data[0]==" " || edited_data=="") {
        alert("plase try again")
        return
    }
    
    data[ind].task=edited_data
    data[ind].checked="unckecked"
    data[ind].task_checked="unchecked"
    localStorage.setItem("tasks",JSON.stringify(data))
    location.reload()
    
    
}

const delete_data=(e)=>{
    let data=JSON.parse(localStorage.getItem("tasks"))
     if(data!=null){
     data.splice(e,1)
     localStorage.setItem("tasks",JSON.stringify(data))
     location.reload()
     }
}

const task_done=(i)=>{
  const data=JSON.parse(localStorage.getItem("tasks"))
  console.log(data[i].checked)
  if(data[i].checked=="unckecked"){
    data[i].checked= "checked"
    data[i].task_checked="checked"
  }else{
    data[i].checked="unckecked"
    document.getElementById(`${i}`).style.textDecoration="none"
    data[i].task_checked="unchecked"

  }

  localStorage.setItem("tasks",JSON.stringify(data))
  location.reload()


}