Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET,OPTIONS
Access-Control-Allow-Headers: Content-Type

export default async function handler(req, res) {
  const symbol = req.query.symbol;
  if (!symbol) {
    res.status(400).json({ error: 'Missing symbol parameter' });
    return;
  }

  const apiKey = process.env.STOCKDATA_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Missing STOCKDATA_API_KEY environment variable' });
    return;
  }

  const url = `https://api.stockdata.org/v1/data/quote?symbols=${encodeURIComponent(symbol)}&api_token=${apiKey}`;

  try {
    console.log('Fetching URL:', url);
    const response = await fetch(url);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response from API:', errorText);
      res.status(response.status).json({ error: errorText });
      return;
    }

    const data = await response.json();
    console.log('API response data:', data);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ error: err.message });
  }
}
