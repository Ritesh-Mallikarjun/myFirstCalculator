var result=document.getElementById("result");
var screenValue="";
buttons=document.querySelectorAll("button");//formation of array.
for(item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText=="x"){
            buttonText="*";
            screenValue+=buttonText;
            result.value=screenValue;
        }
        else if(buttonText=="←"){
            var myexpr=/[=*-+./]/;
            var t=myexpr.test(result.value);
            if(t)//to check it is true or not
            {
                screenValue=""; 
                result.value=screenValue;
            }
            else//to check whether its false or not
            {
                if(Number(screenValue)!==0){
                    remainder=(Number(screenValue))%10;
                    screenValue=((screenValue-remainder)/10);
                    result.value=screenValue;
                }
                else{
                    screenValue="";
                    result.value=screenValue;
                }
            }
        }
        else if(buttonText=="AC"){
            screenValue=""
            result.value="0";
        }
        else if(buttonText=="x2"){
           screenValue=Math.pow(screenValue,2);
           result.value=screenValue;
        }
        else if(buttonText=="="){
            var mod=/[Mod]/
            if(mod.test(screenValue)){
                screenValue=screenValue.replace("Mod","%");
            }
            result.value=result.value+" = "+eval(screenValue);
            percent_value=eval(screenValue);
            screenValue="";
        }
        else if(buttonText=="sin"){
            screenValue=Math.sin(screenValue);
            result.value="sin"+result.value+" = "+screenValue;
        }
        else if(buttonText=="cos"){
            screenValue=Math.cos(screenValue);
            result.value="cos"+result.value+" = "+screenValue;
        }
        // %,mod
        else if(buttonText=="2√"){
            screenValue=Math.sqrt(screenValue);
            result.value=screenValue;
        }
        else if(buttonText=="%"){
            var exp=/[/*+-]/
            if(exp.test(screenValue)){
                screenValue=eval(screenValue)
            }
            var exp1=/[=]/
            if(exp1.test(result.value)){
                screenValue=percent_value;
            }
            screenValue=Number(screenValue)/100;
            result.value=result.value+"%"+" = "+screenValue;
        } 
        else{
            screenValue+=buttonText;
            result.value=screenValue;
        }
    })
}