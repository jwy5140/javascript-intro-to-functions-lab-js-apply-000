function shout(string)
{
  var string2 = string.toUpperCase();
  return string2;
}

function whisper(string)
{
  var string2 = string.toLowerCase();
  return string2;
}

function logShout(string)
{
  var x = function shout(string);
  console.log(x);
}

function logWhisper(string)
{
  var z = function whisper(string);
  console.log(z);
}