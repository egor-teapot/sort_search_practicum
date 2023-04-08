const knuthMorrisParrat = (data, pattern) => {
    function search(word, string) {
        'use strict';
      
        var m = 0;
        var i = 0;
        var table = [];
      
        var pos = 2;
        var cnd = 0;
      
        table[0] = -1;
        table[1] = 0;
      
        while (pos < word.length) {
          if (word[pos - 1] == word[cnd]) {
            cnd = cnd + 1;
            table[pos] = cnd;
            pos = pos + 1;
          } else if (cnd > 0) {
            cnd = table[cnd];
          } else {
            table[pos] = 0;
            pos = pos + 1;
          }
        }
        
        while (m + i < string.length) {
          if (word[i] == string[m + i]) {
            if (i == word.length - 1) {
              return m;
            }
            i = i + 1;
          } else {
            if (table[i] > -1) {
              m = m + i - table[i];
              i = table[i];
            } else {
              i = 0;
              m = m + 1;
            }
          }
        }

        return -1;
    };

    return search(pattern, data)
}





