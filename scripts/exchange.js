$(document).ready(function () {
  //setData population from json file
  class ExChange {
    constructor(_id, _source) {
      this._id = _id;
      this._source.type = _source.type;
      this._source.isin = _source.isin;
    }
    static GenerateRow(obj) {
      return `<tr>
                <td>${obj._id}</td>
                <td>${obj._source.type}</td>
                <td>${obj._source.isin}</td>
                </tr>`;
    }
  }
  async function GetAllExChange() {
    try {
      let _htmlRow = "";
      let _data = await axios.get("../data/exchange.json");
      console.log(_data.data.hits);
      _data.data.hits.hits.forEach(function (item) {
        _htmlRow += ExChange.GenerateRow(item);
      });
      document.getElementById("setData").innerHTML = _htmlRow;
      new DataTable("#example");
    } catch (error) {
      console.error(error);
    }
  }
  GetAllExChange();
});
