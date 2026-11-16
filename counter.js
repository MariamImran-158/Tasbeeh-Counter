 
let count = 0;
    function addOne() {
      count  += 1;
      showCount();
    }

    function resetCount() {
      count = 0;
      showCount();
    }

    function showCount() {
       document.getElementById("count").innerText=count;
       
    }
    function undoCount(){
        count-=1;
        showCount();
    }