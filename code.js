$(document).ready(function () {

    $('#firstTextBox').change(firstTextBoxHeader);
    $('#secondTextBox').change(secondTextBoxHeader);
    $('#thirdTextBox').change(thirdTextBoxHeader);
    $("input[name=part]").change(add);


    var firstTotalPrice = 0;
    var secondTotalPrice = 0;
    var thirdTotalPrice = 0;

    function firstTextBoxHeader()
    {


        //Grabbing first input from the first text box
        let firstQuantity = parseFloat($("#firstTextBox").val());


        //Text box input * the data price
        firstTotalPrice = firstQuantity * $(this).data("price");


        // Total price of part in first text box
        $("#firstOutput").text(firstTotalPrice.toFixed(2));
    }


    function secondTextBoxHeader()
    {


        //Grabbing second input from the first text box
        let secondQuantity = parseFloat($("#secondTextBox").val());

        //Text box input * the data price
        secondTotalPrice = secondQuantity * $(this).data("price");

        // Total price of part in first text box
        $("#secondOutput").text(secondTotalPrice.toFixed(2));
    }

    function thirdTextBoxHeader()
    {
        //Grabbing third input from the first text box
        let thirdQuantity = parseFloat($("#thirdTextBox").val());

        //Text box input * the data price
        thirdTotalPrice = thirdQuantity * $(this).data("price");

        // Total price of part in first text box
        $("#thirdOutput").text(thirdTotalPrice.toFixed(2));
    }



    function add (){


        //Grand Total of all parts in the list
        let grandTotal = firstTotalPrice + secondTotalPrice + thirdTotalPrice;

        $("#grandTotalOutPut").text(grandTotal.toFixed(2));
    }



});