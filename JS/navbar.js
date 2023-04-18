$(document).ready(()=>{
  setTimeout(()=>{
    $('.sideNavShow').click(()=>{
        $('.fourthNav').css({transform:'translateX(0%)'})
    });
    
    $('.fourthNavClose i').click(()=>{
        $('.fourthNav').css({transform:'translateX(100%)'})
    
    })
  },500)
})