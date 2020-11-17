export default {
  data:{
    weekArray:['周一','周二','周三','周四','周五','周六','周日'],
    array:[],
  },
  getDate(year,month){
    var date = new Date()
    var startDay = new Date(year,month,1).getDay();
    var length = new Date(year,month,-1).getDate()+1;
    const now ={'year':date.getFullYear(),'month':date.getMonth(),'date':date.getDate()}
    var array = []
    for(let i=0;i<length;i++){
      if(year === now.year && month === now.month){
        if(i === now.date){
          array.push({date:i,today:true,choose:false,event:[]})
        }
        else{
          array.push({date:i,today:false,choose:false,event:[]})
        }
      }
      else{
        array.push({date:i,today:false,choose:false,event:[]})
      }
      
    }
    if(startDay){
      for(let i=1;i<startDay;i++){
        array.unshift('')
      }
    }
    else{
      for(let i=1;i<7;i++){
        array.unshift('')
      }
    }
    this.data.array = array
  },

}