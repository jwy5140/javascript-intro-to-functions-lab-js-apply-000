function shout(string)
{
  var string2 = string.split();
  for (n = 0; n < string.length; n++)
  {
    string2[n] = string2[n] - 32;
  }
  string = string2;
  return string;
}