$(document).ready(function () {
  //setData population from json file
  class Candle {
    constructor(_source) {
      this._source.symbol = symbol;
      this._source.startPrice = startPrice;
      this._source.lowestPrice = _source.lowestPrice;
      this._source.highestPrice = _source.highestPrice;
    }
    static GenerateRow(obj) {
      return `<tr>
                <td>${obj._source.symbol}</td>
                <td>${obj._source.startPrice}</td>
                <td>${obj._source.lowestPrice}</td>
                <td>${obj._source.highestPrice}</td>
                </tr>`;
    }
  }
  async function getAllCandle() {
    try {
      let _htmlRow = "";
      let _data = await axios.get("../data/candle.json");
      console.log(_data.data.hits);
      _data.data.hits.hits.forEach(function (item) {
        _htmlRow += Candle.GenerateRow(item);
      });
      document.getElementById("setData").innerHTML = _htmlRow;
      new DataTable("#example");
    } catch (error) {
      console.error(error);
    }
  }
  getAllCandle();
});
