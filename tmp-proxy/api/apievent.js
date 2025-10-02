export default async function handler(req, res) {
  const { id } = req.query; // ?id=18845
  if (!id) {
    return res.status(400).json({ error: "Немає ID події" });
  }

  try {
    const response = await fetch(`https://api.truckersmp.com/v2/events/${id}`);
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
}
