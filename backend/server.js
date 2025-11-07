const express = require("express");
const mongoose = require("mongoose");
const ExcelJS = require("exceljs");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect MongoDB (local or Atlas)
mongoose
  .connect("mongodb://localhost:27017/weoneaviation", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Define schema & model
const formSchema = new mongoose.Schema({
  name: String,
  number: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Form = mongoose.model("Form", formSchema);

// 📨 POST: Receive form data
app.post("/api/form", async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.json({ success: true, message: "Form data saved to MongoDB" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 📄 GET: Show all submissions (HTML table)
app.get("/submissions", async (req, res) => {
  try {
    const data = await Form.find().sort({ date: -1 });

    let html = `
      <html>
      <head>
        <title>Form Submissions</title>
        <style>
          body { font-family: Arial; margin: 20px; background: #f5f5f5; }
          table { border-collapse: collapse; width: 100%; background: white; }
          th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
          th { background-color: #007bff; color: white; }
          tr:nth-child(even) { background-color: #f2f2f2; }
        </style>
      </head>
      <body>
        <h2>📋 Form Submissions</h2>
        <a href="/download-excel" style="display:inline-block;padding:10px 15px;background:#28a745;color:white;text-decoration:none;border-radius:5px;">⬇ Download Excel</a>
        <br/><br/>
        <table>
          <tr><th>Name</th><th>Number</th><th>Message</th><th>Date</th></tr>
          ${data.map(entry => `
            <tr>
              <td>${entry.name}</td>
              <td>${entry.number}</td>
              <td>${entry.message}</td>
              <td>${new Date(entry.date).toLocaleString()}</td>
            </tr>
          `).join("")}
        </table>
      </body>
      </html>
    `;

    res.send(html);
  } catch (err) {
    res.status(500).send("Error fetching data");
  }
});

// 📦 GET: Download data as Excel
app.get("/download-excel", async (req, res) => {
  try {
    const data = await Form.find().sort({ date: -1 });
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Submissions");

    // Headers
    sheet.columns = [
      { header: "Name", key: "name", width: 25 },
      { header: "Number", key: "number", width: 20 },
      { header: "Message", key: "message", width: 40 },
      { header: "Date", key: "date", width: 25 },
    ];

    // Data rows
    data.forEach(entry => {
      sheet.addRow({
        name: entry.name,
        number: entry.number,
        message: entry.message,
        date: new Date(entry.date).toLocaleString(),
      });
    });

    // Write and send file
    const filePath = path.join(__dirname, "submissions.xlsx");
    await workbook.xlsx.writeFile(filePath);
    res.download(filePath);
  } catch (err) {
    res.status(500).send("Error generating Excel file");
  }
});

// ✅ Start server
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
