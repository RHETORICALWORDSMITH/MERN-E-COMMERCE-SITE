import purchaseHistory from "../models/purchaseHistory.model.js";


const sendPurchaseHistory = async (req, res) => {
    try {
        const history = await purchaseHistory.find(); //searches the anime folder in database
        res.status(200).json(history);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error });
      }
}

export default sendPurchaseHistory;