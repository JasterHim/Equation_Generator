const randomEquationsLvl1 = () => {
  const variableNames = ['x', 'y', 't', 'z', 'n', 'm', 'a', 'b'];
  const variable = variableNames[randomAbsolute(variableNames.length)];
  const secret = randomValue(25); // maximum number limit [-25; 25]
  const multiplyOrDivide = randomAbsolute(2);
  const factor = randomValue(15);
  const addOrSubtract = randomAbsolute(2);
  const freeValue = randomValue(30);
  let total = 0;
  let equations = '';

  if (multiplyOrDivide) {
    if (addOrSubtract) {
      total = secret * factor + freeValue;

      if (freeValue >= 0) {
        equations = `${factor}${variable} ${(freeValue) ? `+ ${freeValue} ` : ''}= ${total}`;
      } else {
        equations = `${factor}${variable} + (${freeValue}) = ${total}`;
      }
    } else {
      total = secret * factor - freeValue;

      if (freeValue >= 0) {
        equations = `${factor}${variable} ${(freeValue) ? `- ${freeValue} ` : ''}= ${total}`;
      } else {
        equations = `${factor}${variable} - (${freeValue}) = ${total}`;
      }
    }
  } else {
    if (addOrSubtract) {
      total = (freeValue * factor + secret) / factor;

      if (Number.isInteger(total)) {
        if (freeValue >= 0) {
          equations = `${(factor > 0) ? `${variable} / ${factor}`: `${variable} / (${factor})`} ` 
            + `${(freeValue) ? `+ ${freeValue} ` : ''}= ${total}`;
        } else {
          equations = `${(factor > 0) ? `${variable} / ${factor}`: `${variable} / (${factor})`} ` 
            + `+ (${freeValue}) = ${total}`;
        }

      } else {
        if (freeValue >= 0) {
          equations = `${(factor > 0) ? `${variable} / ${factor}`: `${variable} / (${factor})`} ` 
            + `${(freeValue) ? `+ ${freeValue} ` : ''}= ${freeValue * factor + secret} / ${factor}`;
        } else {
          equations = `${(factor > 0) ? `${variable} / ${factor}`: `${variable} / (${factor})`} ` 
            + `+ (${freeValue}) = ${freeValue * factor + secret} / ${factor}`;
        }

      }

    } else {
      total = ( secret - freeValue * factor) / factor;

      if (Number.isInteger(total)) {
        if (freeValue >= 0) {
          equations = `${(factor > 0) ? `${variable} / ${factor}`: `${variable} / (${factor})`} ` 
            + `${(freeValue) ? `- ${freeValue} ` : ''}= ${total}`;
        } else {
          equations = `${(factor > 0) ? `${variable} / ${factor}`: `${variable} / (${factor})`} ` 
            + `- (${freeValue}) = ${total}`;
        }

      } else {
        if (freeValue >= 0) {
          equations = `${(factor > 0) ? `${variable} / ${factor}`: `${variable} / (${factor})`} ` 
            + `${(freeValue) ? `- ${freeValue} ` : ''}= ${freeValue * factor + secret} / ${factor}`;
        } else {
          equations = `${(factor > 0) ? `${variable} / ${factor}`: `${variable} / (${factor})`} ` 
            + `- (${freeValue}) = ${freeValue * factor + secret} / ${factor}`;
        }

      }
    }
  }

  return { equations, secret };
};

module.exports = {
  randomEquationsLvl1,
}