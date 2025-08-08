export default async function handler(req, res) {
  const symbol = req.query.symbol;
  if (!symbol) {
    res.status(400).json({ error: 'Missing symbol parameter' });
    return;
  }

  const apiKey = process.env.zxwpWWe85Ai7DxTFATbqC97sUdkJODArFMipveZu; // 在 Vercel 设置此环境变量
  const url = `https://api.stockdata.org/v1/data/quote?symbols=${encodeURIComponent(symbol)}&api_token=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

    res.status(response.status).send(text);
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: String(err) }));
  }
}
