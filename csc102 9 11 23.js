function functAlert()
{
    alert("this button was selected on 9 11 23");
    var popupNum1 = Math.ceil(Math.random()*100);
    var popupNum2 = Math.ceil(Math.random()*100);
    var sum = popupNum1+popupNum2;

     alert("First num = " + popupNum1 +  "  Second num " + popupNum2);

    if (popupNum1 % 10 ==0)
    {
     alert("popupNum1 = " + popupNum1 + "  and this # is EVEN");
    }
    else
    {
     alert("popupNum1 = " + popupNum1 + "  and this is ODD");
    }
    
    if (sum >90)
    {
     alert("Very Good Mark!");
    
    }
    else if (sum >75)
    {
     alert("average mark")
    }
    else if (sum ==62)
    {
     alert("not a passing grade")
    }
    else
    {
     alert("bad grade");
    } 

}
