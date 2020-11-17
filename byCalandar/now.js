import calendar from './calendar.js'
Page({
  data: {
    current:1,
    calendar:'',
    swiperHeight:'',
    year:'',
    month:'',
  },
  onLoad(){
    this.initDate()
    wx.createSelectorQuery().select('#swiper').boundingClientRect((rect)=>{
      this.setData({swiperHeight:rect.height})
    }).exec()
  },
  chooseList(e){
    this.setData({'navBar.now':e.currentTarget.dataset.index})
  },
  initDate(){
    var date = new Date();
    this.setData({year:date.getFullYear(),month:date.getMonth()});
    calendar.getDate(this.data.year,this.data.month)
    this.setData({calendar:calendar.data})
  },
  lastMonth(){
    var year = this.data.year
    var month = this.data.month
    if(month === 0){
      month = 11
      --year 
    }
    else{
      --month 
    }
    this.setData({year,month});
    calendar.getDate(this.data.year,this.data.month)
    this.setData({calendar:calendar.data})
  },
  nextMonth(){
    var year = this.data.year
    var month = this.data.month
    if(month === 11){
      month = 0
      ++year 
    }
    else{
      ++month 
    }
    this.setData({year,month});
    calendar.getDate(this.data.year,this.data.month)
    this.setData({calendar:calendar.data})
  },
  chooseDate(e){
    console.log(e.currentTarget.dataset.index)
    this.setData({'choose.year':this.data.year,'choose.month':this.data.month,'choose.date':e.currentTarget.dataset.index})
  },
  calendarChange(e){
    if(this.data.current === 0&&e.detail.current === 1||this.data.current === 1&&e.detail.current === 2||this.data.current === 2&&e.detail.current === 0){
      this.nextMonth()
    }
    else{
      this.lastMonth()
    }
    wx.createSelectorQuery().select('#swiper').boundingClientRect((rect)=>{
      this.setData({swiperHeight:rect.height})
    }).exec()
    this.setData({current:e.detail.current})
  }
})