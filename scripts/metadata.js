$(document).ready(function () {
  //setData population from json file
  class Metadata {
    constructor(_source) {
      this._source.symbol = _source.symbol;
      this._source.type = _source.type;
      this._source, (countryName = _source.countryName);
    }
    static GenerateRow(obj) {
      return `<tr>
                <td>${obj._source.symbol}</td>
                <td>${obj._source.type}</td>
                <td>${obj._source.countryName}</td>

                </tr>`;
    }
  }
  async function GetAllExChange() {
    try {
      let _htmlRow = "";
      let _data = await axios.get("../data/metadata.json");
      console.log(_data.data.hits.hits[0]._source.countryName);
      _data.data.hits.hits.forEach(function (item) {
        _htmlRow += Metadata.GenerateRow(item);
      });
      document.getElementById("setData").innerHTML = _htmlRow;
      new DataTable("#example");
    } catch (error) {
      console.error(error);
    }
  }
  GetAllExChange();
});
