let enterBill = document.querySelector("#actualBill")
generate = document.querySelector(".generate")
let bill = 0

let tipAmount = 0

let percentage = document.querySelectorAll(".tipperc")
percentage.forEach(element => {
    element.addEventListener("click", () => {
        console.log(element.value)
        tipAmount = element.value
        percentage.forEach(nav => {
            nav.classList.remove("tip-button-active");
        })
        element.classList.add("tip-button-active")
    });
})

const count = document.querySelector('#count');
const btns = document.querySelectorAll('.increase');
const btn2 = document.querySelectorAll('.decrease');


let num = 0;

btns.forEach((increase) => {
    increase.addEventListener('click',(e) => {
        const styles = e.currentTarget.classList

        if(('increase')){
            num ++ ;
        }
        count.textContent = num;
    })
})
btn2.forEach((decrease) => {
    decrease.addEventListener('click',(e) => {
        const styles = e.currentTarget.classList

        if(('decrease')){
            num -- ;
        } if(num <= 0) {
         alert("Enter Valid Number");
        }

        count.textContent = num;
    })
})

generate.addEventListener("click", () => {
    if (generate.innerHTML == "GENERATE" && (document.querySelector("#actualBill").value > 0)) {
        bill = enterBill.value
        let tip = Math.floor(((tipAmount / 100) * bill) / num)
        console.log(tip)
        document.querySelector(".amount1").innerHTML = "₹" + tip + ".00"
        let totalAmount = Math.floor(bill / num)
        document.querySelector(".amount2").innerHTML = "₹" + Math.floor(((tipAmount / 100) * bill) + totalAmount) + ".00"
        generate.innerHTML = "RESET"
    }else if (generate.innerHTML == "RESET") {
        let tip = 0
        tipAmount = 0
        let totalAmount = 0
            document.querySelector(".amount1").innerHTML = "₹ " + tip + ".00"
            document.querySelector(".amount2").innerHTML = "₹ " + totalAmount + ".00"
            generate.innerHTML = "GENERATE"
            document.querySelector("#actualBill").value = ""
            percentage.forEach(nav => {
                nav.classList.remove("tip-button-active");
            })
            num = 0
            count.innerHTML = num
        }
})
    

 


