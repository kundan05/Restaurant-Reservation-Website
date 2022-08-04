function mvalid()
{
    var mname = document.getElementById('Qnty').value;

    if(mname < 1)
    {
        alert("Failed to place order")
        return false; 
    }
    else

    {
        alert("Your Order Placed Sucessfully ")
        true;
    }
}