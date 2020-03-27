const entryPriceInput     = document.getElementById('entry-price');
const stopPriceInput      = document.getElementById('stop-price');
const targetInput         = document.getElementById('target');
const portfolioValueInput = document.getElementById('portfolio-value');
const riskPercentInput    = document.getElementById('risk-percent');

const calculateButton     = document.getElementById('calculate-button');

const entrySlDistanceSpan = document.getElementById('entry-sl-distance');
const positionSizeSpan    = document.getElementById('position-size');
const rewardSpan          = document.getElementById('reward');

// init
entryPriceInput.value = 3899.5;
stopPriceInput.value = 3858.15;
portfolioValueInput.value = 100;
riskPercentInput.value = 1;

// calculate
const calculate = function() {
  const entryPrice        = +entryPriceInput.value;
  const stopPrice         = +stopPriceInput.value;
  const targetPrice       = +targetInput.value;
  const portfolioValue    = +portfolioValueInput.value;
  const riskValue         = +riskPercentInput.value / 100;
  const entrySlDistance   = 1 - (stopPrice / entryPrice);

  entrySlDistanceSpan.innerText = `${100 * entrySlDistance}%`;
  positionSizeSpan.innerText = `${(portfolioValue * riskValue) / entrySlDistance}`;
}

calculateButton.addEventListener('click', calculate);
