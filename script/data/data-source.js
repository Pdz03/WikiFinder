import $ from 'jquery';

class DataSource {
  static searchItem(keyword) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `https://id.wikipedia.org/w/api.php?action=query&list=search&srsearch=${keyword}&utf8=&format=json`,
        dataType: 'jsonp',
        success: (data) => {
          if (data.query) {
            if (data.query.searchinfo.totalhits !==0) {
              resolve(data.query.search);
            } else {
              reject(`Data ${keyword} tidak ditemukan!`);
            }
          } else {
            reject(`Tidak ditemukan data apapun`);
          }
        },
      });
    });
  }
}

export default DataSource;
