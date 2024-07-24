// import purchaseHistory from "../models/purchaseHistory.model.js";

// const getPurchaseHistory = async (req, res) => {
//   try {
//     const history = req.body;

//     // Sort the history array by dateTime
//     const sortedHistory = [...history].sort((a, b) => new Date(a.date) - new Date(b.date));
//     console.log(sortedHistory);

//     for (const item of sortedHistory) {
//       const { email, id, noItem, date, name, price, location, category, image, title } = item;

//       // Upsert: update if exists, otherwise insert
//       await purchaseHistory.updateOne(
//         { email, id },  // Query: find by email and id
//         { $set: { email, id, noItem, date, name, price, location, category, image, title } },  // Update operation
//         { upsert: true }  // If no document matches, create a new one
//       );
//     }

//     res.status(200).send({ message: 'Purchase history updated successfully.' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Failed to save purchase history.' });
//   }
// };

// export default getPurchaseHistory;

import purchaseHistory from "../models/purchaseHistory.model.js";

const getPurchaseHistory = async (req, res) => {
  try {
    const history = req.body;

    // Sort the history array by dateTime
    const sortedHistory = [...history].sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log(sortedHistory);
    await purchaseHistory.insertMany(sortedHistory); 


    res.status(200).send({ message: 'Purchase history updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Failed to save purchase history.' });
  }
};

export default getPurchaseHistory;

