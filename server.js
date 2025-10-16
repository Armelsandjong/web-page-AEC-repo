const express = require('express');
const app = express();
app.use(express.static('public')); // This serves files from the public folder

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
