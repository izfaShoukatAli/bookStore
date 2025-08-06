const transPorter = require("../middlware/nodeMailer");
const contactModel = require("../model/contactModel");

const contactMasg = async (req, res) => {
  const { Name, Email, Message } = req.body;
  try {
    const newContact = new contactModel({ Name, Email, Message });
    await newContact.save();

    const info = await transPorter.sendMail({
      from: `"${Name}" <${Email}>`,
      to: process.env.HOST_MAIL,
      subject: "New Contact Message",
      html: `<h3>From: ${Name} (${Email})</h3><p>${Message}</p>`,
    });
    res
      .status(200)
      .json({ success: true, message: "Message send successfully" });
  } catch (error) {
    res.status(500).json({ error: "Intervel server error" });
    console.log(error);
  }
};
module.exports = { contactMasg };
