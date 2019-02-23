import * as math from 'mathjs';

export default function roar(input) {
  try {
   return math.eval(input)
  }
  catch(error) {
    return 0;
  }
}
