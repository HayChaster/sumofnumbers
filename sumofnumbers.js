let test = [1, 2, 3, 4, 5];

function sumFor(number)
{
  let total = 0;
  for(let num of number)
  {
    total += num;
  }
  return total;
}
console.log(sumFor(test));

function sumWhile(number)
{
  let total = 0;
  let i = 0;
  while(i < number.length)
  {
    total += number[i];
    i++;
  }
  return total;
}

console.log(sumWhile(test));

function sumRecursion(numbers)
{
  if(numbers.length == 0)
  {
    return 0;
  }
    return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
}

console.log(sumRecursion(test));

function sumTheSimpleWay(numbers)
{
  return _.reduce(numbers, function (memo, num){ return memo + num; }, 0);
}

console.log(sumTheSimpleWay(test));

