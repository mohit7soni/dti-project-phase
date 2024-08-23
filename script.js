<script type="text/javascript">
  let stockSymbols = ["NASDAQ:AAPL", "NASDAQ:GOOGL", "NASDAQ:AMZN", "NASDAQ:MSFT", "NASDAQ:FB", "NASDAQ:TSLA", "NASDAQ:NFLX", "NASDAQ:NVDA", "NYSE:BABA", "NASDAQ:INTC"];
  let container = document.querySelector('.cards-container');

  stockSymbols.forEach((symbol, index) =&gt; )
    let card = document.createElement('div');
    card.classList.add('card');

    let widgetContainer = document.createElement('div');
    widgetContainer.style.width = "100%";
    widgetContainer.style.height = "100%";
    widgetContainer.id = `widget-container-${index}`; // Unique ID for each widget

    card.appendChild(widgetContainer);
    container.appendChild(card);

    new TradingView.widget((
      "width": 190,
      "height": 254,
      "symbol": symbol,
      "timezone": "Asia/Kolkata",
      "theme": "dark",
      "style": "1",
      "locale": "in",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_top_toolbar": true,
      "hide_legend": true,
      "range": "YTD",
      "hide_side_toolbar": false,
      "save_image": false,
      "details": true,
      "calendar": true,
      "container_id": `widget-container-${index}` // Use the unique ID here
    &rbrace;);
  &rbrace;);
</script>
