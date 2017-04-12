const fs = require('fs');


module.exports = {
  writeJson: (filename, data) => {
    fs.writeFileSync(filename, JSON.stringify(data));
  },
};
