function add(n1, n2){
  return n1 + n2;
}

function divide(n1, n2){
  return n1 / n2;
}

function multiply(n1, n2){
  return n1 * n2;
}


function get_num(id){
  return id.charAt(4)
}

function store_num(num){
  if (num1 == null){
    num1 = num;
    $('#num1').text(num)
  }
  else if(num2 == null && calc_operator != null){
    num2 = num;
    $('#num2').text(num)
  }
}

function store_op(op){
  if(num1 != null && calc_operator == null){
    calc_operator = op;
    $('#operator').text(operator_string_convert[op])
    console.log(op)
  }
}

function clear(){
  num1 = null;
  num2 = null;
  calc_operator = null;
  $('#operator').text("")
  $('#num1').text("")
  $('#num2').text("")
  $('#answer').text("");
}

function do_operation(){
  num1 = Number(num1);
  num2 = Number(num2);
  switch(calc_operator){
    case "op-add":
      answer = add(num1, num2);
      break;
    case "op-sub":
      answer = add(num1, num2 * - 1)
      break;
    case "op-multi":
      answer = multiply(num1, num2);
      break;
    case "op-div":
      answer = divide(num1, num2);
      break;

  }
  $('#answer').text(answer);
}

//very bad to use globals
num1 = null;
num2 = null;
calc_operator = null;
answer = null;
var operator_string_convert = {};
operator_string_convert["op-add"]   = "+";
operator_string_convert["op-sub"]   = "-";
operator_string_convert["op-multi"] = "*"
operator_string_convert["op-div"]   = "/"

$('.calc-num').click(function(){
  num = get_num($(this).attr('id'));
  console.log(num)
  store_num(num)
});

$('.calc-operator').click(function() {
  operation = $(this).attr('id');
  switch(operation){
    case "op-eq":
      do_operation();
      break;
    case "op-clear":
      clear();
      break;
    default:
      store_op(operation);
  }
});