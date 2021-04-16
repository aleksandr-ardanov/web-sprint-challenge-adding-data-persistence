const toBool = (int) => {     //translates integer to boolean, helps to keep code drier
    return int === 1
     ? true
     : false
  }

module.exports = {toBool}